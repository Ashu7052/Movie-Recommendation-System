'use client';

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { Search, User, Compass, Film, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'Discover', href: '#discover', icon: Compass },
    { name: 'Movies', href: '#movies', icon: Film },
    { name: 'Trending', href: '#trending', icon: TrendingUp }
  ];

  return (
    <motion.nav
      className={isScrolled ? 'glass-nav' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: isScrolled ? '12px 0' : '24px 0',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.05em', color: 'var(--foreground)' }}>
            Lumina<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </Link>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '8px 24px', borderRadius: '40px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
           {navLinks.map((link) => (
              <Link key={link.name} href={link.href} style={{ textDecoration: 'none', color: '#a1a1a6', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.3s ease' }} 
              onMouseEnter={(e: any) => e.target.style.color = 'var(--accent)'} 
              onMouseLeave={(e: any) => e.target.style.color = '#a1a1a6'}>
                <link.icon size={16} />
                {link.name}
              </Link>
           ))}
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <motion.button 
            whileHover={{ scale: 1.1, color: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--foreground)', transition: 'color 0.3s' }}
          >
            <Search size={20} />
          </motion.button>
          <motion.div 
            whileHover={{ scale: 1.1, borderColor: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'rgba(230, 194, 122, 0.05)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(230, 194, 122, 0.15)',
              color: 'var(--accent)',
              transition: 'all 0.3s'
            }}
          >
            <User size={18} />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
