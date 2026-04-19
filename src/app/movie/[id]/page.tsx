import { getMovieById, getMovieCredits, getMovieReviews, getMovieVideos } from '@/lib/tmdb';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Calendar, ChevronLeft, DollarSign, Quote } from 'lucide-react';
import CastGallery from '@/components/CastGallery';
import MovieActions from '@/components/MovieActions';

export default async function MovieDetails({ params }: { params: Promise<{ id: string }> }) {
  const p = await params;
  const movie = await getMovieById(p.id);

  if (!movie) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
        <Navigation />
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Movie not found in the Vault.</h1>
          <Link href="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Return to Home</Link>
        </div>
      </main>
    );
  }

  const [credits, reviewsRaw, videosRaw] = await Promise.all([
    getMovieCredits(p.id),
    getMovieReviews(p.id),
    getMovieVideos(p.id)
  ]);

  const cast = credits?.cast?.slice(0, 10) || [];
  const directorInfo = credits?.crew?.find((c: any) => c.job === 'Director');
  const director = directorInfo ? directorInfo.name : 'Unknown';
  
  const reviews = reviewsRaw?.results?.slice(0, 3) || [];
  const trailerEntry = videosRaw?.results?.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube');
  const trailerKey = trailerEntry ? trailerEntry.key : (videosRaw?.results?.[0]?.key || null);

  const bgUrl = movie.backdrop_path 
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` 
    : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1920&auto=format&fit=crop';

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navigation />

      <section style={{ position: 'relative', width: '100%', height: '85vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image 
            src={bgUrl}
            alt={movie.title}
            fill
            priority
            style={{ objectFit: 'cover', opacity: 1 }}
            sizes="100vw"
            unoptimized
          />
        </div>

        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to right, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 50%, transparent 100%)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'linear-gradient(to top, var(--background) 0%, transparent 90%)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 4,
          background: 'radial-gradient(circle at 75% 50%, transparent 0%, rgba(10,10,10,0.5) 120%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '90px' }}>
          <div style={{ maxWidth: '800px', animation: 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a1a1a6', textDecoration: 'none', marginBottom: '32px', fontWeight: 500, transition: 'color 0.3s' }}>
              <ChevronLeft size={20} /> Back to Discover
            </Link>
            
            <div style={{ display: 'flex', gap: '14px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {movie.genres?.map((g: any) => (
                <span key={g.id || g} className="glass-pill">{g.name || g}</span>
              ))}
            </div>

            <h1 className="title-hero title-gold" style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)', marginBottom: '20px', lineHeight: 1.1 }}>
              {movie.title}
            </h1>
            
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '40px', fontSize: '1.15rem', color: '#e5e5e5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star size={24} fill="var(--accent)" color="var(--accent)" />
                <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>{movie.vote_average?.toFixed(1) || 'NR'}</span>
                <span style={{ color: '#888' }}>/10</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={20} color="var(--accent)" />
                {movie.runtime ? `${movie.runtime} min` : 'Unknown'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={20} color="var(--accent)" />
                {movie.release_date ? new Date(movie.release_date).getFullYear() : 'TBA'}
              </div>
              {movie.revenue > 0 && (
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80' }}>
                   <DollarSign size={20} />
                   {(movie.revenue / 1000000).toFixed(1)}M Box Office
                 </div>
              )}
            </div>

            <MovieActions movie={{ id: movie.id, title: movie.title, poster_path: movie.poster_path }} trailerKey={trailerKey} />
          </div>
        </div>
      </section>

      <section className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-30px', paddingBottom: '100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          <div className="glass-card" style={{ padding: '48px', background: 'var(--card-bg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
                  Storyline
                </h3>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#a1a1a6', fontWeight: 400 }}>
                  {movie.overview}
                </p>
                
                <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <strong style={{ color: 'var(--accent)', display: 'block', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Director</strong>
                  <p style={{ color: 'var(--foreground)', fontSize: '1.3rem', fontWeight: 500 }}>{director}</p>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
                  Top Cast
                </h3>
                {cast.length > 0 ? (
                  <CastGallery cast={cast.map((c: any) => ({
                     name: c.name, 
                     role: c.character, 
                     profile_path: c.profile_path ? `https://image.tmdb.org/t/p/w200${c.profile_path}` : null 
                  }))} />
                ) : (
                  <p style={{ color: '#888' }}>Cast information not available.</p>
                )}
              </div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '48px', background: 'var(--card-bg)' }}>
            <h3 className="title-gold" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '24px' }}>
              Why We Recommend It
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
               <div style={{ background: 'rgba(230, 194, 122, 0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(230, 194, 122, 0.1)' }}>
                  <h4 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '12px' }}>Visual & Tone</h4>
                  <p style={{ color: '#e5e5e5', lineHeight: 1.6 }}>An immersive cinematic experience that perfectly captures the essence of the {movie.genres?.map((g: any) => g.name || g).slice(0, 2).join(' and ') || 'premium'} genre. With a spectacular {(movie.vote_average > 0 ? movie.vote_average : 8.5).toFixed(1)}/10 rating, its visual aesthetics and masterful tone will keep you captivated from start to finish.</p>
               </div>
               <div style={{ background: 'rgba(230, 194, 122, 0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(230, 194, 122, 0.1)' }}>
                  <h4 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '12px' }}>Target Audience</h4>
                  <p style={{ color: '#e5e5e5', lineHeight: 1.6 }}>Highly recommended if you appreciate deep emotional arcs, high-stakes narratives, and exceptional world-building. Ideal for viewers looking for a profound and memorable {movie.genres?.[0]?.name || 'entertainment'} masterpiece.</p>
               </div>
            </div>
          </div>

          {reviews && reviews.length > 0 && (
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '30px', color: 'var(--foreground)' }}>
                Real-Time Premium Reviews
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                {reviews.map((rev: any, i: number) => (
                  <div key={i} className="glass-card" style={{ padding: '30px', borderLeft: '4px solid var(--accent)' }}>
                     <Quote color="var(--accent)" size={24} style={{ marginBottom: '16px', opacity: 0.5 }} />
                     <p style={{ color: '#e5e5e5', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '20px', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                       "{rev.content}"
                     </p>
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <strong style={{ color: 'var(--accent)' }}>— {rev.author}</strong>
                        <span style={{ color: '#888', fontSize: '0.85rem' }}>{new Date(rev.created_at).toLocaleDateString()}</span>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
