import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

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

  const pageStyle = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative",
    zIndex: 10,
    background: "rgba(10, 10, 10, 0.25)",
    backdropFilter: "blur(10px)"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{t.about.title}</h1>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          {t.about.intro}
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
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>{t.contact.name}:</span>
            <span style={{ color: "#fff" }}>Gülheda Kızılhan</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaEnvelope style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>{t.contact.email}:</span>
            <span style={{ color: "#fff" }}>kizilhangulheda@gmail.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaBirthdayCake style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>{t.about.age}:</span>
            <span style={{ color: "#fff" }}>21</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaMapMarkerAlt style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>{t.about.location}:</span>
            <span style={{ color: "#fff" }}>Denizli</span>
          </div>
        </div>
        <p style={textStyle}>
          {t.about.description}
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          {t.about.education}
        </h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            {t.home.title}, Balıkesir University
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
        {t.home.title}
      </motion.h2>
      <p style={descriptionStyle}>
        {t.home.description}
      </p>
    </div>
  );
};

export default About; 