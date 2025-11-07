import { getMarkdownFile } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/breadcrumb'

export default async function WalletPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const file = await getMarkdownFile(locale, 'concepts/wallet')

  if (!file) {
    notFound()
  }

  // Breadcrumb translations
  const breadcrumbs = {
    home: locale === 'es' ? 'Inicio' : locale === 'fr' ? 'Accueil' : 'Home',
    concepts: locale === 'es' ? 'Conceptos' : locale === 'fr' ? 'Concepts' : 'Concepts',
    wallet: locale === 'es' ? 'Billetera' : locale === 'fr' ? 'Portefeuille' : 'Wallet',
  }

  return (
    <div className="space-y-6">
      <Breadcrumb 
        items={[
          { title: breadcrumbs.home, href: `/` },
          { title: breadcrumbs.concepts, href: `/concepts` },
          { title: breadcrumbs.wallet, href: `/concepts/wallet` }
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

