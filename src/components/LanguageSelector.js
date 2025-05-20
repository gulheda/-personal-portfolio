import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const containerStyle = {
    position: 'fixed',
    left: 0,
    bottom: '20px',
    width: '64px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
    zIndex: 1000,
    background: 'rgba(20, 20, 30, 0.32)',
    backdropFilter: 'blur(14px)',
    padding: '10px 0',
    borderTop: '1px solid rgba(255, 215, 0, 0.13)',
  };

  const buttonStyle = (isSelected) => ({
    padding: '6px',
    background: isSelected 
      ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' 
      : 'rgba(20, 20, 30, 0.75)',
    border: isSelected 
      ? '2px solid #FFD700' 
      : '2px solid rgba(255, 215, 0, 0.3)',
    borderRadius: '10px',
    cursor: 'pointer',
    opacity: isSelected ? 1 : 0.85,
    backdropFilter: 'blur(10px)',
    boxShadow: isSelected 
      ? '0 0 20px rgba(255, 215, 0, 0.3)' 
      : '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    position: 'relative',
    overflow: 'hidden',
  });

  const flagStyle = {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  };

  const buttonVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
    hover: { 
      scale: 1.05,
      boxShadow: '0 0 25px rgba(255, 215, 0, 0.4)',
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { 
      scale: 0.95,
      boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)'
    }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.75 },
    animate: { 
      scale: 2,
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      style={containerStyle}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <AnimatePresence mode="wait">
        <motion.button
          key="tr"
          style={buttonStyle(language === 'tr')}
          onClick={() => changeLanguage('tr')}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          title="Türkçe"
        >
          <img 
            src="/flags/tr.svg" 
            alt="Türkçe" 
            style={flagStyle}
          />
          {language === 'tr' && (
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'rgba(255, 215, 0, 0.2)',
                borderRadius: '10px',
              }}
              variants={rippleVariants}
              initial="initial"
              animate="animate"
            />
          )}
        </motion.button>

        <motion.button
          key="en"
          style={buttonStyle(language === 'en')}
          onClick={() => changeLanguage('en')}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          title="English"
        >
          <img 
            src="/flags/en.svg" 
            alt="English" 
            style={flagStyle}
          />
          {language === 'en' && (
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'rgba(255, 215, 0, 0.2)',
                borderRadius: '10px',
              }}
              variants={rippleVariants}
              initial="initial"
              animate="animate"
            />
          )}
        </motion.button>

        <motion.button
          key="ja"
          style={buttonStyle(language === 'ja')}
          onClick={() => changeLanguage('ja')}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          title="日本語"
        >
          <img 
            src="/flags/jp.svg" 
            alt="日本語" 
            style={flagStyle}
          />
          {language === 'ja' && (
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'rgba(255, 215, 0, 0.2)',
                borderRadius: '10px',
              }}
              variants={rippleVariants}
              initial="initial"
              animate="animate"
            />
          )}
        </motion.button>
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSelector; 