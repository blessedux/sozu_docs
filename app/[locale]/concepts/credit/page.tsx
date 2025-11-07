import { getMarkdownFile } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'
import { useLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export default async function CreditPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const file = await getMarkdownFile(locale, 'concepts/credit')

  if (!file) {
    notFound()
  }

  // Breadcrumb translations
  const breadcrumbs = {
    home: locale === 'es' ? 'Inicio' : locale === 'fr' ? 'Accueil' : 'Home',
    concepts: locale === 'es' ? 'Conceptos' : locale === 'fr' ? 'Concepts' : 'Concepts',
    credit: locale === 'es' ? 'Crédito' : locale === 'fr' ? 'Crédit' : 'Credit',
  }

  return (
    <div className="space-y-6">
      <Breadcrumb 
        items={[
          { title: breadcrumbs.home, href: `/` },
          { title: breadcrumbs.concepts, href: `/concepts` },
          { title: breadcrumbs.credit, href: `/concepts/credit` }
        ]} 
      />
      
      <article className="prose prose-invert max-w-none">
        {file.description && (
          <p className="text-xl text-gray-400 mb-6 italic">{file.description}</p>
        )}
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: file.content }}
        />
      </article>
    </div>
  )
}
