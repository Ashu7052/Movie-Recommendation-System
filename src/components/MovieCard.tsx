'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface MovieCardProps {
  movie: any;
  index: number;
}

export default function MovieCard({ movie, index }: MovieCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={`/movie/${movie.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '2/3',
          cursor: 'pointer',
          borderRadius: '20px',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
        className="glass-card group"
        whileHover={{ y: -10, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } }}
      >
        <motion.div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            loading="lazy"
          />
        </motion.div>
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px'
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: 'var(--foreground)', letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            {movie.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={18} fill="var(--accent)" color="var(--accent)" />
            <span style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '1rem' }}>{movie.vote_average.toFixed(1)}</span>
            <span style={{ color: '#a1a1a6', fontSize: '0.85rem', marginLeft: 'auto', fontWeight: 500 }}>
              {movie.release_date ? movie.release_date.split('-')[0] : ''}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
