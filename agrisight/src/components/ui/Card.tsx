import { CardProps } from '@/types'
import { cn } from '@/lib/utils'

export function Card({ title, children, icon, className }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 border border-gray-200",
      className
    )}>
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 animate-pulse">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
        <div className="w-5 h-5 bg-gray-200 rounded"></div>
        <div className="h-5 bg-gray-200 rounded w-32"></div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  )
}
