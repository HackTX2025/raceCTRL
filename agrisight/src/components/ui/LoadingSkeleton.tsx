interface LoadingSkeletonProps {
  className?: string
}

export function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export function MapSkeleton() {
  return (
    <div className="h-[500px] w-full rounded-lg bg-gray-200 flex items-center justify-center animate-pulse">
      <div className="text-center">
        <div className="h-8 w-8 mx-auto mb-2 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-32 bg-gray-300 rounded mx-auto"></div>
      </div>
    </div>
  )
}

export function PanelSkeleton() {
  return (
    <div className="space-y-4">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-20 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  )
}
