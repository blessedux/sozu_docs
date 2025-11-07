"use client"

import { useState, useRef, useEffect, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'

// Get all searchable pages from the docs structure
const getSearchablePages = (locale: string) => {
  const isES = locale === 'es'
  const isFR = locale === 'fr'
  
  const pages: Array<{ title: string; path: string; type: 'section' | 'item' }> = []
  
  // Credit System section
  pages.push({ 
    title: isES ? 'Sistema de Crédito' : isFR ? 'Système de Crédit' : 'Credit System', 
    path: `/concepts/credit`,
    type: 'section'
  })
  pages.push({ title: isES ? 'Resumen' : isFR ? 'Aperçu' : 'Overview', path: `/concepts/credit#overview`, type: 'item' })
  pages.push({ title: isES ? 'La Billetera Sozu' : isFR ? 'Le Portefeuille Sozu' : 'The Sozu Wallet', path: `/concepts/credit#the-sozu-wallet`, type: 'item' })
  pages.push({ title: isES ? 'Creación de Billetera Inteligente' : isFR ? 'Création de Portefeuille Intelligent' : 'Smart Wallet Creation', path: `/concepts/credit#smart-wallet-creation`, type: 'item' })
  pages.push({ title: isES ? 'Lógica de Depósito Automático' : isFR ? 'Logique de Dépôt Automatique' : 'Auto-Deposit Vault Logic', path: `/concepts/credit#auto-deposit-vault-logic`, type: 'item' })
  pages.push({ title: isES ? 'Integración con Blend' : isFR ? 'Intégration Blend' : 'Blend Protocol Integration', path: `/concepts/credit#blend-protocol-integration`, type: 'item' })
  pages.push({ title: isES ? 'Mecánica de Colateralización' : isFR ? 'Mécanique de Collatéralisation' : 'Collateralization Mechanics', path: `/concepts/credit#collateralization-mechanics`, type: 'item' })
  pages.push({ title: isES ? 'Adecuado para Sozu Capital' : isFR ? 'Parfait pour Sozu Capital' : 'Perfect Fit for Sozu Capital', path: `/concepts/credit#perfect-fit-for-sozu-capital`, type: 'item' })
  pages.push({ title: isES ? 'Flujo de Usuario' : isFR ? 'Parcours Utilisateur' : 'User Journey', path: `/concepts/credit#user-journey`, type: 'item' })
  pages.push({ title: isES ? 'Arquitectura Técnica' : isFR ? 'Architecture Technique' : 'Technical Architecture', path: `/concepts/credit#technical-architecture`, type: 'item' })
  pages.push({ title: isES ? 'Beneficios para Usuarios' : isFR ? 'Avantages pour les Utilisateurs' : 'Benefits for Users', path: `/concepts/credit#benefits-for-users`, type: 'item' })
  pages.push({ title: isES ? 'Mejoras Futuras' : isFR ? 'Améliorations Futures' : 'Future Enhancements', path: `/concepts/credit#future-enhancements`, type: 'item' })
  
  // Sozu Wallet section
  pages.push({ 
    title: isES ? 'Sozu Wallet' : isFR ? 'Sozu Wallet' : 'Sozu Wallet', 
    path: `/concepts/wallet`,
    type: 'section'
  })
  pages.push({ title: isES ? 'Resumen' : isFR ? 'Aperçu' : 'Overview', path: `/concepts/wallet#overview`, type: 'item' })
  pages.push({ title: isES ? 'Creación de Billetera Inteligente' : isFR ? 'Création de Portefeuille Intelligent' : 'Smart Wallet Creation', path: `/concepts/wallet#smart-wallet-creation`, type: 'item' })
  pages.push({ title: isES ? 'Autenticación con Passkey' : isFR ? 'Authentification Passkey' : 'Passkey Authentication', path: `/concepts/wallet#passkey-authentication`, type: 'item' })
  pages.push({ title: isES ? 'Soporte Multi-Activos' : isFR ? 'Support Multi-Actifs' : 'Multi-Asset Support', path: `/concepts/wallet#multi-asset-support`, type: 'item' })
  pages.push({ title: isES ? 'Auto-Custodia' : isFR ? 'Auto-Custodie' : 'Self-Custody', path: `/concepts/wallet#self-custody`, type: 'item' })
  pages.push({ title: isES ? 'Interoperabilidad Global' : isFR ? 'Interopérabilité Mondiale' : 'Global Interoperability', path: `/concepts/wallet#global-interoperability`, type: 'item' })
  pages.push({ title: isES ? 'Experiencia de Usuario' : isFR ? 'Expérience Utilisateur' : 'User Experience', path: `/concepts/wallet#user-experience`, type: 'item' })
  pages.push({ title: isES ? 'Privacidad y Seguridad' : isFR ? 'Confidentialité et Sécurité' : 'Privacy & Security', path: `/concepts/wallet#privacy--security`, type: 'item' })
  
  // How It Works section
  pages.push({ 
    title: isES ? 'Cómo Funciona' : isFR ? 'Comment ça marche' : 'How It Works', 
    path: `/concepts/how-it-works`,
    type: 'section'
  })
  pages.push({ title: isES ? 'Resumen' : isFR ? 'Aperçu' : 'Overview', path: `/concepts/how-it-works#overview`, type: 'item' })
  pages.push({ title: isES ? 'El Flujo' : isFR ? 'Le Flux' : 'The Flow', path: `/concepts/how-it-works#the-flow`, type: 'item' })
  pages.push({ title: isES ? 'Financiamiento de Donantes' : isFR ? 'Financement des Donateurs' : 'Donor Funding', path: `/concepts/how-it-works#donor-funding`, type: 'item' })
  pages.push({ title: isES ? 'Asignación de Bóvedas' : isFR ? 'Allocation des Coffres' : 'Vault Allocation', path: `/concepts/how-it-works#vault-allocation`, type: 'item' })
  pages.push({ title: isES ? 'Crédito Basado en Confianza' : isFR ? 'Crédit Basé sur la Confiance' : 'Trust-Based Credit', path: `/concepts/how-it-works#trust-based-credit`, type: 'item' })
  pages.push({ title: isES ? 'Prueba de Asignación' : isFR ? 'Preuve d\'Allocation' : 'Proof of Allocation', path: `/concepts/how-it-works#proof-of-allocation`, type: 'item' })
  pages.push({ title: isES ? 'El Ecosistema' : isFR ? 'L\'Écosystème' : 'The Ecosystem', path: `/concepts/how-it-works#the-ecosystem`, type: 'item' })
  pages.push({ title: isES ? 'Arquitectura Técnica' : isFR ? 'Architecture Technique' : 'Technical Architecture', path: `/concepts/how-it-works#technical-architecture`, type: 'item' })
  pages.push({ title: isES ? 'Parcours Utilisateur' : isFR ? 'Parcours Utilisateur' : 'User Journey', path: `/concepts/how-it-works#user-journey`, type: 'item' })
  pages.push({ title: isES ? 'Transparencia y Responsabilidad' : isFR ? 'Transparence et Responsabilité' : 'Transparency & Accountability', path: `/concepts/how-it-works#transparency--accountability`, type: 'item' })
  pages.push({ title: isES ? 'Métricas de Impacto' : isFR ? 'Métriques d\'Impact' : 'Impact Metrics', path: `/concepts/how-it-works#impact-metrics`, type: 'item' })
  
  // For Entrepreneurs section
  pages.push({ 
    title: isES ? 'Para Emprendedores' : isFR ? 'Pour les Entrepreneurs' : 'For Entrepreneurs', 
    path: `/concepts/entrepreneurs`,
    type: 'section'
  })
  pages.push({ title: isES ? 'Resumen' : isFR ? 'Aperçu' : 'Overview', path: `/concepts/entrepreneurs#overview`, type: 'item' })
  pages.push({ title: isES ? 'Comenzando' : isFR ? 'Pour Commencer' : 'Getting Started', path: `/concepts/entrepreneurs#getting-started`, type: 'item' })
  pages.push({ title: isES ? 'Crear tu Billetera' : isFR ? 'Créer votre Portefeuille' : 'Create Your Wallet', path: `/concepts/entrepreneurs#create-your-wallet`, type: 'item' })
  pages.push({ title: isES ? 'Completar Educación' : isFR ? 'Compléter l\'Éducation' : 'Complete Education', path: `/concepts/entrepreneurs#complete-education`, type: 'item' })
  pages.push({ title: isES ? 'Construir tu Puntuación de Confianza' : isFR ? 'Construire votre Score de Confiance' : 'Build Your Trust Score', path: `/concepts/entrepreneurs#build-your-trust-score`, type: 'item' })
  pages.push({ title: isES ? 'Recibir Crédito' : isFR ? 'Recevoir du Crédit' : 'Receive Credit', path: `/concepts/entrepreneurs#receive-credit`, type: 'item' })
  pages.push({ title: isES ? 'Gestionar tu Crédito' : isFR ? 'Gérer votre Crédit' : 'Managing Your Credit', path: `/concepts/entrepreneurs#managing-your-credit`, type: 'item' })
  pages.push({ title: isES ? 'Rastrear Reembolsos' : isFR ? 'Suivre les Remboursements' : 'Track Repayments', path: `/concepts/entrepreneurs#track-repayments`, type: 'item' })
  pages.push({ title: isES ? 'Hacer Pagos' : isFR ? 'Effectuer des Paiements' : 'Make Payments', path: `/concepts/entrepreneurs#make-payments`, type: 'item' })
  pages.push({ title: isES ? 'Construir Historial de Crédito' : isFR ? 'Construire l\'Historique de Crédit' : 'Build Credit History', path: `/concepts/entrepreneurs#build-credit-history`, type: 'item' })
  pages.push({ title: isES ? 'Gestión Financiera' : isFR ? 'Gestion Financière' : 'Financial Management', path: `/concepts/entrepreneurs#financial-management`, type: 'item' })
  pages.push({ title: isES ? 'Historias de Éxito' : isFR ? 'Histoires de Succès' : 'Success Stories', path: `/concepts/entrepreneurs#success-stories`, type: 'item' })
  pages.push({ title: isES ? 'Soporte y Recursos' : isFR ? 'Support et Ressources' : 'Support & Resources', path: `/concepts/entrepreneurs#support--resources`, type: 'item' })
  
  return pages
}

type SearchResult = {
  title: string;
  path: string;
  highlighted?: string;
  type?: 'section' | 'item';
}

export function SearchInline() {
  const locale = useLocale()
  const [expanded, setExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const resultRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const searchablePages = useMemo(() => getSearchablePages(locale), [locale])
  
  // Handle Cmd+K / Ctrl+K keyboard shortcut (toggle)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setExpanded(prev => {
          const newExpanded = !prev
          if (!newExpanded) {
            // Closing - clear search
            setSearchQuery("")
            setShowResults(false)
          }
          return newExpanded
        })
      }
      
      // Close on Escape
      if (event.key === 'Escape' && expanded) {
        setExpanded(false)
        setShowResults(false)
        setSearchQuery("")
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [expanded])
  
  // Handle click outside to collapse search
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      const element = target as HTMLElement
      
      // Don't close if clicking inside the dropdown
      if (dropdownRef.current && dropdownRef.current.contains(target)) {
        return
      }
      
      // Don't close if clicking on a link (let it navigate)
      if (element.closest('a')) {
        return
      }
      
      // Don't close if clicking inside the form (which contains the input)
      if (formRef.current && formRef.current.contains(target)) {
        return
      }
      
      // Close if clicking outside both
      if (expanded) {
        setExpanded(false)
        setShowResults(false)
      }
    }
    
    // Use mousedown but check for links to allow navigation
    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expanded])
  
  // Focus input when expanded
  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [expanded])

  // Handle keyboard navigation
  useEffect(() => {
    if (!expanded || !showResults || !inputRef.current) return

    function handleKeyDown(event: KeyboardEvent) {
      // Only handle if input is focused
      if (document.activeElement !== inputRef.current) return

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((prev) => {
          const next = prev < searchResults.length - 1 ? prev + 1 : 0
          // Scroll into view
          setTimeout(() => {
            if (resultRefs.current[next]) {
              resultRefs.current[next]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
            }
          }, 0)
          return next
        })
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((prev) => {
          const next = prev > 0 ? prev - 1 : searchResults.length - 1
          // Scroll into view
          setTimeout(() => {
            if (resultRefs.current[next]) {
              resultRefs.current[next]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
            }
          }, 0)
          return next
        })
      } else if (event.key === 'Enter' && selectedIndex >= 0) {
        event.preventDefault()
        const selectedResult = searchResults[selectedIndex]
        if (selectedResult) {
          window.location.href = selectedResult.path
          setExpanded(false)
          setShowResults(false)
          setSearchQuery("")
        }
      }
    }

    const input = inputRef.current
    if (input) {
      input.addEventListener('keydown', handleKeyDown)
      return () => input.removeEventListener('keydown', handleKeyDown)
    }
  }, [expanded, showResults, searchResults, selectedIndex])

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(-1)
  }, [searchResults])

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const lowerQuery = searchQuery.toLowerCase().trim()
    const results = searchablePages
      .filter(page => {
        const titleLower = page.title.toLowerCase()
        // Match if query is found anywhere in the title
        return titleLower.includes(lowerQuery)
      })
      .map(page => {
        const titleLower = page.title.toLowerCase()
        const index = titleLower.indexOf(lowerQuery)
        let highlighted = page.title
        
        if (index !== -1) {
          highlighted = 
            page.title.substring(0, index) + 
            '<span class="bg-orange-500/20 text-orange-500 font-semibold">' + 
            page.title.substring(index, index + lowerQuery.length) + 
            '</span>' + 
            page.title.substring(index + lowerQuery.length)
        }
        
        return {
          ...page,
          highlighted
        }
      })
      // Sort: sections first, then items, then by relevance (earlier match = better)
      .sort((a, b) => {
        if (a.type === 'section' && b.type !== 'section') return -1
        if (a.type !== 'section' && b.type === 'section') return 1
        const aIndex = a.title.toLowerCase().indexOf(lowerQuery)
        const bIndex = b.title.toLowerCase().indexOf(lowerQuery)
        if (aIndex !== bIndex) return aIndex - bIndex
        return a.title.localeCompare(b.title)
      })
      .slice(0, 10) // Show up to 10 results

    setSearchResults(results)
    setShowResults(results.length > 0)
  }, [searchQuery, searchablePages])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (searchQuery.trim() === '') {
      setExpanded(false)
      setShowResults(false)
      return
    }
    
    // If only one result, navigate to that page
    if (searchResults.length === 1) {
      window.location.href = searchResults[0].path
      setExpanded(false)
      setShowResults(false)
    }
  }

  const handleResultClick = () => {
    setExpanded(false)
    setShowResults(false)
    setSearchQuery("")
  }

  return (
    <div className="relative flex items-center">
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.form
            ref={formRef}
            key="search-form"
            initial={{ width: 40, opacity: 0 }}
            animate={{ width: 240, opacity: 1 }}
            exit={{ width: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center"
            onSubmit={handleSearch}
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-20 py-2 w-full bg-gray-900 border-gray-700 focus:border-orange-500 focus:ring-orange-500/20"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-gray-400 hover:text-white"
                    aria-label="Clear search"
                    title="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <kbd className="hidden h-5 select-none items-center gap-1 rounded border bg-gray-800 px-1.5 font-mono text-[10px] font-medium text-gray-400 opacity-100 sm:flex">
                  ⌘K
                </kbd>
              </div>
              
              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showResults && searchResults.length > 0 && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 w-full mt-1 bg-gray-900 border border-gray-700 rounded-md shadow-xl overflow-hidden z-[9999] pointer-events-auto"
                    style={{ position: 'absolute' }}
                  >
                    <div className="py-1 max-h-[60vh] overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          ref={(el) => {
                            resultRefs.current[index] = el
                          }}
                          href={result.path}
                          className={`flex items-center px-4 py-2 transition-colors cursor-pointer ${
                            selectedIndex === index 
                              ? 'bg-gray-800 text-white' 
                              : 'hover:bg-gray-800 text-gray-300'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleResultClick()
                          }}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <FileText className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
                          <div className="flex flex-col">
                          <span 
                            className="text-sm"
                            dangerouslySetInnerHTML={{ __html: result.highlighted || result.title }}
                          />
                            {result.type === 'item' && (
                              <span className="text-xs text-gray-500 mt-0.5">
                                {result.path.split('/')[2]}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="search-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              variant="ghost" 
              onClick={() => setExpanded(true)}
              className="hover:bg-gray-800 flex items-center gap-2 px-3 h-9"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
              <kbd className="hidden h-5 select-none items-center gap-1 rounded border bg-gray-800 px-1.5 font-mono text-[10px] font-medium text-gray-400 opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

