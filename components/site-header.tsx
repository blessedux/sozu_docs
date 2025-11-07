'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { SearchInline } from "@/components/search-inline"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop
      
      // Always show at the very top of the page
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else {
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/20 bg-black/30 backdrop-blur-md transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container flex h-16 items-center px-8 md:px-10 lg:px-16 max-w-screen-xl mx-auto text-white">
        <a href="https://sozu.capital" target="_blank" rel="noopener noreferrer" className="flex items-center" aria-label="Sozu Capital Homepage">
          <Image 
            src="/sozucredit_logo.png" 
            alt="Sozu Credit" 
            width={32} 
            height={32}
            className="h-8 w-auto"
          />
        </a>
        <div className="ml-auto flex items-center gap-2">
          <SearchInline />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

