import { getMarkdownFile } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { ArticleNavigation } from '@/components/article-navigation'
import { MarkdownContent } from '@/components/markdown-content'

const labels: Record<string, { en: string; es: string; fr: string }> = {
  overview: { en: 'Overview', es: 'Resumen', fr: 'Aperçu' },
  concepts: { en: 'Concepts', es: 'Conceptos', fr: 'Concepts' },
  home: { en: 'Home', es: 'Inicio', fr: 'Accueil' },
}

export default async function OverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const file = await getMarkdownFile(locale, 'concepts/overview')
  if (!file) notFound()
  const t = (key: keyof typeof labels) => labels[key][locale as keyof typeof labels.en] || labels[key].en

  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { title: t('home'), href: '/' },
          { title: t('concepts'), href: '/concepts' },
          { title: t('overview'), href: '/concepts/overview' },
        ]}
      />
      <article className="prose prose-invert max-w-none">
        {file.description && (
          <p className="text-xl text-gray-400 mb-6 italic">{file.description}</p>
        )}
        <MarkdownContent html={file.content} />
      </article>
      <ArticleNavigation currentSlug="overview" />
    </div>
  )
}
