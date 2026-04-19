'use client';

import { useWishlist } from '@/hooks/useWishlist';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Film, ArrowRight } from 'lucide-react';

export default function ProfilePage() {
  const { wishlist } = useWishlist();

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navigation />

      <section className="container" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '60px' }}>
          <div style={{ 
            width: '100px', height: '100px', borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--accent) 0%, #ff8a00 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem', fontWeight: 700, color: 'white',
            boxShadow: '0 10px 30px -10px var(--accent)'
          }}>
            V
          </div>
          <div>
            <h1 className="title-gold" style={{ fontSize: '3rem', margin: 0 }}>Vault Member</h1>
            <p style={{ color: '#888', fontSize: '1.2rem', margin: '4px 0 0 0' }}>Premium Tier Plan</p>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <Heart size={32} color="var(--accent)" fill="var(--accent)" />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--foreground)' }}>Your Wishlist</h2>
          </div>

          {wishlist.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Film size={60} color="#444" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#a1a1a6', marginBottom: '16px' }}>Your vault is currently empty.</h3>
              <Link href="/">
                <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Discover Movies <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
              {wishlist.map((movie) => (
                <motion.div
                  key={movie.id}
                  whileHover={{ scale: 1.05 }}
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  <Link href={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
                      {movie.poster_path ? (
                        <Image 
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="200px"
                        />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'var(--card-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ color: '#888' }}>No Image</span>
                        </div>
                      )}
                    </div>
                    <h3 style={{ color: '#e5e5e5', fontSize: '1rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {movie.title}
                    </h3>
                    <p style={{ color: '#888', fontSize: '0.85rem' }}>Added {new Date(movie.addedAt).toLocaleDateString()}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
