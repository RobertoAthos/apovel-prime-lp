import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 py-2">
      <div className="container mx-auto px-4">
        <ol
          className="flex flex-wrap items-center text-sm text-gray-600"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="flex items-center hover:text-yellow-600" itemProp="item">
              <Home className="h-4 w-4 mr-1" aria-hidden="true" />
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" aria-hidden="true" />
              <Link
                href={item.href}
                className={`hover:text-yellow-600 ${index === items.length - 1 ? "font-medium text-gray-800" : ""}`}
                itemProp="item"
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                <span itemProp="name">{item.label}</span>
              </Link>
              <meta itemProp="position" content={`${index + 2}`} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
