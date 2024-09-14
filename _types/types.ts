export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  blurDataURL: string | null;

  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
