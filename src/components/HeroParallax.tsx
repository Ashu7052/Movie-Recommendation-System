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
        top: '10%',
        left: '15%',
        width: '70vw',
        height: '70vw',
        background: 'radial-gradient(circle at center, rgba(230, 194, 122, 0.12) 0%, transparent 60%)',
        filter: 'blur(120px)',
        zIndex: 0,
        scale
      }} />

      <motion.div 
        style={{ y: y1, opacity, zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '800px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        >
          <span className="glass-pill" style={{ marginBottom: '32px', display: 'inline-block' }}>
            The Lumina Experience
          </span>
          <h1 className="title-hero" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 1.05, marginBottom: '24px' }}>
            Cinematic <br/><span className="title-gold">Opulence.</span>
          </h1>
          <p className="subtitle-hero" style={{ maxWidth: '600px', margin: '0 auto 48px auto' }}>
            Immerse yourself in hand-picked masterpieces. A seamlessly elegant, hyper-realistic, and exquisitely crafted interface.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
            <button className="btn-primary" style={{ fontSize: '1.15rem', padding: '18px 48px' }}>
              Begin Journey
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '25vh',
          background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)',
          zIndex: 5,
        }}
      />
    </div>
  );
}
