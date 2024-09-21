import { Suspense } from "react";
import LoadingGrid from "../LoadingGrid";
import MovieCarousel from "./MovieCarousel";
import { getPopularMovies } from "@/lib/popularMovies";

async function MostPopularMovies() {

  const movies = await getPopularMovies()

  return (
    <section className="py-24 w-full md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl">
      <h2 className="text-4xl font-bold font-raleway text-raleway text-center mb-8">
        Most Popular Movies
      </h2>
      <Suspense fallback={<LoadingGrid />}>
        <MovieCarousel movies={movies} />
      </Suspense>
    </section>
  );
}

export default MostPopularMovies;
