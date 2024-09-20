"use client";

import { useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Movie } from "@/_types/types";
import { TVShow } from "@/_types/types";
import MasonryGrid from "../shared/MasonryGrid";

interface MediaGridProps {
  movies?: Movie[];
  tvShows?: TVShow[];
  type: "movie" | "tvshows";
}

const tabVariants = {
  inactive: { x: 0 },
  active: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function MediaGrid({ movies, tvShows, type }: MediaGridProps) {
  const [activeTab, setActiveTab] = useState<"movie" | "tvshows">("movie");

  return (
    <Tabs
      defaultValue="movie"
      className=" py-12 px-8 md:px-0 w-full md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl"
    >
      <TabsList className="grid w-full grid-cols-2 mb-4 h-12 text-lg font-nunit font-semibold tracking-wider ">
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
          Movies
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
          TV Shows
        </TabsTrigger>
      </TabsList>
      <TabsContent value="movie">
        <MasonryGrid items={movies || []} type={activeTab} />
      </TabsContent>
      <TabsContent value="tvshows">
        <MasonryGrid items={tvShows || []} type={activeTab} />
      </TabsContent>
    </Tabs>
  );
}
