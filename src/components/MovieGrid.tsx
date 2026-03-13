'use client';

import MovieCard from './MovieCard';

export default function MovieGrid({ movies }: { movies: any[] }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '32px',
        padding: '24px 0',
      }}
    >
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} index={index} />
      ))}
    </div>
  );
}
