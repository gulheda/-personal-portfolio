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

  return (
    <div style={containerStyle}>
      <motion.h1 style={titleStyle} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
        {t.skills.title}
      </motion.h1>

      <div style={sectionStyle}>
        <motion.h2 style={sectionTitleStyle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
          <span style={{ color: "#ffd700" }}>✦</span>
          {t.skills.programming}
        </motion.h2>
        <div style={skillsGridStyle} className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              style={skillCardStyle}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #ffd70033" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={skillHeaderStyle}>
                <span style={iconStyle}>{skill.icon}</span>
                <span style={skillNameStyle}>{skill.name}</span>
              </div>
              <div style={progressBarContainerStyle}>
                {skill.animated ? (
                  <motion.div
                    style={progressBarStyle(reactPercent)}
                    initial={{ width: 0 }}
                    animate={{ width: `${reactPercent}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                ) : (
                  <div style={progressBarStyle(skill.level)} />
                )}
              </div>
              <div style={skillLevelStyle}>
                {skill.animated ? `${reactPercent}%` : `${skill.level}%`}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <motion.h2 style={sectionTitleStyle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
          <span style={{ color: "#ffd700" }}>✦</span>
          {t.skills.ai}
        </motion.h2>
        <div style={skillsGridStyle} className="skills-grid">
          {researchSkills.map((skill, index) => (
            <motion.div
              key={index}
              style={{
                ...skillCardStyle,
                textAlign: "center",
                padding: "28px"
              }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #ffd70033" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span style={{ fontSize: "2.1rem", color: "#ffd700", display: "block", marginBottom: 10 }}>{skill.icon}</span>
              <span style={{ fontSize: "1.2rem", color: "#fff", fontWeight: "500" }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <motion.h2 style={sectionTitleStyle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}>
          <span style={{ color: "#ffd700" }}>✦</span>
          {t.skills.softSkills}
        </motion.h2>
        <div style={skillsGridStyle} className="skills-grid">
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
              style={skillCardStyle}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 #ffd70033" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={skillHeaderStyle}>
                <span style={skillNameStyle}>{skill.name}</span>
              </div>
              <div style={progressBarContainerStyle}>
                <div style={progressBarStyle(skill.level)} />
              </div>
              <div style={skillLevelStyle}>{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 