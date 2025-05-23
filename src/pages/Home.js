import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import "../styles/Home.css";
import MobileNavBar from '../components/MobileNavBar';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

const Home = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          minHeight: '100vh',
          width: '100vw',
          background: '#181f2a',
          padding: '18px 0 64px 0',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            width: '100%',
            padding: '0 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#ffa500',
              margin: '16px 0 6px 0',
              textAlign: 'center',
              letterSpacing: '0.2px',
            }}
          >
            {`${t('home.greeting')} ${t('home.name')}`}
          </motion.h1>
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1.1rem',
              color: '#ffbe88',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: 4,
            }}
          >
            {t('home.title')}
          </motion.span>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: '1rem',
              color: '#fff',
              textAlign: 'center',
              lineHeight: 1.5,
              marginBottom: 12,
              padding: '0 8px',
            }}
          >
            {t('home.description')}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              width: '100%',
              maxWidth: 320,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/portfolio')}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '1rem',
                borderRadius: 10,
                border: 'none',
                background: 'linear-gradient(45deg, #ff9f33 0%, #ffb366 100%)',
                color: '#181818',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(255, 159, 51, 0.2)',
              }}
            >
              {`> ${t('nav.portfolio')}`}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/about')}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '1rem',
                borderRadius: 10,
                border: '2px solid #ffb366',
                background: 'transparent',
                color: '#ffb366',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(255, 159, 51, 0.1)',
              }}
            >
              {`> ${t('nav.about')}`}
            </motion.button>
          </motion.div>
        </motion.div>
        <MobileNavBar />
      </motion.div>
    );
  }

  // MASAÜSTÜ İÇİN ESKİ TASARIM (HİÇBİR ŞEY DEĞİŞMEYECEK)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-container"
      key={language}
    >
      {/* ARKA PLAN VİDEOSU */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'center center',
          transform: 'translateX(-5%)',
          transformOrigin: 'center center',
          zIndex: 0
        }}
      >
        <source src="/1.mp4" type="video/mp4" />
      </video>
      {/* İÇERİK BLOĞU */}
      <div
        className="home-content-flex"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(calc(-50% - 80px), -50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '900px',
          padding: '0 1rem',
          gap: '70px',
        }}
      >
        <motion.h1
          className="home-main-title-fixed glow-title"
          style={{
            fontSize: '4rem',
            fontWeight: 800,
            backgroundImage: 'linear-gradient(45deg, #ff9f33 0%, #ffb366 50%, #ffd699 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'none',
            marginBottom: '-10px',
          }}
        >
          {`${t('home.greeting')} ${t('home.name')}`}
        </motion.h1>
        <motion.span
          style={{
            fontSize: '2rem',
            color: '#ffbe88',
            fontWeight: 600,
            marginTop: '-10px',
            marginBottom: '0',
            marginLeft: '-10px',
          }}
        >
          {t('home.title')}
        </motion.span>
        <div
          style={{
            marginTop: '340px',
            width: '100%',
            maxWidth: '900px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          <motion.div
            style={{
              fontSize: '1.4rem',
              color: '#fff',
              width: '100%',
              lineHeight: 1.6,
            }}
          >
            {t('home.description')}
          </motion.div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 0 24px 0 #ffb36688' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/portfolio')}
              style={{
                border: '2px solid #ffb366',
                color: '#ffb366',
                background: 'transparent',
                fontWeight: 600,
                fontSize: '1.4rem',
                borderRadius: '12px',
                padding: '12px 32px',
                transition: 'all 0.22s cubic-bezier(.4,0,.2,1)',
              }}
            >
              {`> ${t('nav.portfolio')}`}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 0 24px 0 #ffb36688' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/about')}
              style={{
                border: '2px solid #ffb366',
                color: '#ffb366',
                background: 'transparent',
                fontWeight: 600,
                fontSize: '1.4rem',
                borderRadius: '12px',
                padding: '12px 32px',
                transition: 'all 0.22s cubic-bezier(.4,0,.2,1)',
              }}
            >
              {`> ${t('nav.about')}`}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;








