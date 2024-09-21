import { Suspense } from "react";
import PageLoading from "@/components/PageLoading";
import getTVShows from "@/lib/getTVShows";
import MasonryGrid from "@/components/shared/MasonryGrid";
import BackToHomeButton from "@/components/shared/BackToHomeButton";

export default async function TVShowsPage() {
  const tvShows = await getTVShows();
  return (
    <section className="container mx-auto px-4 py-12 ">
      <div className="flex flex-row items-center justify-between py-12 ">
      <h1 className="text-3xl text-center font-bold  ">Top TV shows of the week</h1>
      <BackToHomeButton />
      </div>
      <Suspense fallback={<PageLoading />}>
        <MasonryGrid items={tvShows} type="tvshows" />
      </Suspense>
    </section>
  );
}
