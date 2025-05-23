import React, { useEffect, useState } from "react";
import { FaRegImages, FaSearch, FaLightbulb, FaBrain, FaPython, FaMicrochip, FaCode, FaCube } from "react-icons/fa";
import { SiRos } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import "../styles/Skills.css";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Animasyonlu sayaç için state
  const [reactPercent, setReactPercent] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 90;
    const duration = 1200; // ms
    const step = 10;
    const increment = (end / (duration / step));
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setReactPercent(end);
        clearInterval(interval);
      } else {
        setReactPercent(Math.round(start));
      }
    }, step);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 2vw",
    color: "#fff"
  };

  const titleStyle = {
    fontSize: "2.7rem",
    fontWeight: "bold",
    marginBottom: "40px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    textAlign: "center",
    color: "#ffa500",
    textShadow: "0 2px 8px rgba(255, 165, 0, 0.3)"
  };

  const sectionStyle = {
    background: "rgba(10, 10, 10, 0.35)",
    backdropFilter: "blur(15px)",
    borderRadius: "22px",
    padding: "30px 2vw",
    marginBottom: "30px",
    border: "1.5px solid rgba(255, 255, 255, 0.10)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)"
  };

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "25px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#ffa500",
    textShadow: "0 2px 8px rgba(255, 165, 0, 0.3)"
  };

  const skillsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "18px",
    marginTop: "20px"
  };

  const skillCardStyle = {
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "18px",
    padding: "22px 10px",
    border: "1.5px solid rgba(255, 255, 255, 0.10)",
    boxShadow: "0 4px 24px 0 rgba(255, 215, 0, 0.08)",
    transition: "transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 0
  };

  const skillHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px"
  };

  const iconStyle = {
    fontSize: "2.3rem",
    color: "#ffd700",
    filter: "drop-shadow(0 0 8px #ffd70055)"
  };

  const skillNameStyle = {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#fff"
  };

  const progressBarContainerStyle = {
    width: "100%",
    height: "10px",
    background: "rgba(255, 255, 255, 0.13)",
    borderRadius: "5px",
    overflow: "hidden",
    marginTop: "8px"
  };

  const progressBarStyle = (percentage) => ({
    width: `${percentage}%`,
    height: "100%",
    background: "linear-gradient(90deg, #ffd700 0%, #ffa500 100%)",
    borderRadius: "5px",
    transition: "width 1s cubic-bezier(.4,0,.2,1)"
  });

  const skillLevelStyle = {
    fontSize: "0.95rem",
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: "10px",
    textAlign: "right"
  };

  const skills = [
    { name: "Python", icon: <FaPython />, level: 55 },
    { name: "C#", icon: <FaCode />, level: 40 },
    { name: "ROS", icon: <SiRos />, level: 50 },
    { name: "ArduPilot", icon: <FaMicrochip />, level: 65 },
    { name: "Gazebo", icon: <FaCube />, level: 60 }
  ];

  const researchSkills = [
    { name: "Araştırma", icon: <FaSearch /> },
    { name: "Analitik Düşünme", icon: <FaBrain /> },
    { name: "Yaratıcılık", icon: <FaLightbulb /> },
    { name: "Problem Çözme", icon: <FaBrain /> }
  ];

  // Responsive media query (ekstra):
  // styles/Skills.css dosyasına şunu ekleyebilirsin:
  // @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }

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

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={isMobile ? {
      minHeight: '100vh',
      width: '100vw',
      background: '#181f2a',
      padding: '18px 0',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    } : containerStyle}>
      <motion.h1 style={isMobile ? { fontSize: 22, marginBottom: 18 } : titleStyle} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
        {t.skills.title}
      </motion.h1>
      <div style={isMobile ? { width: '100%', padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 18 } : { width: '100%', maxWidth: 1100, display: 'flex', flexDirection: 'column', gap: 36, padding: '0 12px' }}>
        <div style={isMobile ? { fontSize: 15, marginBottom: 10, gap: 6 } : sectionTitleStyle}>
          <span style={{ color: "#ffd700" }}>✦</span>
          {t.skills.programming}
        </div>
        <div style={isMobile ? { display: 'flex', flexDirection: 'row', gap: 8, overflowX: 'auto', paddingBottom: 4 } : skillsGridStyle}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              style={isMobile ? { background: 'rgba(20,20,22,0.28)', borderRadius: 10, padding: '12px 8px', minWidth: 110, minHeight: 70, boxShadow: '0 2px 8px 0 #000a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #23232b', marginRight: 4 } : skillCardStyle}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #ffd70033" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={isMobile ? { fontSize: 18, color: '#ffd700', marginBottom: 4 } : skillHeaderStyle}>
                <span style={isMobile ? { fontSize: 18, color: '#ffd700', marginBottom: 4 } : iconStyle}>{skill.icon}</span>
                <span style={isMobile ? { fontSize: 11, color: '#fff', fontWeight: 500 } : skillNameStyle}>{skill.name}</span>
              </div>
              <div style={isMobile ? { width: '100%', padding: '0 6px', display: 'flex', flexDirection: 'row', gap: 8, overflowX: 'auto', paddingBottom: 4 } : progressBarContainerStyle}>
                {skill.animated ? (
                  <motion.div
                    style={isMobile ? { width: '100%', padding: '0 6px', display: 'flex', flexDirection: 'row', gap: 8, overflowX: 'auto', paddingBottom: 4 } : progressBarStyle(reactPercent)}
                    initial={{ width: 0 }}
                    animate={{ width: `${reactPercent}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                ) : (
                  <div style={isMobile ? { width: '100%', padding: '0 6px', display: 'flex', flexDirection: 'row', gap: 8, overflowX: 'auto', paddingBottom: 4 } : progressBarStyle(skill.level)} />
                )}
              </div>
              <div style={isMobile ? { fontSize: 11, color: 'rgba(255, 255, 255, 0.8)', marginTop: 5, textAlign: 'right' } : skillLevelStyle}>
                {skill.animated ? `${reactPercent}%` : `${skill.level}%`}
              </div>
            </motion.div>
          ))}
        </div>
        <div style={isMobile ? { fontSize: 15, marginBottom: 10, gap: 6 } : sectionTitleStyle}>
          <span style={{ color: "#ffd700" }}>✦</span>
          {t.skills.ai}
        </div>
        <div style={isMobile ? { display: 'flex', flexDirection: 'row', gap: 8, overflowX: 'auto', paddingBottom: 4 } : skillsGridStyle}>
          {researchSkills.map((skill, index) => (
            <motion.div
              key={index}
              style={isMobile ? { background: 'rgba(20,20,22,0.28)', borderRadius: 10, padding: '12px 8px', minWidth: 110, minHeight: 70, boxShadow: '0 2px 8px 0 #000a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #23232b', marginRight: 4 } : skillCardStyle}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #ffd70033" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span style={isMobile ? { fontSize: 18, color: '#ffd700', marginBottom: 4 } : iconStyle}>{skill.icon}</span>
              <span style={isMobile ? { fontSize: 11, color: '#fff', fontWeight: 500 } : skillNameStyle}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
        <div style={isMobile ? { fontSize: 15, marginBottom: 10, gap: 6 } : sectionTitleStyle}>
          <span style={{ color: "#ffd700" }}>✦</span>
          {t.skills.softSkills}
        </div>
        <div style={isMobile ? { display: 'flex', flexDirection: 'row', gap: 8, overflowX: 'auto', paddingBottom: 4 } : skillsGridStyle}>
          {[
            { name: t.skills.problemSolving, level: 95 },
            { name: t.skills.teamwork, level: 90 },
            { name: t.skills.communication, level: 85 },
            { name: t.skills.research, level: 90 },
            { name: t.skills.timeManagement, level: 85 },
            { name: t.skills.adaptability, level: 90 }
          ].map((skill, index) => (
            <motion.div
              key={index}
              style={isMobile ? { background: 'rgba(20,20,22,0.28)', borderRadius: 10, padding: '12px 8px', minWidth: 110, minHeight: 70, boxShadow: '0 2px 8px 0 #000a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #23232b', marginRight: 4 } : skillCardStyle}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #ffd70033" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={isMobile ? { fontSize: 11, color: '#fff', fontWeight: 500 } : skillHeaderStyle}>
                <span style={isMobile ? { fontSize: 11, color: '#fff', fontWeight: 500 } : skillNameStyle}>{skill.name}</span>
              </div>
              <div style={isMobile ? { width: '100%', padding: '0 6px', display: 'flex', flexDirection: 'row', gap: 8, overflowX: 'auto', paddingBottom: 4 } : progressBarContainerStyle}>
                <div style={isMobile ? { width: '100%', padding: '0 6px', display: 'flex', flexDirection: 'row', gap: 8, overflowX: 'auto', paddingBottom: 4 } : progressBarStyle(skill.level)} />
              </div>
              <div style={isMobile ? { fontSize: 11, color: 'rgba(255, 255, 255, 0.8)', marginTop: 5, textAlign: 'right' } : skillLevelStyle}>{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 