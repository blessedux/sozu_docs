import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
}

export function Heading({ level, className, children, ...props }: HeadingProps) {
  const tags = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6'
  } as const;
  
  const Component = tags[level];

  const styles = {
    h1: "scroll-m-20 text-4xl font-bold tracking-tight mb-4 text-white",
    h2: "scroll-m-20 text-2xl font-semibold tracking-tight mt-10 mb-4 text-white",
    h3: "scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4 text-white",
    h4: "scroll-m-20 text-lg font-semibold tracking-tight mt-8 mb-4 text-white",
    h5: "scroll-m-20 text-base font-semibold tracking-tight mt-8 mb-4 text-white",
    h6: "scroll-m-20 text-sm font-semibold tracking-tight mt-8 mb-4 text-white",
  }

  return (
    <Component className={cn(styles[`h${level}`], className)} {...props}>
      {children}
    </Component>
  )
}

