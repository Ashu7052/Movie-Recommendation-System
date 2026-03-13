'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CastMember {
  id: number;
  name: string;
  role: string;
  profile_path: string;
}

export default function CastGallery({ cast }: { cast: CastMember[] }) {
  if (!cast || cast.length === 0) return null;

  return (
    <div style={{ marginTop: '48px' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
        Top Cast
      </h3>
      <div 
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          paddingBottom: '20px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}
      >
        {cast.map((actor, index) => (
          <motion.div
            key={actor.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              minWidth: '140px',
              scrollSnapAlign: 'start',
            }}
          >
            <div style={{
              width: '140px',
              height: '200px',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <Image 
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'}
                alt={actor.name}
                fill
                sizes="140px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)' }}>{actor.name}</h4>
            <p style={{ fontSize: '0.85rem', color: '#a1a1a6', marginTop: '4px' }}>{actor.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
