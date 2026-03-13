'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface MovieCardProps {
  movie: any;
  index: number;
}

export default function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card"
        style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '2/3',
          cursor: 'pointer',
          borderRadius: '16px',
        }}
        whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.2 } }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-700 hover:scale-110"
        />
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: 'var(--foreground)' }}>
            {movie.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Star size={16} fill="var(--accent)" color="var(--accent)" />
            <span style={{ fontWeight: 600, color: 'var(--accent)' }}>{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
