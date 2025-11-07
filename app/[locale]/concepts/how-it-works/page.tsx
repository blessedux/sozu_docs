import { getMarkdownFile } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleNavigation } from '@/components/article-navigation'
import { MarkdownContent } from '@/components/markdown-content'

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const file = await getMarkdownFile(locale, 'concepts/how-it-works')

  if (!file) {
    notFound()
  }

  // Breadcrumb translations
  const breadcrumbs = {
    home: locale === 'es' ? 'Inicio' : locale === 'fr' ? 'Accueil' : 'Home',
    concepts: locale === 'es' ? 'Conceptos' : locale === 'fr' ? 'Concepts' : 'Concepts',
    howItWorks: locale === 'es' ? 'Cómo Funciona' : locale === 'fr' ? 'Comment ça marche' : 'How It Works',
  }

  return (
    <div className="space-y-6">
      <Breadcrumb 
        items={[
          { title: breadcrumbs.home, href: `/` },
          { title: breadcrumbs.concepts, href: `/concepts` },
          { title: breadcrumbs.howItWorks, href: `/concepts/how-it-works` }
        ]} 
      />
      
      <article className="prose prose-invert max-w-none">
        {file.description && (
          <p className="text-xl text-gray-400 mb-6 italic">{file.description}</p>
        )}
        <MarkdownContent html={file.content} />
      </article>
      
      <ArticleNavigation currentSlug="how-it-works" />
    </div>
  )
}

