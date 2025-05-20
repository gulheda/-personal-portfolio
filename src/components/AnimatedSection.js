import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, animation = 'fadeIn', delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getAnimationStyle = () => {
    const baseStyle = {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.6s ease ${delay}s`,
    };

    switch (animation) {
      case 'fadeIn':
        return baseStyle;
      case 'slideInLeft':
        return {
          ...baseStyle,
          transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        };
      case 'slideInRight':
        return {
          ...baseStyle,
          transform: inView ? 'translateX(0)' : 'translateX(50px)',
        };
      case 'scaleIn':
        return {
          ...baseStyle,
          transform: inView ? 'scale(1)' : 'scale(0.8)',
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div ref={ref} style={getAnimationStyle()}>
      <div style={{
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(6px)',
        borderRadius: '18px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        padding: '40px 32px',
        color: '#fff',
        maxWidth: '420px',
        margin: 'auto'
      }}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection; 