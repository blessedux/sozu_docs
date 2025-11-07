"use client"

import { useEffect, useRef, useState } from 'react'
import { MermaidDiagram } from './mermaid-diagram'
import mermaid from 'mermaid'

interface MarkdownContentProps {
  html: string
}

export function MarkdownContent({ html }: MarkdownContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mermaidDiagrams, setMermaidDiagrams] = useState<Array<{ id: string; code: string; index: number }>>([])
  const [processedHtml, setProcessedHtml] = useState<string>(html)

  useEffect(() => {
    if (!containerRef.current) return

    // Find all mermaid code blocks
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html
    
    const codeBlocks = tempDiv.querySelectorAll('pre code')
    const diagrams: Array<{ id: string; code: string; index: number }> = []
    let diagramIndex = 0

    codeBlocks.forEach((codeBlock, index) => {
      const code = codeBlock.textContent || ''
      const language = codeBlock.className.match(/language-(\w+)/)?.[1] || ''
      
      if (language === 'mermaid' && code.trim()) {
        const id = `mermaid-${diagramIndex++}`
        diagrams.push({ id, code: code.trim(), index })
        
        // Replace the code block with a placeholder
        const pre = codeBlock.parentElement
        if (pre) {
          const placeholder = document.createElement('div')
          placeholder.className = 'mermaid-placeholder'
          placeholder.setAttribute('data-mermaid-id', id)
          placeholder.setAttribute('data-mermaid-index', index.toString())
          pre.replaceWith(placeholder)
        }
      }
    })

    if (diagrams.length > 0) {
      setMermaidDiagrams(diagrams)
      setProcessedHtml(tempDiv.innerHTML)
    }

    // Initialize mermaid
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#3b82f6',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#1e40af',
        lineColor: '#60a5fa',
        secondaryColor: '#1e3a8a',
        tertiaryColor: '#1e293b',
        background: '#0a0a0a',
        mainBkgColor: '#0a0a0a',
        secondBkgColor: '#1a1a1a',
        textColor: '#ffffff',
        border1: '#374151',
        border2: '#4b5563',
        noteBkgColor: '#1e293b',
        noteTextColor: '#ffffff',
        noteBorderColor: '#3b82f6',
        actorBorder: '#3b82f6',
        actorBkg: '#1e3a8a',
        actorTextColor: '#ffffff',
        actorLineColor: '#60a5fa',
        signalColor: '#ffffff',
        signalTextColor: '#ffffff',
        labelBoxBkgColor: '#1e3a8a',
        labelBoxBorderColor: '#3b82f6',
        labelTextColor: '#ffffff',
        loopTextColor: '#ffffff',
        activationBorderColor: '#3b82f6',
        activationBkgColor: '#1e3a8a',
        sequenceNumberColor: '#ffffff',
      },
    })
  }, [html])

  useEffect(() => {
    if (mermaidDiagrams.length === 0 || !containerRef.current) return

    // Render mermaid diagrams
    mermaidDiagrams.forEach(({ id, code }) => {
      const placeholder = containerRef.current?.querySelector(`[data-mermaid-id="${id}"]`)
      if (placeholder) {
        mermaid.render(id, code).then((result) => {
          if (placeholder) {
            const wrapper = document.createElement('div')
            wrapper.className = 'my-8 flex items-center justify-center bg-gray-900 rounded-lg p-4 overflow-x-auto'
            wrapper.innerHTML = result.svg
            placeholder.replaceWith(wrapper)
          }
        }).catch((error) => {
          console.error('Mermaid rendering error:', error)
          if (placeholder) {
            placeholder.innerHTML = `<pre class="text-red-400 p-4">Error rendering diagram: ${error.message}</pre>`
          }
        })
      }
    })
  }, [mermaidDiagrams])

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: processedHtml }} />
  )
}

