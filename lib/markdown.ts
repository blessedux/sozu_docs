import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const contentDirectory = path.join(process.cwd(), 'content')

export interface MarkdownFile {
  slug: string
  title: string
  description?: string
  content: string
  rawContent: string
  frontMatter: Record<string, any>
}

export async function getMarkdownFile(
  locale: string,
  slug: string
): Promise<MarkdownFile | null> {
  try {
    const fullPath = path.join(contentDirectory, locale, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Process markdown to HTML with heading IDs
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        behavior: 'wrap',
        properties: {
          className: ['anchor-link'],
          ariaLabel: (node: any) => `Link to ${node.properties?.id || ''}`,
        },
      })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content)

    return {
      slug,
      title: data.title || slug,
      description: data.description,
      content: processedContent.toString(),
      rawContent: content,
      frontMatter: data,
    }
  } catch (error) {
    console.error(`Error reading markdown file ${slug}:`, error)
    return null
  }
}

export function getAllMarkdownFiles(locale: string): MarkdownFile[] {
  const localeDir = path.join(contentDirectory, locale)
  
  if (!fs.existsSync(localeDir)) {
    return []
  }

  const files = fs.readdirSync(localeDir, { recursive: true })
  const markdownFiles: MarkdownFile[] = []

  for (const file of files) {
    if (typeof file === 'string' && file.endsWith('.md')) {
      const slug = file.replace(/\.md$/, '').replace(/\//g, '/')
      const fullPath = path.join(localeDir, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      markdownFiles.push({
        slug,
        title: data.title || slug,
        description: data.description,
        content: '',
        frontMatter: data,
      })
    }
  }

  return markdownFiles
}
