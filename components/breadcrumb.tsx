import { Link } from '@/i18n/routing'
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  title: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-6 flex items-center space-x-1 text-sm text-gray-400">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="mx-1 h-4 w-4 text-gray-400" />}
          <Link
            href={item.href}
            className={index === items.length - 1 ? "font-medium text-white" : "text-gray-400 hover:text-gray-200"}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  )
}

