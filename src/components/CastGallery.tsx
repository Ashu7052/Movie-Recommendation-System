'use client';

import { motion } from 'framer-motion';

interface CastMember {
  id?: number | string;
  name: string;
  role: string;
  profile_path: string | null;
}

export default function CastGallery({ cast }: { cast: CastMember[] }) {
  if (!cast || cast.length === 0) return null;

  return (
    <div style={{ marginTop: '0px' }}>
      <div 
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          paddingBottom: '20px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}
      >
        {cast.map((actor, index) => (
          <motion.div
            key={actor.id || index}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
            style={{
              minWidth: '150px',
              scrollSnapAlign: 'start',
            }}
          >
            <div style={{
              width: '150px',
              height: '210px',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              border: '1px solid var(--border-color)'
            }}>
              <img 
                src={actor.profile_path || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop'}
                alt={actor.name}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--foreground)' }}>{actor.name}</h4>
            <p style={{ fontSize: '0.9rem', color: '#a1a1a6', margin: '4px 0 0 0' }}>{actor.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
