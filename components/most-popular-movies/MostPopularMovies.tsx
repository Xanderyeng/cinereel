import { Suspense } from "react";
import { getPlaiceholder } from "plaiceholder";
import MovieCarousel from "./MovieCarousel";
import { Movie } from "@/_types/types";
import { movies } from "@/lib/popular_movies";

// Assuming you have a function to fetch movies from your API
import { fetchMovies } from "@/lib/api";
import Loading from "@/app/(root)/(home)/loading";

async function MostPopularMovies() {
  const processedMovies = await fetchMovies();

  //   const processedMovies = await Promise.all(
  //     movies.results.map(async (movie) => {
  //       const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  //       try {
  //         const { base64 } = await getPlaiceholder(Buffer.from(imageUrl))
  //         console.log("base64 IMAGE - ",base64)
  //         return { ...movie, blurDataURL: base64 }
  //       } catch (error) {
  //         console.error(`Error generating blur for ${movie.title}:`, error)
  //         return { ...movie, blurDataURL: 'https://image.tmdb.org/t/p/w200/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' }
  //       }
  //     })
  //   )

  return (
    <section className="py-24 outline outline-2 outline-fuchsia-500">
      <h2 className="text-4xl font-bold font-raleway text-raleway text-center mb-8">
        Most Popular Movies
      </h2>
      <MovieCarousel movies={processedMovies} />
      {/* <Suspense fallback={<Loading />}>
      </Suspense> */}
    </section>
  );
}

export default MostPopularMovies;
