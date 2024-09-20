import React, { Suspense } from "react";
import Loading from "./loading";
import Hero from "@/components/hero/Hero";
import MediaGrid from "@/components/media-grid/MediaGrid";
import MostPopularMovies from "@/components/most-popular-movies/MostPopularMovies";
import MostPopularCelebs from "@/components/most-popular-celebs/MostPopularCelebs";

import getMovies from "@/lib/getMovies";
import getTVShows from "@/lib/getTVShows";

export default async function Home() {
  const movies = await getMovies()
  const tvShows = await getTVShows()

  return (
    <main className="flex flex-col min-h-[90dvh] max-w-full mx-auto relative items-center justify-between p-0 overflow-hidden">
      <Hero />
      <Suspense fallback={<Loading />}>
        <MostPopularMovies />
        <MostPopularCelebs />
      </Suspense>
        <Suspense fallback={<Loading />}>
          <MediaGrid 
            type="movie"
            movies={movies.map(movie => ({
              ...movie,
              title: movie.title,
              blurDataURL: '' 
            }))} 
            tvShows={tvShows.map(show => ({
              ...show,
              title: show.name,
              blurDataURL: '' 
            }))}
          />
        </Suspense>
    </main>
  );
}
