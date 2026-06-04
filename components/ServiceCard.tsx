import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  category?: string
}

const ServiceCard = ({ title, description, icon: Icon, category }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          <div className="p-2 bg-ca-purple/10 rounded-lg">
            <Icon className="h-6 w-6 text-ca-purple" />
          </div>
        </div>
        <div>
          {category && (
            <span className="inline-block text-xs font-medium text-ca-orange mb-1 uppercase tracking-wider">
              {category}
            </span>
          )}
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
