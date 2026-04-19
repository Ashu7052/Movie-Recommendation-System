'use client';

import { useState, useEffect } from 'react';

export interface WishlistItem {
  id: number;
  title: string;
  poster_path: string | null;
  addedAt: number;
}

export function useWishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('lumina_wishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const toggleWishlist = (movie: { id: number; title: string; poster_path: string | null }) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === movie.id);
      let newList;
      if (exists) {
        newList = prev.filter(item => item.id !== movie.id);
      } else {
        newList = [...prev, { ...movie, addedAt: Date.now() }];
      }
      localStorage.setItem('lumina_wishlist', JSON.stringify(newList));
      return newList;
    });
  };

  const isInWishlist = (id: number) => {
    return wishlist.some(item => item.id === id);
  };

  return { wishlist, toggleWishlist, isInWishlist };
}
