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

export interface TVShow {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  first_air_date: string;
  origin_country: string[];
  vote_average: number;
  vote_count: number;
  popularity: number;
  blurDataURL: string | null;
  backdrop_path: string;
  overview: string;
}

export interface KnownFor {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  popularity?: number;
  first_air_date?: string;
  name?: string;
  origin_country?: string[];
}

export interface Celebrity {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  known_for: KnownFor[];
}

export interface PopularCelebs {
  page: number;
  results: Celebrity[];
  total_pages: number;
  total_results: number;
}

export interface TrendingItem {
  name: string
  id: number
  title: string
  poster_path: string
  vote_average: number
  media_type: 'movie' | 'tvshow'
}

export interface TrendingSectionProps {
  items: TrendingItem[]
  title: string
}