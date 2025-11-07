'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { ArrowUpRight, CreditCard, Wallet, Zap, Users } from "lucide-react"

export function NavigationCards() {
  const t = useTranslations('HomePage')

  const cards = [
    {
      href: `/concepts/credit`,
      icon: <CreditCard className="h-6 w-6" />,
      title: t('credit.title'),
      subtitle: t('credit.subtitle'),
      description: t('credit.description'),
    },
    {
      href: `/concepts/wallet`,
      icon: <Wallet className="h-6 w-6" />,
      title: t('wallet.title'),
      subtitle: t('wallet.subtitle'),
      description: t('wallet.description'),
    },
    {
      href: `/concepts/how-it-works`,
      icon: <Zap className="h-6 w-6" />,
      title: t('howItWorks.title'),
      subtitle: t('howItWorks.subtitle'),
      description: t('howItWorks.description'),
    },
    {
      href: `/concepts/entrepreneurs`,
      icon: <Users className="h-6 w-6" />,
      title: t('entrepreneurs.title'),
      subtitle: t('entrepreneurs.subtitle'),
      description: t('entrepreneurs.description'),
    },
  ]

  return (
    <section className="px-4 py-12 md:px-6 md:py-16 relative z-10">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <Link 
              key={index} 
              href={card.href} 
              className="group block relative z-10 cursor-pointer"
            >
              <div className="flex h-full flex-col rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-gray-700 hover:bg-gray-900/80">
                <div className="mb-4 flex items-center justify-between">
                  {card.icon}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h2 className="mb-1 text-2xl font-bold">{card.title}</h2>
                {card.subtitle && (
                  <p className="mb-3 text-sm text-muted-foreground italic">{card.subtitle}</p>
                )}
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

