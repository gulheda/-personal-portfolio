import React, { useMemo, useState, useEffect } from "react";
import { FaCode, FaServer, FaMobile, FaTools, FaRobot, FaChartLine, FaPython, FaBrain, FaSearch, FaLightbulb } from "react-icons/fa";
import { SiRos } from "react-icons/si";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import MobileNavBar from '../components/MobileNavBar';
import { useMediaQuery } from 'react-responsive';

const NelerYapabilirim = () => {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    console.log('Current language:', language);
    console.log('Current translations:', t);
    console.log('Current abilities:', t.abilities);
  }, [language, t]);

  const abilities = useMemo(() => {
    console.log('Creating abilities array with:', t);
    return [
      {
        icon: <FaCode />,
        title: t('abilities.aiTitle'),
        description: t('abilities.aiDesc'),
        color: '#FF6B6B'
      },
      {
        icon: <FaServer />,
        title: t('abilities.simulationTitle'),
        description: t('abilities.simulationDesc'),
        color: '#4ECDC4'
      },
      {
        icon: <FaMobile />,
        title: t('abilities.autonomousTitle'),
        description: t('abilities.autonomousDesc'),
        color: '#45B7D1'
      },
      {
        icon: <FaTools />,
        title: t('abilities.uiuxTitle'),
        description: t('abilities.uiuxDesc'),
        color: '#FFD93D'
      }
    ];
  }, [t]);

  if (isMobile) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#181f2a',
        padding: '18px 0 64px 0',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          width: '100%',
          padding: '0 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
        }}>
          <div style={{
            background: '#23232b',
            borderRadius: 10,
            padding: '18px 12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            width: '100%',
            maxWidth: 800,
          }}>
            <h1 style={{
              color: '#ffa500',
              fontSize: 22,
              marginBottom: 12,
              textAlign: 'center',
              fontWeight: 700
            }}>
              {t('abilities.title')}
            </h1>
          </div>

          <div style={{
            background: '#23232b',
            borderRadius: 14,
            padding: '20px 16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              color: '#ffa500',
              fontSize: 20,
              marginBottom: 16,
              textAlign: 'center',
              fontWeight: 700
            }}>
              {t('abilities.aiTitle')}
            </h2>
            <div style={{
              color: '#fff',
              fontSize: 15,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              {t('abilities.aiDesc')}
            </div>
          </div>

          <div style={{
            background: '#23232b',
            borderRadius: 14,
            padding: '20px 16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              color: '#ffa500',
              fontSize: 20,
              marginBottom: 16,
              textAlign: 'center',
              fontWeight: 700
            }}>
              {t('abilities.simulationTitle')}
            </h2>
            <div style={{
              color: '#fff',
              fontSize: 15,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              {t('abilities.simulationDesc')}
            </div>
          </div>

          <div style={{
            background: '#23232b',
            borderRadius: 14,
            padding: '20px 16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              color: '#ffa500',
              fontSize: 20,
              marginBottom: 16,
              textAlign: 'center',
              fontWeight: 700
            }}>
              {t('abilities.autonomousTitle')}
            </h2>
            <div style={{
              color: '#fff',
              fontSize: 15,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              {t('abilities.autonomousDesc')}
            </div>
          </div>

          <div style={{
            background: '#23232b',
            borderRadius: 14,
            padding: '20px 16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              color: '#ffa500',
              fontSize: 20,
              marginBottom: 16,
              textAlign: 'center',
              fontWeight: 700
            }}>
              {t('abilities.uiuxTitle')}
            </h2>
            <div style={{
              color: '#fff',
              fontSize: 15,
              lineHeight: 1.6,
              marginBottom: 20
            }}>
              {t('abilities.uiuxDesc')}
            </div>
          </div>
        </div>
        <MobileNavBar />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      key={language}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat, Inter, Arial, sans-serif'
      }}
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="neler-title"
        key={language}
        style={{
          color: '#ffb366',
          fontWeight: 800,
          fontSize: '2.5rem',
          letterSpacing: '0.01em',
          textShadow: '0 2px 18px #ffb36644, 0 1px 8px #fff2',
          marginBottom: '38px',
          textAlign: 'center',
        }}
      >
        {t('abilities.title')}
      </motion.h1>

      <div className="neler-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: '10px',
      }}>
        {abilities.map((ability, index) => (
          <motion.div
            key={`${language}-${index}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="neler-card"
            style={{
              background: 'rgba(20,20,22,0.28)',
              borderRadius: '18px',
              padding: '32px 22px 28px 22px',
              boxShadow: activeIndex === index
                ? `0 0 32px 8px ${ability.color}55, 0 0 0 4px ${ability.color}33`
                : `0 4px 18px 0 #000a`,
              cursor: 'pointer',
              transition: 'all 0.28s cubic-bezier(.4,0,.2,1)',
              transform: activeIndex === index ? 'scale(1.045)' : 'scale(1)',
              border: activeIndex === index ? `2.5px solid ${ability.color}` : '1.5px solid #23232b',
              outline: activeIndex === index ? `0.5px solid ${ability.color}88` : 'none',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            whileHover={{ y: -7, boxShadow: `0 0 48px 16px ${ability.color}cc, 0 0 0 8px ${ability.color}44`, scale: 1.06 }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#23232b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: ability.color,
                fontSize: '2.2rem',
                boxShadow: `0 0 18px ${ability.color}33`,
                border: `2.5px solid ${ability.color}`,
                marginBottom: '8px',
              }}>
                {ability.icon}
              </div>
              <h3 className="neler-card-title" style={{
                fontSize: '1.25rem',
                color: ability.color,
                fontWeight: 700,
                margin: 0,
                textAlign: 'center',
                letterSpacing: '0.01em',
                textShadow: `0 2px 12px ${ability.color}33`,
              }}>
                {ability.title}
              </h3>
              <p className="neler-card-desc" style={{
                fontSize: '1.05rem',
                color: '#f3f3f3',
                lineHeight: '1.6',
                textAlign: 'center',
                margin: 0,
                fontWeight: 400,
                letterSpacing: '0.01em',
                textShadow: '0 1px 8px #0004',
              }}>
                {ability.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .neler-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  );
};

export default NelerYapabilirim; 



