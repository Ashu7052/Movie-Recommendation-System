import { getMovieById } from '@/lib/mockData';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Calendar, ChevronLeft, Play } from 'lucide-react';
import CastGallery from '@/components/CastGallery';

export default async function MovieDetails({ params }: { params: Promise<{ id: string }> }) {
  const p = await params;
  const movie = getMovieById(parseInt(p.id, 10));

  if (!movie) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Navigation />
        <h1>Movie not found</h1>
        <Link href="/" style={{ color: 'var(--accent)', marginTop: '20px', display: 'block' }}>Go Back</Link>
      </main>
    );
  }

  const bgUrl = movie.backdrop_path 
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` 
    : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1920&auto=format&fit=crop';

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navigation />

      <section style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image 
            src={bgUrl}
            alt={movie.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
        </div>

        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to top, var(--background) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'radial-gradient(circle at 70% 50%, transparent 0%, var(--background) 120%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '80px' }}>
          <div style={{ maxWidth: '800px', animation: 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a1a1a6', textDecoration: 'none', marginBottom: '24px', fontWeight: 500, transition: 'color 0.3s' }}>
              <ChevronLeft size={20} /> Back to Trending
            </Link>
            
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {movie.genres?.map((g) => (
                <span key={g} className="glass-pill">{g}</span>
              ))}
            </div>

            <h1 className="title-hero" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '16px' }}>
              {movie.title}
            </h1>
            
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '32px', fontSize: '1.1rem', color: '#e5e5e5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Star size={20} fill="var(--accent)" color="var(--accent)" />
                <span style={{ fontWeight: 700 }}>{movie.vote_average.toFixed(1)}</span>
                <span style={{ color: '#888' }}>/10</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={18} />
                {movie.runtime} min
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={18} />
                {new Date(movie.release_date).getFullYear()}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Play fill="currentColor" size={20} /> Play Trailer
              </button>
              <button className="btn-primary" style={{ background: 'var(--glass-bg)', color: 'var(--foreground)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
                + Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-20px', paddingBottom: '80px' }}>
        <div className="glass-card" style={{ padding: '40px', background: 'var(--card-bg)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '20px', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
                Storyline
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#a1a1a6' }}>
                {movie.overview}
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <strong style={{ color: 'var(--foreground)', display: 'block', marginBottom: '8px' }}>Director</strong>
                <p style={{ color: '#a1a1a6', fontSize: '1.1rem' }}>{movie.director}</p>
              </div>
            </div>

            <div>
               <CastGallery cast={movie.cast} />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
