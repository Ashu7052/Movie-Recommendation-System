import HeroParallax from '@/components/HeroParallax';
import MovieGrid from '@/components/MovieGrid';
import Navigation from '@/components/Navigation';
import { MOCK_MOVIES } from '@/lib/mockData';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navigation />
      
      <HeroParallax />

      <section className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-10vh', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>
              Top Picks For You
            </h2>
            <p style={{ color: '#a1a1a6', marginTop: '8px' }}>Expertly curated for your taste.</p>
          </div>
        </div>
        
        <MovieGrid movies={MOCK_MOVIES} />
      </section>
    </main>
  );
}
