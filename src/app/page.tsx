import HeroParallax from '@/components/HeroParallax';
import Navigation from '@/components/Navigation';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import { getTrendingMovies } from '@/lib/tmdb';

export default async function Home() {
  const movies = await getTrendingMovies();
  
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navigation />
      
      <HeroParallax />

      <div style={{ position: 'relative', zIndex: 10, marginTop: '-15vh', paddingBottom: '120px' }}>
        <InteractiveShowcase movies={movies as any} />
      </div>
    </main>
  );
}
