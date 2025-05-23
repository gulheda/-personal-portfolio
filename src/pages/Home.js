import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import "../styles/Home.css";

const Home = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

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








