'use client'

import { BackgroundPaths } from './background-paths'

export function ClientBackgroundPaths({ children, className = "" }: { children?: React.ReactNode, className?: string }) {
  return (
    <BackgroundPaths className={className}>
      {children}
    </BackgroundPaths>
  )
}

