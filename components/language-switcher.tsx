'use client'

import { useState, useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  const locale = useLocale()
  const currentLang = languages.find((lang) => lang.code === locale) || languages[0]
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Get the path without locale
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

  // Handle L key shortcut to toggle language switcher
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Check if L key is pressed (not when typing in input/textarea)
      if (
        event.key === 'l' || event.key === 'L'
      ) {
        const target = event.target as HTMLElement
        const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
        
        // Only trigger if not typing in an input field
        if (!isInput && !event.ctrlKey && !event.metaKey) {
          event.preventDefault()
          setOpen((prev) => !prev)
        }
      }
      
      // Close on Escape
      if (event.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  // Focus the trigger when opened via keyboard
  useEffect(() => {
    if (open && triggerRef.current) {
      // Small delay to ensure dropdown is rendered
      setTimeout(() => {
        const firstItem = document.querySelector('[role="menuitem"]') as HTMLElement
        if (firstItem) {
          firstItem.focus()
        }
      }, 100)
    }
  }, [open])

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          ref={triggerRef}
          variant="ghost" 
          size="icon"
          aria-label="Switch language (Press L)"
        >
          <span className="text-lg">{currentLang.flag}</span>
          <span className="sr-only">Switch language (Press L)</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" onCloseAutoFocus={(e) => e.preventDefault()}>
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code} 
            asChild
            onSelect={() => setOpen(false)}
          >
            <Link href={pathWithoutLocale} locale={lang.code} className="flex items-center gap-2 w-full">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              {lang.code === locale && (
                <span className="ml-auto text-xs opacity-60">✓</span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
