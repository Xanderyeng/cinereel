import { Suspense } from "react";
import PageLoading from "@/components/PageLoading";
import MasonryGrid from "@/components/shared/MasonryGrid";
import getMovies from "@/lib/getMovies";
import BackToHomeButton from "@/components/shared/BackToHomeButton";

export default async function MoviesPage() {
  const movies = await getMovies();
  return (
    <section className="container mx-auto px-4 py-12 ">
      <div className="flex flex-row items-center justify-between py-12 ">
      <h1 className="text-3xl font-bold text-center ">Top movies of the week</h1>
      <BackToHomeButton />
      </div>
      <Suspense fallback={<PageLoading />}>
        <MasonryGrid items={movies} type="movie" />
      </Suspense>
    </section>
  );
}
