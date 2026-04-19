'use client';

import { useState, useEffect } from 'react';
import { Play, Check, Plus } from 'lucide-react';
import { useWishlist } from '@/hooks/useWishlist';
import TrailerModal from './TrailerModal';

export default function MovieActions({ movie, trailerKey }: { movie: any, trailerKey: string | null }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const inWishlist = isInWishlist(movie.id);

  return (
    <>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button 
          className="btn-primary" 
          onClick={() => setIsTrailerOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <Play fill="currentColor" size={20} /> Watch Trailer
        </button>
        <button 
          className="btn-primary" 
          onClick={() => toggleWishlist(movie)}
          style={{ 
            background: inWishlist ? 'rgba(230, 194, 122, 0.1)' : 'var(--card-bg)', 
            color: inWishlist ? 'var(--accent)' : 'var(--foreground)', 
            border: inWishlist ? '1px solid var(--accent)' : '1px solid var(--border-color)', 
            boxShadow: 'none',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            transition: 'all 0.3s'
          }}
        >
          {inWishlist ? <Check size={20} /> : <Plus size={20} />} 
          {inWishlist ? 'In Vault' : 'Add to Vault'}
        </button>
      </div>

      <TrailerModal 
        isOpen={isTrailerOpen} 
        onClose={() => setIsTrailerOpen(false)} 
        videoKey={trailerKey} 
      />
    </>
  );
}
