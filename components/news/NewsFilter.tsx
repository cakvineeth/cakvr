"use client"
import { Button } from "@/components/ui/button"

interface NewsFilterProps {
  categories: string[]
  onFilterChange: (category: string | null) => void
  activeCategory: string | null
}

export default function NewsFilter({ categories, onFilterChange, activeCategory }: NewsFilterProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          className={activeCategory === null ? "bg-ca-purple text-white" : "text-gray-700"}
          onClick={() => onFilterChange(null)}
        >
          All
        </Button>

        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={activeCategory === category ? "bg-ca-purple text-white" : "text-gray-700"}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
