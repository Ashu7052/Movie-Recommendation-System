export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  runtime: number; // in mins
  genres: string[];
  director: string;
  release_date: string;
  cast: { id: number; name: string; role: string; profile_path: string }[];
}

export const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    poster_path: "/1pdfLvkbY9ohJlCjQH2JGjjcNs.jpg",
    backdrop_path: "/8rpDcsfLJypbO6vtec0gI4eG3qP.jpg",
    vote_average: 8.8,
    overview: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    runtime: 166,
    genres: ["Science Fiction", "Adventure"],
    director: "Denis Villeneuve",
    release_date: "2024-02-28",
    cast: [
      { id: 1, name: "Timothée Chalamet", role: "Paul Atreides", profile_path: "/jScPd0u0jeo66l8g3Kd5FVFgi4Q.jpg" },
      { id: 2, name: "Zendaya", role: "Chani", profile_path: "/xMwyqZGoD2JpA9RinbXf7Nq6xJ2.jpg" },
      { id: 3, name: "Rebecca Ferguson", role: "Lady Jessica", profile_path: "/6ybHiaF8rFj5ZksX2cQkK8xur7w.jpg" },
    ]
  },
  {
    id: 2,
    title: "Oppenheimer",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBRoOoA0A.jpg",
    vote_average: 8.5,
    overview: "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
    runtime: 180,
    genres: ["Drama", "History"],
    director: "Christopher Nolan",
    release_date: "2023-07-19",
    cast: [
      { id: 4, name: "Cillian Murphy", role: "J. Robert Oppenheimer", profile_path: "/3Z1S5HAvK9S11Kpxq0nZp17h9sX.jpg" },
      { id: 5, name: "Emily Blunt", role: "Kitty Oppenheimer", profile_path: "/nJmH7i3K90Fj8eIu0V9wHjJ94a.jpg" },
    ]
  },
  {
    id: 3,
    title: "The Batman",
    poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop_path: "/tRS6jvPMIh69vQ2aQd8X4k1nB2A.jpg",
    vote_average: 8.2,
    overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    runtime: 176,
    genres: ["Action", "Crime", "Mystery"],
    director: "Matt Reeves",
    release_date: "2022-03-01",
    cast: [
      { id: 6, name: "Robert Pattinson", role: "Bruce Wayne / The Batman", profile_path: "/8A4PS5iG7GWEAVFftyqMZKl3qtP.jpg" },
      { id: 7, name: "Zoë Kravitz", role: "Selina Kyle / Catwoman", profile_path: "/aQc25tHn8WwK3xG6QW4r5K1iV4O.jpg" },
    ]
  }
];

export const getMovieById = (id: number) => MOCK_MOVIES.find(m => m.id === id);
