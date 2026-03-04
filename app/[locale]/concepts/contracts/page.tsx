import { getMarkdownFile } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleNavigation } from '@/components/article-navigation'
import { MarkdownContent } from '@/components/markdown-content'

const labels: Record<string, Record<string, string>> = {
  home: { en: 'Home', es: 'Inicio', fr: 'Accueil' },
  concepts: { en: 'Concepts', es: 'Conceptos', fr: 'Concepts' },
  contracts: { en: 'Contracts', es: 'Contratos', fr: 'Contrats' },
}

export default async function ContractsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const file = await getMarkdownFile(locale, 'concepts/contracts')
  if (!file) notFound()
  const t = (key: string) => labels[key]?.[locale] || labels[key]?.en || key

  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { title: t('home'), href: '/' },
          { title: t('concepts'), href: '/concepts' },
          { title: t('contracts'), href: '/concepts/contracts' },
        ]}
      />
      <article className="prose prose-invert max-w-none">
        {file.description && (
          <p className="text-xl text-gray-400 mb-6 italic">{file.description}</p>
        )}
        <MarkdownContent html={file.content} />
      </article>
      <ArticleNavigation currentSlug="contracts" />
    </div>
  )
}
