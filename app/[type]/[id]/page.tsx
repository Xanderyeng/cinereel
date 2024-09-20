import { Suspense } from 'react'
import Loading from './loading'
import { notFound } from 'next/navigation'
import MovieDetails from './MovieDetails'
import { getMovieDetails } from '@/lib/getMovieDetails'
import TVShowDetails from './TVShowDetails'
import { getTVShowDetails } from '@/lib/getTVShowDetails'

export default async function MediaDetailsPage({ params }: { params: { type: string, id: string } }) {

//   console.log("server params:", params.id)
//   console.log("movieData:", movieData)
//   console.log("Credits:", movieData.credits)
//   console.table("movieData:", movieData)
// const director = movieData.credits.crew.find((crewMember: any) => crewMember.job === 'Director')
// console.log("director:", director)

let data

  if (params.type === 'movie') {
    data = await getMovieDetails(params.id)  
  } 
  else if (params.type === 'tvshow') {
    data = await getTVShowDetails(params.id)
  } else {
    notFound()
  }

  // if (!data) {
  //   notFound()
  // }

  return (
    <>
      {params.type === 'movie' ? (
         <Suspense fallback={<Loading />}>
         <MovieDetails movie={data} />
       </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
        <TVShowDetails tvShow={data} />
      </Suspense>
      )}
    </>
   
  )
}