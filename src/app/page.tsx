import HeroParallax from '@/components/HeroParallax';
import Navigation from '@/components/Navigation';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import MovieRow from '@/components/MovieRow';
import { getTrendingMovies, getMoviesByRegion } from '@/lib/tmdb';

export default async function Home() {
  const [trending, hollywood, bollywood, telugu, malayalam] = await Promise.all([
    getTrendingMovies(),
    getMoviesByRegion('en', 'US'), // Hollywood
    getMoviesByRegion('hi', 'IN'), // Bollywood
    getMoviesByRegion('te', 'IN'), // Telugu
    getMoviesByRegion('ml', 'IN')  // Malayalam
  ]);
  
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navigation />
      
      <HeroParallax />

      <div id="discover" style={{ position: 'relative', zIndex: 10, marginTop: '-15vh', paddingBottom: '120px' }}>
        <InteractiveShowcase 
          movies={trending} 
          hollywood={hollywood} 
          bollywood={bollywood} 
          telugu={telugu} 
          malayalam={malayalam} 
        />
      </div>
    </main>
  );
}
