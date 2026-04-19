'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Movie } from '@/lib/mockData';
import MovieCard from './MovieCard';
import MovieRow from './MovieRow';

const GENRES = ['All', 'Trending', 'Action', 'Science Fiction', 'Romance', 'Comedy', 'Drama', 'Thriller'];

const GENRE_MAP: Record<string, number> = {
  'Action': 28,
  'Science Fiction': 878,
  'Romance': 10749,
  'Comedy': 35,
  'Drama': 18,
  'Thriller': 53
};

export default function InteractiveShowcase({ 
  movies,
  hollywood,
  bollywood,
  telugu,
  malayalam
}: { 
  movies: any[],
  hollywood: any[],
  bollywood: any[],
  telugu: any[],
  malayalam: any[]
}) {
  const [activeGenre, setActiveGenre] = useState('All');

  const filterMovies = (list: any[]) => list.filter((m: any) => {
    if (activeGenre === 'All') return true;
    if (activeGenre === 'Trending') return m.vote_average >= 7.5;
    
    const genreId = GENRE_MAP[activeGenre];
    if (m.genre_ids && Array.isArray(m.genre_ids)) {
      return m.genre_ids.includes(genreId);
    }
    return m.genres?.includes(activeGenre);
  });

  const filteredMovies = filterMovies(movies);
  const filteredHollywood = filterMovies(hollywood);
  const filteredBollywood = filterMovies(bollywood);
  const filteredTelugu = filterMovies(telugu);
  const filteredMalayalam = filterMovies(malayalam);

  return (
    <div style={{ padding: '60px 0', position: 'relative', zIndex: 10 }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="title-hero title-gold" style={{ fontSize: '3rem', margin: '0 0 16px 0' }}>
          Explore the Vault
        </h2>
        <p style={{ color: '#a1a1a6', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Select a category to unveil expertly curated selections tailored to your mood.
        </p>
      </div>

      {/* Sleek Segmented Control */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginBottom: '60px',
        background: 'rgba(26,26,26,0.6)',
        backdropFilter: 'blur(20px)',
        padding: '12px',
        borderRadius: '50px',
        border: '1px solid var(--border-color)',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        width: 'fit-content',
        maxWidth: '100%',
        margin: '0 auto 80px auto',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
      }}>
        {GENRES.map(genre => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            style={{
              padding: '12px 28px',
              borderRadius: '40px',
              border: activeGenre === genre ? '1px solid rgba(230, 194, 122, 0.4)' : '1px solid transparent',
              background: activeGenre === genre ? 'linear-gradient(135deg, rgba(230, 194, 122, 0.1) 0%, rgba(184, 145, 62, 0.2) 100%)' : 'transparent',
              color: activeGenre === genre ? 'var(--accent)' : '#a1a1a6',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              whiteSpace: 'nowrap',
              boxShadow: activeGenre === genre ? '0 0 20px rgba(230, 194, 122, 0.15), inset 0 0 20px rgba(230, 194, 122, 0.05)' : 'none'
            }}
            onMouseEnter={(e: any) => { if (activeGenre !== genre) e.target.style.color = '#fff' }}
            onMouseLeave={(e: any) => { if (activeGenre !== genre) e.target.style.color = '#a1a1a6' }}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Hero-style animated masonry */}
      <motion.div 
        layout
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '40px',
          minHeight: '600px'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredMovies.map((movie, i) => (
            <motion.div
              key={`${movie.id}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.8, y: -50, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
            >
              <MovieCard movie={movie} index={0} />
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredMovies.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px 0', color: '#a1a1a6', fontSize: '1.2rem' }}
          >
            No magnificent titles found in this category right now.
          </motion.div>
        )}
      </motion.div>

      {/* Synchronized Regional Rows */}
      <div id="movies" className="container" style={{ marginTop: '100px' }}>
        <motion.div layout>
          <MovieRow title={`Best ${activeGenre !== 'All' ? activeGenre : ''} Hollywood Blockbusters`} movies={filteredHollywood} />
          <MovieRow title={`Top ${activeGenre !== 'All' ? activeGenre : ''} Bollywood Picks`} movies={filteredBollywood} />
          <MovieRow title={`${activeGenre !== 'All' ? activeGenre : ''} Telugu Sensations`} movies={filteredTelugu} />
          <MovieRow title={`Masterpiece ${activeGenre !== 'All' ? activeGenre : ''} Malayalam Hits`} movies={filteredMalayalam} />
        </motion.div>
      </div>
    </div>
  );
}
