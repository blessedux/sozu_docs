"use client"

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  code: string
  language?: string
}

export function MermaidDiagram({ code, language }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const renderedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || renderedRef.current || language !== 'mermaid') return

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

    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
    containerRef.current.id = id

    mermaid.render(id, code).then((result) => {
      if (containerRef.current) {
        containerRef.current.innerHTML = result.svg
        renderedRef.current = true
      }
    }).catch((error) => {
      console.error('Mermaid rendering error:', error)
      if (containerRef.current) {
        containerRef.current.innerHTML = `<pre class="text-red-400">Error rendering diagram: ${error.message}</pre>`
      }
    })
  }, [code, language])

  if (language !== 'mermaid') {
    return null
  }

  return (
    <div 
      ref={containerRef} 
      className="my-8 flex items-center justify-center bg-gray-900 rounded-lg p-4 overflow-x-auto"
    />
  )
}

