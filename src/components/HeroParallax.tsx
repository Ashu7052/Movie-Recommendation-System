'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div 
      ref={ref}
      style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--background)'
      }}
    >
      <motion.div style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
        filter: 'blur(100px)',
        zIndex: 0,
        scale
      }} />

      <motion.div 
        style={{ y: y1, opacity, zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '800px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="glass-pill" style={{ color: 'var(--accent)', marginBottom: '32px', display: 'inline-block' }}>
            Premium Cinema Experience
          </span>
          <h1 className="title-hero" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 1.1, marginBottom: '24px' }}>
            Redefining <br/>Entertainment
          </h1>
          <p className="subtitle-hero" style={{ maxWidth: '600px', margin: '0 auto 48px auto' }}>
            Discover cinematic masterpieces with an interface designed for the ultimate visual experience. Smooth, fast, and remarkably beautiful.
          </p>
          <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
            Explore Trending
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '20vh',
          background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)',
          zIndex: 5,
        }}
      />
    </div>
  );
}
