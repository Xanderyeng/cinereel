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
  
  // let results

  // try {

  //   // Generate blur data URLs for each result
  //   results = await Promise.all(results.map(async (result: { poster_path: string; profile_path: string }) => {
  //     if (result.poster_path || result.profile_path) {
  //       const buffer = await fetch(`https://image.tmdb.org/t/p/w500/${result.poster_path || result.profile_path}`)
  //         .then(response => response.arrayBuffer()) // Convert response to buffer
  //       const { base64 } = await getPlaiceholder(Buffer.from(buffer))
  //       return { ...result, blurDataURL: base64 }
  //     }
  //     return result
  //   }))
  // } catch (error) {
  //   notFound()
  // }
  
  // let results

  // try {
  //   results = await searchTMDB(query)

  //   results = await Promise.all(results.map(async (result: { poster_path: string; profile_path: string }) => {
  //   if (result.poster_path || result.profile_path) {
  //     const buffer = await fetch(`https://image.tmdb.org/t/p/original/${result.poster_path || result.profile_path}`).then( async (res) => {
  //       return Buffer.from(await res.arrayBuffer())
  //     })
  //     const { base64 } = await getPlaiceholder(Buffer.from(buffer))
  //     return { ...result, blurDataURL: base64 }
  //   }
  //   }))
    
  // } catch (error) {
  //   notFound()
  // }
    

  // console.log(results)
  // console.log(searchParams)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
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