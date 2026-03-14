export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  runtime: number; 
  genres: string[];
  director: string;
  release_date: string;
  cast: { id: number; name: string; role: string; profile_path: string }[];
}

const TMDB_BASE = 'https://image.tmdb.org/t/p/original';

export const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    poster_path: `${TMDB_BASE}/1pdfLvkbY9ohJlCjQH2JGjjcNs.jpg`,
    backdrop_path: `${TMDB_BASE}/8rpDcsfLJypbO6vtec0gI4eG3qP.jpg`,
    vote_average: 8.8,
    overview: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    runtime: 166,
    genres: ["Science Fiction", "Adventure"],
    director: "Denis Villeneuve",
    release_date: "2024-02-28",
    cast: [
      { id: 1, name: "Timothée Chalamet", role: "Paul Atreides", profile_path: `${TMDB_BASE}/jScPd0u0jeo66l8g3Kd5FVFgi4Q.jpg` },
      { id: 2, name: "Zendaya", role: "Chani", profile_path: `${TMDB_BASE}/xMwyqZGoD2JpA9RinbXf7Nq6xJ2.jpg` },
      { id: 3, name: "Rebecca Ferguson", role: "Lady Jessica", profile_path: `${TMDB_BASE}/6ybHiaF8rFj5ZksX2cQkK8xur7w.jpg` },
    ]
  },
  {
    id: 2,
    title: "Oppenheimer",
    poster_path: `${TMDB_BASE}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg`,
    backdrop_path: `${TMDB_BASE}/fm6KqXpk3M2HVveHwCrBRoOoA0A.jpg`,
    vote_average: 8.5,
    overview: "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
    runtime: 180,
    genres: ["Drama", "History", "Thriller"],
    director: "Christopher Nolan",
    release_date: "2023-07-19",
    cast: [
      { id: 4, name: "Cillian Murphy", role: "J. Robert Oppenheimer", profile_path: `${TMDB_BASE}/3Z1S5HAvK9S11Kpxq0nZp17h9sX.jpg` },
      { id: 5, name: "Emily Blunt", role: "Kitty Oppenheimer", profile_path: `${TMDB_BASE}/nJmH7i3K90Fj8eIu0V9wHjJ94a.jpg` },
      { id: 6, name: "Robert Downey Jr.", role: "Lewis Strauss", profile_path: `${TMDB_BASE}/5qHNjhtjMD4YWH3UP0rm4tKwxIQ.jpg` },
    ]
  },
  {
    id: 3,
    title: "The Batman",
    poster_path: `${TMDB_BASE}/74xTEgt7R36Fpooo50r9T25onhq.jpg`,
    backdrop_path: `${TMDB_BASE}/tRS6jvPMIh69vQ2aQd8X4k1nB2A.jpg`,
    vote_average: 8.2,
    overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    runtime: 176,
    genres: ["Action", "Crime", "Mystery"],
    director: "Matt Reeves",
    release_date: "2022-03-01",
    cast: [
      { id: 6, name: "Robert Pattinson", role: "Bruce Wayne / The Batman", profile_path: `${TMDB_BASE}/8A4PS5iG7GWEAVFftyqMZKl3qtP.jpg` },
      { id: 7, name: "Zoë Kravitz", role: "Selina Kyle / Catwoman", profile_path: `${TMDB_BASE}/aQc25tHn8WwK3xG6QW4r5K1iV4O.jpg` },
      { id: 8, name: "Paul Dano", role: "Edward Nashton / Riddler", profile_path: `${TMDB_BASE}/7nSAdgD12Fq2rLYz7eID1f79hW1.jpg` },
    ]
  },
  {
    id: 4,
    title: "Anyone But You",
    poster_path: `${TMDB_BASE}/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg`,
    backdrop_path: `${TMDB_BASE}/nTPFkLUARmo1bYHcgplw24vEj39.jpg`,
    vote_average: 7.0,
    overview: "After an amazing first date, Bea and Ben's fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
    runtime: 103,
    genres: ["Comedy", "Romance"],
    director: "Will Gluck",
    release_date: "2023-12-21",
    cast: [
      { id: 9, name: "Sydney Sweeney", role: "Bea", profile_path: `${TMDB_BASE}/qYiaSl0Eb7G3VaxOghoKXhFWm8E.jpg` },
      { id: 10, name: "Glen Powell", role: "Ben", profile_path: `${TMDB_BASE}/rFqTtvJq0ZELX2R0o9I9tI3B52t.jpg` },
    ]
  },
  {
    id: 5,
    title: "John Wick: Chapter 4",
    poster_path: `${TMDB_BASE}/vZloFAK7NmvMGKE7VkF5UJoe8Iy.jpg`,
    backdrop_path: `${TMDB_BASE}/7I6VUdPj6tQECNHdviJkUHD2u89.jpg`,
    vote_average: 7.8,
    overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table.",
    runtime: 169,
    genres: ["Action", "Thriller", "Crime"],
    director: "Chad Stahelski",
    release_date: "2023-03-22",
    cast: [
      { id: 11, name: "Keanu Reeves", role: "John Wick", profile_path: `${TMDB_BASE}/4D0PpNIIQsqgwH411jLDoB61F8x.jpg` },
      { id: 12, name: "Donnie Yen", role: "Caine", profile_path: `${TMDB_BASE}/xZ2ksIAn0YwWw9yI43q6N4R2n0J.jpg` },
      { id: 13, name: "Bill Skarsgård", role: "Marquis", profile_path: `${TMDB_BASE}/wM2vOaGto9tT3N49PPRR6I7TzQx.jpg` },
    ]
  },
  {
    id: 6,
    title: "La La Land",
    poster_path: `${TMDB_BASE}/uDO8zWDhfWwoFdKS4f4F6XPE1T2.jpg`,
    backdrop_path: `${TMDB_BASE}/qJeU7KM4nT201yX97uWz1U3Nf61.jpg`,
    vote_average: 7.9,
    overview: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars.",
    runtime: 128,
    genres: ["Comedy", "Drama", "Romance"],
    director: "Damien Chazelle",
    release_date: "2016-11-29",
    cast: [
      { id: 14, name: "Ryan Gosling", role: "Sebastian Wilder", profile_path: `${TMDB_BASE}/40tN3ePEc0W6XvepGk6mK8FhI6i.jpg` },
      { id: 15, name: "Emma Stone", role: "Mia Dolan", profile_path: `${TMDB_BASE}/2hwXbPW28EpcEkaepwM6aXY0w4P.jpg` },
    ]
  },
  {
    id: 7,
    title: "Interstellar",
    poster_path: `${TMDB_BASE}/gEU2QniE1A8Pib2y2bheL2EpeI4.jpg`,
    backdrop_path: `${TMDB_BASE}/xJhRzL2Z5Gz0d5x0TzZp9c2f6U6.jpg`,
    vote_average: 8.4,
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    runtime: 169,
    genres: ["Adventure", "Drama", "Science Fiction"],
    director: "Christopher Nolan",
    release_date: "2014-11-05",
    cast: [
      { id: 16, name: "Matthew McConaughey", role: "Cooper", profile_path: `${TMDB_BASE}/g85E5xEIfbY5vWk2WzUvH1r9X8U.jpg` },
      { id: 17, name: "Anne Hathaway", role: "Brand", profile_path: `${TMDB_BASE}/kWe1c2fJkQ6fB2fGxqJ0qQZG9Qd.jpg` },
      { id: 18, name: "Jessica Chastain", role: "Murph", profile_path: `${TMDB_BASE}/jXGfO1TbxO7H91P8NZyKXZXkX5T.jpg` },
    ]
  },
  {
    id: 8,
    title: "The Fall Guy",
    poster_path: `${TMDB_BASE}/tSz1qsm1TSMB0F2bUu1pS3C1EaG.jpg`,
    backdrop_path: `${TMDB_BASE}/1rQv4m9U60n6zF1wLgW3t3o6M.jpg`,
    vote_average: 7.2,
    overview: "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    runtime: 126,
    genres: ["Action", "Comedy", "Romance"],
    director: "David Leitch",
    release_date: "2024-04-24",
    cast: [
      { id: 19, name: "Ryan Gosling", role: "Colt Seavers", profile_path: `${TMDB_BASE}/40tN3ePEc0W6XvepGk6mK8FhI6i.jpg` },
      { id: 20, name: "Emily Blunt", role: "Jody Moreno", profile_path: `${TMDB_BASE}/nJmH7i3K90Fj8eIu0V9wHjJ94a.jpg` },
      { id: 21, name: "Aaron Taylor-Johnson", role: "Tom Ryder", profile_path: `${TMDB_BASE}/j0x6N1F4F1K0vX1mN6Z2Z1C7z5Z.jpg` },
    ]
  }
];

export const getMovieById = (id: number) => MOCK_MOVIES.find(m => m.id === id);
