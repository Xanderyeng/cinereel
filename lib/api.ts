import { getPlaiceholder } from "plaiceholder";
import { movies } from "@/lib/popular_movies";

export async function fetchMovies() {
  // Implement your API call here, e.g., to TMDB API
  //   const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}&per_page=${perPage}`)
  //   const data = await response.json()

  // Process the movies to add blurDataURL
  const processedMovies = await Promise.all(
    movies.results.map(async (movie: any) => {
      const imageUrl = await fetch(
        `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      ).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
      });
      //   const imageBuffer = await imageUrl.buffer()
      try {
        const { base64 } = await getPlaiceholder(imageUrl);
        return { ...movie, blurDataURL: base64 };
      } catch (error) {
        console.error(`Error generating blur for ${movie.title}:`, error);
        return {
          ...movie,
          blurDataURL:
            "https://image.tmdb.org/t/p/w200/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        };
      }
    }),
  );

  return processedMovies;
}
