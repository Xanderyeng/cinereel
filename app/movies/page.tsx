import { Suspense } from 'react'
import PageLoading from '@/components/PageLoading'
import MasonryGrid from '@/components/media-grid/MasonryGrid'
import getMovies from '@/lib/getMovies'

export default async function MoviesPage() {
    const movies = await getMovies()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Movies</h1>
      <Suspense fallback={<PageLoading />}>
      <MasonryGrid items={movies} type="movie" />
      </Suspense>
    </div>
  )
}