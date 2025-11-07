"use client"

import { useState, useRef, useEffect, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'

// This would typically come from an API or a generated search index
const getSearchablePages = (locale: string) => [
  { title: "Sistema de Crédito", path: `/concepts/credit` },
  { title: "Credit System", path: `/concepts/credit` },
  { title: "Système de Crédit", path: `/concepts/credit` },
]

type SearchResult = {
  title: string;
  path: string;
  highlighted?: string;
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

    const lowerQuery = searchQuery.toLowerCase()
    const results = searchablePages
      .filter(page => 
        page.title.toLowerCase().includes(lowerQuery)
      )
      .map(page => {
        const titleLower = page.title.toLowerCase()
        const index = titleLower.indexOf(lowerQuery)
        let highlighted = page.title
        
        if (index !== -1) {
          highlighted = 
            page.title.substring(0, index) + 
            '<span class="bg-[#587CE9]/20 text-[#587CE9]">' + 
            page.title.substring(index, index + lowerQuery.length) + 
            '</span>' + 
            page.title.substring(index + lowerQuery.length)
        }
        
        return {
          ...page,
          highlighted
        }
      })
      .slice(0, 5) // Limit to 5 results

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
                className="pl-9 pr-20 py-2 w-full bg-gray-900 border-gray-700 focus:border-[#587CE9] focus:ring-[#587CE9]/20"
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
                          <span 
                            className="text-sm"
                            dangerouslySetInnerHTML={{ __html: result.highlighted || result.title }}
                          />
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

