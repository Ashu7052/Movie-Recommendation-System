import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const movies = [
  {
    title: "Dune: Part Two",
    posterPath: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2JGjjcNs.jpg",
    backdropPath: "https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vtec0gI4eG3qP.jpg",
    voteAverage: 8.8,
    overview: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    runtime: 166,
    director: "Denis Villeneuve",
    releaseDate: "2024-02-28",
    whyWatch: "An absolute visual spectacle with arguably the greatest immersive sound design of the modern era. The narrative stakes are massive.",
    targetAudience: "Fans of visionary sci-fi epics, intense political world-building, and jaw-dropping cinematography.",
    visualVibe: "Awe-inspiring desert landscapes rendered in breathtaking golden hours.",
    genres: ["Science Fiction", "Adventure", "Trending"],
    cast: [
      { name: "Timothée Chalamet", role: "Paul Atreides", profilePath: "https://image.tmdb.org/t/p/original/jScPd0u0jeo66l8g3Kd5FVFgi4Q.jpg" },
      { name: "Zendaya", role: "Chani", profilePath: "https://image.tmdb.org/t/p/original/xMwyqZGoD2JpA9RinbXf7Nq6xJ2.jpg" },
      { name: "Rebecca Ferguson", role: "Lady Jessica", profilePath: "https://image.tmdb.org/t/p/original/6ybHiaF8rFj5ZksX2cQkK8xur7w.jpg" }
    ]
  },
  {
    title: "Oppenheimer",
    posterPath: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdropPath: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBRoOoA0A.jpg",
    voteAverage: 8.5,
    overview: "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
    runtime: 180,
    director: "Christopher Nolan",
    releaseDate: "2023-07-19",
    whyWatch: "Nolan transforms a dense historical biopic into a tense, ticking-clock psychological thriller. The practical effects of the Trinity Test alone are worth the runtime.",
    targetAudience: "History buffs and cinema purists who appreciate practical effects and deeply grounded character studies.",
    visualVibe: "Sharp, high-contrast 70mm IMAX photography with visceral close-ups.",
    genres: ["Drama", "History", "Thriller", "Trending"],
    cast: [
      { name: "Cillian Murphy", role: "J. Robert Oppenheimer", profilePath: "https://image.tmdb.org/t/p/original/3Z1S5HAvK9S11Kpxq0nZp17h9sX.jpg" },
      { name: "Emily Blunt", role: "Kitty Oppenheimer", profilePath: "https://image.tmdb.org/t/p/original/nJmH7i3K90Fj8eIu0V9wHjJ94a.jpg" },
      { name: "Robert Downey Jr.", role: "Lewis Strauss", profilePath: "https://image.tmdb.org/t/p/original/5qHNjhtjMD4YWH3UP0rm4tKwxIQ.jpg" }
    ]
  },
  {
    title: "The Batman",
    posterPath: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdropPath: "https://image.tmdb.org/t/p/original/tRS6jvPMIh69vQ2aQd8X4k1nB2A.jpg",
    voteAverage: 8.2,
    overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    runtime: 176,
    director: "Matt Reeves",
    releaseDate: "2022-03-01",
    whyWatch: "This is the most detective-driven cinematic take on Batman we've ever seen. The dark, gritty atmosphere is palpable, turning Gotham into a true character.",
    targetAudience: "Fans of neo-noir mysteries, psychological thrillers, and a grounded superhero universe.",
    visualVibe: "Shadow-drenched, rains-soaked urban decay lit by street lamps.",
    genres: ["Action", "Crime", "Mystery", "Trending"],
    cast: [
      { name: "Robert Pattinson", role: "Bruce Wayne / The Batman", profilePath: "https://image.tmdb.org/t/p/original/8A4PS5iG7GWEAVFftyqMZKl3qtP.jpg" },
      { name: "Zoë Kravitz", role: "Selina Kyle / Catwoman", profilePath: "https://image.tmdb.org/t/p/original/aQc25tHn8WwK3xG6QW4r5K1iV4O.jpg" },
      { name: "Paul Dano", role: "Edward Nashton / Riddler", profilePath: "https://image.tmdb.org/t/p/original/7nSAdgD12Fq2rLYz7eID1f79hW1.jpg" }
    ]
  },
  {
    title: "Anyone But You",
    posterPath: "https://image.tmdb.org/t/p/original/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
    backdropPath: "https://image.tmdb.org/t/p/original/nTPFkLUARmo1bYHcgplw24vEj39.jpg",
    voteAverage: 7.0,
    overview: "After an amazing first date, Bea and Ben's fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
    runtime: 103,
    director: "Will Gluck",
    releaseDate: "2023-12-21",
    whyWatch: "A charming resurgence of the classic rom-com formula. Sweeney and Powell have fantastic chemistry that drives this lighthearted, fun escapade.",
    targetAudience: "Couples, hopeless romantics, and anyone looking for a feel-good laugh.",
    visualVibe: "Bright, sunny Australian coastlines with vibrant, happy colors.",
    genres: ["Comedy", "Romance", "Trending"],
    cast: [
      { name: "Sydney Sweeney", role: "Bea", profilePath: "https://image.tmdb.org/t/p/original/qYiaSl0Eb7G3VaxOghoKXhFWm8E.jpg" },
      { name: "Glen Powell", role: "Ben", profilePath: "https://image.tmdb.org/t/p/original/rFqTtvJq0ZELX2R0o9I9tI3B52t.jpg" }
    ]
  },
  {
    title: "John Wick: Chapter 4",
    posterPath: "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UJoe8Iy.jpg",
    backdropPath: "https://image.tmdb.org/t/p/original/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    voteAverage: 7.8,
    overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table.",
    runtime: 169,
    director: "Chad Stahelski",
    releaseDate: "2023-03-22",
    whyWatch: "An absolute masterclass in stunt choreography and action filmmaking. Every set piece is more creative and brutal than the last.",
    targetAudience: "Action junkies and those who appreciate the physical art of stunt work.",
    visualVibe: "Neon-soaked back-alleys and high-end criminal luxury, framed like a brutal ballet.",
    genres: ["Action", "Thriller", "Crime"],
    cast: [
      { name: "Keanu Reeves", role: "John Wick", profilePath: "https://image.tmdb.org/t/p/original/4D0PpNIIQsqgwH411jLDoB61F8x.jpg" },
      { name: "Donnie Yen", role: "Caine", profilePath: "https://image.tmdb.org/t/p/original/xZ2ksIAn0YwWw9yI43q6N4R2n0J.jpg" },
      { name: "Bill Skarsgård", role: "Marquis", profilePath: "https://image.tmdb.org/t/p/original/wM2vOaGto9tT3N49PPRR6I7TzQx.jpg" }
    ]
  },
  {
    title: "La La Land",
    posterPath: "https://image.tmdb.org/t/p/original/uDO8zWDhfWwoFdKS4f4F6XPE1T2.jpg",
    backdropPath: "https://image.tmdb.org/t/p/original/qJeU7KM4nT201yX97uWz1U3Nf61.jpg",
    voteAverage: 7.9,
    overview: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars.",
    runtime: 128,
    director: "Damien Chazelle",
    releaseDate: "2016-11-29",
    whyWatch: "A magical love letter to the dreamers of Los Angeles. The musical numbers are unforgettable and the ending is beautifully bittersweet.",
    targetAudience: "Musical lovers, artists chasing their dreams, and fans of modern classics.",
    visualVibe: "Saturated primary colors that pop against dreamy magic-hour skies.",
    genres: ["Comedy", "Drama", "Romance"],
    cast: [
      { name: "Ryan Gosling", role: "Sebastian Wilder", profilePath: "https://image.tmdb.org/t/p/original/40tN3ePEc0W6XvepGk6mK8FhI6i.jpg" },
      { name: "Emma Stone", role: "Mia Dolan", profilePath: "https://image.tmdb.org/t/p/original/2hwXbPW28EpcEkaepwM6aXY0w4P.jpg" }
    ]
  },
  {
    title: "Interstellar",
    posterPath: "https://image.tmdb.org/t/p/original/gEU2QniE1A8Pib2y2bheL2EpeI4.jpg",
    backdropPath: "https://image.tmdb.org/t/p/original/xJhRzL2Z5Gz0d5x0TzZp9c2f6U6.jpg",
    voteAverage: 8.4,
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel.",
    runtime: 169,
    director: "Christopher Nolan",
    releaseDate: "2014-11-05",
    whyWatch: "A mind-bending exploration of space, time, and human love, backed by Hans Zimmer's arguably greatest, most overpowering organ score.",
    targetAudience: "Those seeking profound existential questions wrapped in high-budget astrophysics.",
    visualVibe: "Cold, vast voids of space clashing with the desperate intimacy of small spacecraft models.",
    genres: ["Adventure", "Drama", "Science Fiction"],
    cast: [
      { name: "Matthew McConaughey", role: "Cooper", profilePath: "https://image.tmdb.org/t/p/original/g85E5xEIfbY5vWk2WzUvH1r9X8U.jpg" },
      { name: "Anne Hathaway", role: "Brand", profilePath: "https://image.tmdb.org/t/p/original/kWe1c2fJkQ6fB2fGxqJ0qQZG9Qd.jpg" },
      { name: "Jessica Chastain", role: "Murph", profilePath: "https://image.tmdb.org/t/p/original/jXGfO1TbxO7H91P8NZyKXZXkX5T.jpg" }
    ]
  },
  {
    title: "The Fall Guy",
    posterPath: "https://image.tmdb.org/t/p/original/tSz1qsm1TSMB0F2bUu1pS3C1EaG.jpg",
    backdropPath: "https://image.tmdb.org/t/p/original/1rQv4m9U60n6zF1wLgW3t3o6M.jpg",
    voteAverage: 7.2,
    overview: "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star and try to win back the love of his life.",
    runtime: 126,
    director: "David Leitch",
    releaseDate: "2024-04-24",
    whyWatch: "A ridiculously fun, meta love-letter to Hollywood stunt workers. It balances crazy action set-pieces with genuine laugh-out-loud humor.",
    targetAudience: "Action-comedy fans and those who want an entertaining popcorn flick.",
    visualVibe: "Bright, chaotic movie sets filled with explosive practical effects.",
    genres: ["Action", "Comedy", "Romance"],
    cast: [
      { name: "Ryan Gosling", role: "Colt Seavers", profilePath: "https://image.tmdb.org/t/p/original/40tN3ePEc0W6XvepGk6mK8FhI6i.jpg" },
      { name: "Emily Blunt", role: "Jody Moreno", profilePath: "https://image.tmdb.org/t/p/original/nJmH7i3K90Fj8eIu0V9wHjJ94a.jpg" },
      { name: "Aaron Taylor-Johnson", role: "Tom Ryder", profilePath: "https://image.tmdb.org/t/p/original/j0x6N1F4F1K0vX1mN6Z2Z1C7z5Z.jpg" }
    ]
  }
];

async function main() {
  console.log('Clearing database...')
  await prisma.castMember.deleteMany()
  await prisma.movie.deleteMany()
  await prisma.genre.deleteMany()

  console.log('Seeding movies...')
  for (const m of movies) {
    await prisma.movie.create({
      data: {
        title: m.title,
        posterPath: m.posterPath,
        backdropPath: m.backdropPath,
        voteAverage: m.voteAverage,
        overview: m.overview,
        runtime: m.runtime,
        director: m.director,
        releaseDate: m.releaseDate,
        whyWatch: m.whyWatch,
        targetAudience: m.targetAudience,
        visualVibe: m.visualVibe,
        genres: {
          connectOrCreate: m.genres.map(g => ({
            where: { name: g },
            create: { name: g }
          }))
        },
        cast: {
          create: m.cast
        }
      }
    });
  }
  console.log('Done.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
