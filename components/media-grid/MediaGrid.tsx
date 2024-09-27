"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { sendGTMEvent } from "@next/third-parties/google";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Movie } from "@/_types/types";
import { TVShow } from "@/_types/types";

interface MediaGridProps {
  movies?: Movie[];
  tvShows?: TVShow[];
  type: "movie" | "tvshows";
}

export default function MediaGrid({ movies, tvShows, type }: MediaGridProps) {
  const [activeTab, setActiveTab] = useState<"movie" | "tvshows">("movie");
  const DynamicMasonryGrid = dynamic(() => import("../shared/MasonryGrid"), {
    loading: () => <p>Loading...</p>,
    suspense: true,
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Tabs
        defaultValue="movie"
        className="py-12 px-8 md:px-0 w-full md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl"
      >
        <TabsList className="grid w-full grid-cols-2 mb-4 h-12 text-lg font-nunit font-semibold tracking-wider">
          <TabsTrigger
            className="text-md"
            value="movie"
            onClick={() => (
              setActiveTab("movie"),
              sendGTMEvent({
                event: "buttonClicked",
                value: "See Trending Button",
              })
            )}
          >
            <span className="text-dark-mode-text-color">Movies</span>
          </TabsTrigger>
          <TabsTrigger
            className="text-md"
            value="tvshows"
            onClick={() => (
              setActiveTab("tvshows"),
              sendGTMEvent({
                event: "buttonClicked",
                value: "See Trending Button",
              })
            )}
          >
            <span className="text-dark-mode-text-color">TV Shows</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="movie">
          <DynamicMasonryGrid items={movies || []} type={activeTab} />
        </TabsContent>
        <TabsContent value="tvshows">
          <DynamicMasonryGrid items={tvShows || []} type={activeTab} />
        </TabsContent>
      </Tabs>
    </Suspense>
  );
}
