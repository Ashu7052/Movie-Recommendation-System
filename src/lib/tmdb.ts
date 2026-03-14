export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/original';
export const TMDB_API_KEY = process.env.TMDB_API_KEY;

export interface TmdbMovie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  release_date: string;
  genre_ids: number[];
}

export interface TmdbMovieDetails extends TmdbMovie {
  runtime: number;
  revenue: number;
  genres: { id: number; name: string }[];
}

export async function fetchFromTmdb(endpoint: string, params: Record<string, string> = {}) {
  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', TMDB_API_KEY || '');
  url.searchParams.append('language', 'en-US');
  
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
  
  if (!res.ok) {
    console.error(`TMDB fetch failed for ${endpoint}: ${res.statusText}`);
    return null;
  }

  return res.json();
}

export async function getTrendingMovies(): Promise<TmdbMovie[]> {
  if (!TMDB_API_KEY) {
    console.warn("TMDB_API_KEY is missing. Using fallback mock data.");
    return fallbackMovies;
  }
  const data = await fetchFromTmdb('/trending/movie/week');
  return data?.results || fallbackMovies;
}

export async function getMovieById(id: string): Promise<TmdbMovieDetails | null> {
  if (!TMDB_API_KEY) return fallbackMovies.find(m => m.id.toString() === id) as any;
  return fetchFromTmdb(`/movie/${id}`);
}

export async function getMovieCredits(id: string) {
  if (!TMDB_API_KEY) return { cast: fallbackCast, crew: [] };
  return fetchFromTmdb(`/movie/${id}/credits`);
}

export async function getMovieReviews(id: string) {
  if (!TMDB_API_KEY) return { results: fallbackReviews };
  return fetchFromTmdb(`/movie/${id}/reviews`);
}

// Fallback Data
const fallbackMovies = [
  { id: 693134, title: "Dune: Part Two", poster_path: "/1pdfLvkbY9ohJlCjQH2JGjjcNs.jpg", backdrop_path: "/8rpDcsfLJypbO6vtec0gI4eG3qP.jpg", vote_average: 8.8, overview: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge...", release_date: "2024-02-28", genre_ids: [878, 12] },
  { id: 872585, title: "Oppenheimer", poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", backdrop_path: "/fm6KqXpk3M2HVveHwCrBRoOoA0A.jpg", vote_average: 8.5, overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb...", release_date: "2023-07-19", genre_ids: [18, 36, 53] },
  { id: 414906, title: "The Batman", poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg", backdrop_path: "/tRS6jvPMIh69vQ2aQd8X4k1nB2A.jpg", vote_average: 8.2, overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham...", release_date: "2022-03-01", genre_ids: [28, 80, 9648] }
];

const fallbackCast = [
  { id: 1, name: "Timothée Chalamet", character: "Paul Atreides", profile_path: "/jScPd0u0jeo66l8g3Kd5FVFgi4Q.jpg" },
  { id: 2, name: "Zendaya", character: "Chani", profile_path: "/xMwyqZGoD2JpA9RinbXf7Nq6xJ2.jpg" }
];

const fallbackReviews = [
  { author: "MovieCritic", content: "A visual masterpiece with a gripping narrative.", created_at: "2024-03-01T00:00:00Z" }
];
