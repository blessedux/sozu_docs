"use client"

import { Link, usePathname } from '@/i18n/routing'
import { 
  Wallet,
  ChevronDown,
  CreditCard,
  Zap,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { useLocale } from 'next-intl'

interface DocLink {
  title: string
  href: string
}

interface DocSection {
  title: string
  items: DocLink[]
  icon?: React.ReactNode
  defaultOpen?: boolean
  slug: string
}

const getDocs = (locale: string): DocSection[] => {
  const isES = locale === 'es'
  const isFR = locale === 'fr'
  
  return [
    {
      title: isES ? 'Sistema de Crédito' : isFR ? 'Système de Crédit' : 'Credit System',
      icon: <CreditCard className="h-5 w-5" />,
      defaultOpen: false,
      slug: 'credit',
    items: [
        { title: isES ? 'Resumen' : isFR ? 'Aperçu' : 'Overview', href: `/concepts/credit#overview` },
        { title: isES ? 'La Billetera Sozu' : isFR ? 'Le Portefeuille Sozu' : 'The Sozu Wallet', href: `/concepts/credit#the-sozu-wallet` },
        { title: isES ? 'Creación de Billetera Inteligente' : isFR ? 'Création de Portefeuille Intelligent' : 'Smart Wallet Creation', href: `/concepts/credit#smart-wallet-creation` },
        { title: isES ? 'Lógica de Depósito Automático' : isFR ? 'Logique de Dépôt Automatique' : 'Auto-Deposit Vault Logic', href: `/concepts/credit#auto-deposit-vault-logic` },
        { title: isES ? 'Integración con Blend' : isFR ? 'Intégration Blend' : 'Blend Protocol Integration', href: `/concepts/credit#blend-protocol-integration` },
        { title: isES ? 'Mecánica de Colateralización' : isFR ? 'Mécanique de Collatéralisation' : 'Collateralization Mechanics', href: `/concepts/credit#collateralization-mechanics` },
        { title: isES ? 'Adecuado para Sozu Capital' : isFR ? 'Parfait pour Sozu Capital' : 'Perfect Fit for Sozu Capital', href: `/concepts/credit#perfect-fit-for-sozu-capital` },
        { title: isES ? 'Flujo de Usuario' : isFR ? 'Parcours Utilisateur' : 'User Journey', href: `/concepts/credit#user-journey` },
        { title: isES ? 'Arquitectura Técnica' : isFR ? 'Architecture Technique' : 'Technical Architecture', href: `/concepts/credit#technical-architecture` },
        { title: isES ? 'Beneficios para Usuarios' : isFR ? 'Avantages pour les Utilisateurs' : 'Benefits for Users', href: `/concepts/credit#benefits-for-users` },
        { title: isES ? 'Mejoras Futuras' : isFR ? 'Améliorations Futures' : 'Future Enhancements', href: `/concepts/credit#future-enhancements` },
      ]
    },
    {
      title: isES ? 'Sozu Wallet' : isFR ? 'Sozu Wallet' : 'Sozu Wallet',
      icon: <Wallet className="h-5 w-5" />,
      defaultOpen: false,
      slug: 'wallet',
      items: [
        { title: isES ? 'Resumen' : isFR ? 'Aperçu' : 'Overview', href: `/concepts/wallet#overview` },
        { title: isES ? 'Creación de Billetera Inteligente' : isFR ? 'Création de Portefeuille Intelligent' : 'Smart Wallet Creation', href: `/concepts/wallet#smart-wallet-creation` },
        { title: isES ? 'Autenticación con Passkey' : isFR ? 'Authentification Passkey' : 'Passkey Authentication', href: `/concepts/wallet#passkey-authentication` },
        { title: isES ? 'Soporte Multi-Activos' : isFR ? 'Support Multi-Actifs' : 'Multi-Asset Support', href: `/concepts/wallet#multi-asset-support` },
        { title: isES ? 'Auto-Custodia' : isFR ? 'Auto-Custodie' : 'Self-Custody', href: `/concepts/wallet#self-custody` },
        { title: isES ? 'Interoperabilidad Global' : isFR ? 'Interopérabilité Mondiale' : 'Global Interoperability', href: `/concepts/wallet#global-interoperability` },
        { title: isES ? 'Experiencia de Usuario' : isFR ? 'Expérience Utilisateur' : 'User Experience', href: `/concepts/wallet#user-experience` },
        { title: isES ? 'Privacidad y Seguridad' : isFR ? 'Confidentialité et Sécurité' : 'Privacy & Security', href: `/concepts/wallet#privacy--security` },
      ]
    },
    {
      title: isES ? 'Cómo Funciona' : isFR ? 'Comment ça marche' : 'How It Works',
      icon: <Zap className="h-5 w-5" />,
      defaultOpen: false,
      slug: 'how-it-works',
      items: [
        { title: isES ? 'Resumen' : isFR ? 'Aperçu' : 'Overview', href: `/concepts/how-it-works#overview` },
        { title: isES ? 'El Flujo' : isFR ? 'Le Flux' : 'The Flow', href: `/concepts/how-it-works#the-flow` },
        { title: isES ? 'Financiamiento de Donantes' : isFR ? 'Financement des Donateurs' : 'Donor Funding', href: `/concepts/how-it-works#donor-funding` },
        { title: isES ? 'Asignación de Bóvedas' : isFR ? 'Allocation des Coffres' : 'Vault Allocation', href: `/concepts/how-it-works#vault-allocation` },
        { title: isES ? 'Crédito Basado en Confianza' : isFR ? 'Crédit Basé sur la Confiance' : 'Trust-Based Credit', href: `/concepts/how-it-works#trust-based-credit` },
        { title: isES ? 'Prueba de Asignación' : isFR ? 'Preuve d\'Allocation' : 'Proof of Allocation', href: `/concepts/how-it-works#proof-of-allocation` },
        { title: isES ? 'El Ecosistema' : isFR ? 'L\'Écosystème' : 'The Ecosystem', href: `/concepts/how-it-works#the-ecosystem` },
        { title: isES ? 'Arquitectura Técnica' : isFR ? 'Architecture Technique' : 'Technical Architecture', href: `/concepts/how-it-works#technical-architecture` },
        { title: isES ? 'Parcours Utilisateur' : isFR ? 'Parcours Utilisateur' : 'User Journey', href: `/concepts/how-it-works#user-journey` },
        { title: isES ? 'Transparencia y Responsabilidad' : isFR ? 'Transparence et Responsabilité' : 'Transparency & Accountability', href: `/concepts/how-it-works#transparency--accountability` },
        { title: isES ? 'Métricas de Impacto' : isFR ? 'Métriques d\'Impact' : 'Impact Metrics', href: `/concepts/how-it-works#impact-metrics` },
      ]
    },
    {
      title: isES ? 'Para Emprendedores' : isFR ? 'Pour les Entrepreneurs' : 'For Entrepreneurs',
      icon: <Users className="h-5 w-5" />,
      defaultOpen: false,
      slug: 'entrepreneurs',
      items: [
        { title: isES ? 'Resumen' : isFR ? 'Aperçu' : 'Overview', href: `/concepts/entrepreneurs#overview` },
        { title: isES ? 'Comenzando' : isFR ? 'Pour Commencer' : 'Getting Started', href: `/concepts/entrepreneurs#getting-started` },
        { title: isES ? 'Crear tu Billetera' : isFR ? 'Créer votre Portefeuille' : 'Create Your Wallet', href: `/concepts/entrepreneurs#create-your-wallet` },
        { title: isES ? 'Completar Educación' : isFR ? 'Compléter l\'Éducation' : 'Complete Education', href: `/concepts/entrepreneurs#complete-education` },
        { title: isES ? 'Construir tu Puntuación de Confianza' : isFR ? 'Construire votre Score de Confiance' : 'Build Your Trust Score', href: `/concepts/entrepreneurs#build-your-trust-score` },
        { title: isES ? 'Recibir Crédito' : isFR ? 'Recevoir du Crédit' : 'Receive Credit', href: `/concepts/entrepreneurs#receive-credit` },
        { title: isES ? 'Gestionar tu Crédito' : isFR ? 'Gérer votre Crédit' : 'Managing Your Credit', href: `/concepts/entrepreneurs#managing-your-credit` },
        { title: isES ? 'Rastrear Reembolsos' : isFR ? 'Suivre les Remboursements' : 'Track Repayments', href: `/concepts/entrepreneurs#track-repayments` },
        { title: isES ? 'Hacer Pagos' : isFR ? 'Effectuer des Paiements' : 'Make Payments', href: `/concepts/entrepreneurs#make-payments` },
        { title: isES ? 'Construir Historial de Crédito' : isFR ? 'Construire l\'Historique de Crédit' : 'Build Credit History', href: `/concepts/entrepreneurs#build-credit-history` },
        { title: isES ? 'Gestión Financiera' : isFR ? 'Gestion Financière' : 'Financial Management', href: `/concepts/entrepreneurs#financial-management` },
        { title: isES ? 'Historias de Éxito' : isFR ? 'Histoires de Succès' : 'Success Stories', href: `/concepts/entrepreneurs#success-stories` },
        { title: isES ? 'Soporte y Recursos' : isFR ? 'Support et Ressources' : 'Support & Resources', href: `/concepts/entrepreneurs#support--resources` },
    ]
  },
]
}

export function DocsSidebar() {
  const locale = useLocale()
  const pathname = usePathname()
  const docs = getDocs(locale)
  
  // Determine which section should be open based on current pathname
  const getCurrentSection = () => {
    if (pathname.includes('/credit')) return 'credit'
    if (pathname.includes('/wallet')) return 'wallet'
    if (pathname.includes('/how-it-works')) return 'how-it-works'
    if (pathname.includes('/entrepreneurs')) return 'entrepreneurs'
    return null
  }

  const currentSectionSlug = getCurrentSection()
  
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    docs.forEach((section) => {
      // Open the section that matches the current page
      initial[section.title] = section.slug === currentSectionSlug
    })
    return initial
  })

  // Update open sections when pathname changes (e.g., when navigating via bottom buttons)
  useEffect(() => {
    const newCurrentSection = getCurrentSection()
    if (newCurrentSection) {
      setOpenSections((prev) => {
        const updated = { ...prev }
        // Open the section that matches the current page, close others
        const currentDocs = getDocs(locale)
        currentDocs.forEach((section) => {
          updated[section.title] = section.slug === newCurrentSection
        })
        return updated
      })
    }
  }, [pathname, locale])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="flex flex-col space-y-2 bg-black/40 backdrop-blur-md text-white rounded-lg p-4 border border-white/10">
      {docs.map((section) => (
        <div key={section.title} className="space-y-1">
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex items-center justify-between py-2 px-3 rounded hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="text-white">{section.icon}</div>
              <h4 className="font-medium text-sm text-white">{section.title}</h4>
            </div>
            <ChevronDown 
              className={cn(
                "h-4 w-4 transition-transform text-white", 
                openSections[section.title] ? "transform rotate-180" : ""
              )} 
            />
          </button>

          {openSections[section.title] && (
            <div className="flex flex-col space-y-1 pl-10 py-1">
              {section.items.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="flex items-center py-2 px-3 text-gray-300 hover:text-white text-sm transition-colors rounded hover:bg-gray-800"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

