"use client"

import { Link } from '@/i18n/routing'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale } from 'next-intl'

interface ArticleNavigationProps {
  currentSlug: string
}

const articleOrder = [
  { slug: 'credit', title: { en: 'Credit System', es: 'Sistema de Crédito', fr: 'Système de Crédit' } },
  { slug: 'wallet', title: { en: 'Sozu Wallet', es: 'Sozu Wallet', fr: 'Sozu Wallet' } },
  { slug: 'how-it-works', title: { en: 'How It Works', es: 'Cómo Funciona', fr: 'Comment ça marche' } },
  { slug: 'entrepreneurs', title: { en: 'For Entrepreneurs', es: 'Para Emprendedores', fr: 'Pour les Entrepreneurs' } },
]

export function ArticleNavigation({ currentSlug }: ArticleNavigationProps) {
  const locale = useLocale()
  const currentIndex = articleOrder.findIndex(article => article.slug === currentSlug)
  
  const prevArticle = currentIndex > 0 ? articleOrder[currentIndex - 1] : null
  const nextArticle = currentIndex < articleOrder.length - 1 ? articleOrder[currentIndex + 1] : null

  if (!prevArticle && !nextArticle) {
    return null
  }

  const getTitle = (article: typeof articleOrder[0]) => {
    return article.title[locale as keyof typeof article.title] || article.title.en
  }

  return (
    <nav className="mt-12 pt-8 border-t border-gray-700 flex items-center justify-between gap-4">
      {prevArticle ? (
        <Link
          href={`/concepts/${prevArticle.slug}`}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-colors group"
        >
          <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              Previous
            </span>
            <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
              {getTitle(prevArticle)}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      
      {nextArticle && (
        <Link
          href={`/concepts/${nextArticle.slug}`}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-colors group ml-auto"
        >
          <div className="flex flex-col text-right">
            <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              Next
            </span>
            <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
              {getTitle(nextArticle)}
            </span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
        </Link>
      )}
    </nav>
  )
}

