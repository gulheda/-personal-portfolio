import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaBirthdayCake, FaMapMarkerAlt, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import MobileNavBar from '../components/MobileNavBar';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const { t, language } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Helper function to safely get translation objects
  const getTranslationItems = (key) => {
    try {
      const items = t(key, { returnObjects: true });
      return Array.isArray(items) ? items : [];
    } catch (error) {
      console.error(`Error getting translation for ${key}:`, error);
      return [];
    }
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#fff"
  };

  const titleStyle = {
    color: "#ffa500",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    textAlign: "center"
  };

  const sectionStyle = {
    background: "rgba(10, 10, 10, 0.35)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "30px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  };

  const sectionTitleStyle = {
    color: "#ffa500",
    fontSize: "1.5rem",
    marginBottom: "20px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    display: "flex",
    alignItems: "center",
    gap: "10px"
  };

  const textStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "15px"
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "rgba(255, 255, 255, 0.9)"
  };

  const bulletStyle = {
    color: "#ffa500",
    marginRight: "10px",
    fontSize: "1.2em"
  };

  const subtitleStyle = {
    color: "#ffa500",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    textAlign: "center"
  };

  const descriptionStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "20px",
    textAlign: "center"
  };

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
              fontSize: '2.5rem',
              marginBottom: '30px',
              fontFamily: 'Montserrat, Arial, sans-serif',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
              {t('about.title')}
            </h1>
            <div style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              {t('about.description')}
            </div>
          </div>
          <div style={{ background: '#23232b', borderRadius: 10, padding: '10px 8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h2 style={{ color: '#ffa500', fontSize: 15, marginBottom: 8, fontWeight: 700 }}>{t('about.personalInfo.title')}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {getTranslationItems('about.personalInfo.items').map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {item.icon}
                  <span style={{ color: '#fff', fontSize: 12 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#23232b', borderRadius: 10, padding: '10px 8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h2 style={{ color: '#ffa500', fontSize: 15, marginBottom: 8, fontWeight: 700 }}>{t('about.education.title')}</h2>
            <div style={{ color: '#fff', fontSize: 12, lineHeight: 1.4 }}>{t('about.education.description')}</div>
          </div>
          <div style={{ background: '#23232b', borderRadius: 10, padding: '10px 8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h2 style={{ color: '#ffa500', fontSize: 15, marginBottom: 8, fontWeight: 700 }}>{t('about.approach.title')}</h2>
            <div style={{ color: '#fff', fontSize: 12, lineHeight: 1.4 }}>{t('about.approach.description')}</div>
          </div>
          <div style={{ background: '#23232b', borderRadius: 10, padding: '10px 8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h2 style={{ color: '#ffa500', fontSize: 15, marginBottom: 8, fontWeight: 700 }}>{t('about.interests.title')}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {getTranslationItems('about.interests.items').map((interest, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {interest.icon}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ color: '#ffa500', fontSize: 12, fontWeight: 600 }}>{interest.title}</span>
                    <span style={{ color: '#fff', fontSize: 10, opacity: 0.8 }}>{interest.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <MobileNavBar />
      </div>
    );
  }

  // PC versiyonu aynen korundu
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{t('about.title')}</h1>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          {t('about.intro')}
        </h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginBottom: "25px",
          background: "rgba(255, 255, 255, 0.08)",
          padding: "18px 24px",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaUser style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>{t('contact.name')}:</span>
            <span style={{ color: "#fff" }}>Gülheda Kızılhan</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaEnvelope style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>{t('contact.email')}:</span>
            <span style={{ color: "#fff" }}>kizilhangulheda@gmail.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaBirthdayCake style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>{t('about.age')}:</span>
            <span style={{ color: "#fff" }}>21</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaMapMarkerAlt style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>{t('about.location')}:</span>
            <span style={{ color: "#fff" }}>Denizli</span>
          </div>
        </div>
        <p style={textStyle}>
          {t('about.description')}
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          {t('about.education')}
        </h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            {t('home.title')}, Balıkesir University
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          Yaklaşımım
        </h2>
        <p style={textStyle}>
          Benim için yazılım sadece kod satırlarından ibaret değil. Bir problemi çözmekten çok, onu doğru şekilde anlamayı ve sade bir yaklaşımla ele almayı önemsiyorum. Karmaşık şeyleri basitleştirmek, görselleştirmek ve işe yarar hâle getirmek benim tarzım. Yapay zekâ ve simülasyon sistemlerine olan ilgim, düşüncenin işleyişini teknolojiyle ifade etme isteğimden geliyor. Hazır çözümler değil, anlamlı süreçler ilgimi çeker.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          İlgi Alanlarım
        </h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            Yapay Zekâ (AI): Karar verme sistemleri, öğrenme algoritmaları ve veri odaklı çözümler üzerine çalışmayı seviyorum.
          </li>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            Simülasyon Sistemleri: Gerçek dünyayı sanal ortama taşıyıp test edebilmek; hem analitik hem yaratıcı düşünmeyi gerektiriyor ve bu denge bana ilham veriyor.
          </li>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            Otonom Sistemler: Özellikle İHA simülasyonlarında; kontrol, görev planlama ve ortam algısı gibi konularla ilgileniyorum.
          </li>
        </ul>
      </div>

      <motion.h2 style={subtitleStyle}>
        {t('home.title')}
      </motion.h2>
      <p style={descriptionStyle}>
        {t('home.description')}
      </p>
    </div>
  );
};

export default About; 