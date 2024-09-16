import React, { Suspense } from "react";
import Loading from "./loadingg";
import Hero from "@/components/hero/Hero";
import MostPopularMovies from "@/components/most-popular-movies/MostPopularMovies";
import MostPopularCelebs from "@/components/most-popular-celebs/MostPopularCelebs";
import { TrendingMovies } from "@/lib/trending_movies";
import { TrendingTvShows } from "@/lib/trending_tv_shows";

import MediaGrid from "@/components/media-grid/MediaGrid";

export default function Home() {
  // const movies = await fetchMovies()
  // const tvShows = await fetchTVShows()

  return (
    <main className="flex flex-col min-h-[90dvh] max-w-full mx-auto relative items-center justify-between p-0 overflow-hidden">
      <Hero />
        <MostPopularMovies />
      {/* <Suspense fallback={<Loading />}>
      </Suspense> */}
        <MostPopularCelebs />
        <Suspense fallback={<Loading />}>
          <MediaGrid 
            movies={TrendingMovies.results.map(movie => ({
              ...movie,
              title: movie.title,
              blurDataURL: '' 
            }))} 
            tvShows={TrendingTvShows.results.map(show => ({
              ...show,
              title: show.name,
              blurDataURL: '' 
            }))}
          />
        </Suspense>
    </main>
  );
}
