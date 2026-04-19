'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface MovieRowProps {
  title: string;
  movies: any[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  if (!movies || movies.length === 0) return null;

  return (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '24px', color: 'var(--foreground)' }}>
        {title}
      </h2>
      <div 
        style={{ 
          display: 'flex', 
          gap: '20px', 
          overflowX: 'auto', 
          paddingBottom: '24px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className="hide-scrollbar"
      >
        {movies.map((movie, index) => (
          <motion.div
            key={`${movie.id}-${index}`}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{ 
              minWidth: '220px', 
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <Link href={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
              <div style={{ position: 'relative', width: '220px', height: '330px', borderRadius: '16px', overflow: 'hidden', marginBottom: '16px' }}>
                {movie.poster_path ? (
                  <Image 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="220px"
                  />
                ) : (
                  <Image 
                    src={`https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop`}
                    alt={movie.title}
                    fill
                    style={{ objectFit: 'cover', opacity: 0.5 }}
                    sizes="220px"
                    unoptimized
                  />
                )}
                <div style={{ 
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)',
                  opacity: 0, transition: 'opacity 0.3s',
                }} className="hover-overlay" />
              </div>
              <h3 style={{ color: '#e5e5e5', fontSize: '1.1rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {movie.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>★ {movie.vote_average?.toFixed(1)}</span>
                <span style={{ color: '#888', fontSize: '0.9rem' }}>{movie.release_date?.split('-')[0]}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        div:hover > .hover-overlay { opacity: 1 !important; }
      `}} />
    </div>
  );
}
