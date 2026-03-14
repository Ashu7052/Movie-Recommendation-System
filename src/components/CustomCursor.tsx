'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the cursor
  const springX = useSpring(mouseX, { damping: 25, stiffness: 120, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 120, mass: 0.5 });

  // Slower springs for the glowing aura
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 40, mass: 2 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 40, mass: 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      // Elements that trigger expanding cursor
      if (target.closest('button, a, .glass-card, input')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer Glow Aura */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(230, 194, 122, 0.05) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 1,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Sharp Cursor Dot */}
      <motion.div
        animate={{
          width: isHovering ? '60px' : '12px',
          height: isHovering ? '60px' : '12px',
          backgroundColor: isHovering ? 'rgba(230, 194, 122, 0.1)' : 'var(--accent)',
          border: isHovering ? '1px solid var(--accent)' : 'none',
          boxShadow: isHovering ? '0 0 20px rgba(230, 194, 122, 0.5)' : 'none',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9999,
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
}
