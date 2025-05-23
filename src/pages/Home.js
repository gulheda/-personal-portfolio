import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import "../styles/Home.css";

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
    // SADECE MOBİL İÇİN ÖZEL TASARIM
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#181818',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '32px 0 0 0',
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.7
          }}
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
        <div style={{
          zIndex: 2,
          width: '100%',
          maxWidth: 420,
          margin: '0 auto',
          padding: '0 10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
        }}>
          <h1 style={{
            fontSize: '1.3rem',
            fontWeight: 800,
            color: '#ffb366',
            margin: '0 0 2px 0',
            textAlign: 'center',
            letterSpacing: '0.5px',
            textShadow: '0 2px 8px #0007'
          }}>{`${t('home.greeting')} ${t('home.name')}`}</h1>
          <span style={{
            fontSize: '1.05rem',
            color: '#ffbe88',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '0',
          }}>{t('home.title')}</span>
          <div style={{
            fontSize: '0.95rem',
            color: '#fff',
            textAlign: 'center',
            margin: '12px 0 0 0',
            lineHeight: 1.5,
            textShadow: '0 1px 8px #0006',
          }}>{t('home.description')}</div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={() => navigate('/portfolio')}
              style={{
                border: '2px solid #ffb366',
                color: '#ffb366',
                background: 'transparent',
                fontWeight: 600,
                fontSize: '0.95rem',
                borderRadius: '8px',
                padding: '8px 18px',
                minWidth: '100px',
                transition: 'all 0.22s cubic-bezier(.4,0,.2,1)',
              }}
            >
              {`> ${t('nav.portfolio')}`}
            </button>
            <button
              onClick={() => navigate('/about')}
              style={{
                border: '2px solid #ffb366',
                color: '#ffb366',
                background: 'transparent',
                fontWeight: 600,
                fontSize: '0.95rem',
                borderRadius: '8px',
                padding: '8px 18px',
                minWidth: '100px',
                transition: 'all 0.22s cubic-bezier(.4,0,.2,1)',
              }}
            >
              {`> ${t('nav.about')}`}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // MASAÜSTÜ İÇİN MEVCUT TASARIM
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








