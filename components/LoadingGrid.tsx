'use client'

import CardSkeleton from './CardSkeleton'

export default function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(12)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  )
}