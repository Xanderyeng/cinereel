import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { searchTMDB } from '@/lib/tmdb'
import { Skeleton } from "@/components/ui/skeleton"
import SearchResults from '@/components/SearchResults'
import { getPlaiceholder } from 'plaiceholder'

export default async function SearchPage({
  searchParams
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q
  const results = await searchTMDB(query)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold pt-6 md:pt-12 mb-4">Search Results for "{query}"</h1>
      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchResults initialResults={results.results} />
      </Suspense>
    </div>
  )
}

function SearchResultsSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  )
}