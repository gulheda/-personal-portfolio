import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaSass, FaRegImages, FaSearch, FaLightbulb, FaBrain, FaPython, FaMicrochip, FaCode, FaCube } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiJest, SiNextdotjs, SiGraphql, SiAdobephotoshop, SiTailwindcss, SiRos } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import "../styles/Skills.css";

const Skills = () => {
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
    background: "linear-gradient(90deg, #ffa500 10%, #fff 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 32px rgba(255, 165, 0, 0.18), 0 2px 8px #fff2",
    filter: "blur(0.2px)"
  };

  const sectionStyle = {
    background: "rgba(13, 27, 42, 0.45)",
    backdropFilter: "blur(16px)",
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
    background: "linear-gradient(90deg, #ffd700 10%, #fff 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 16px rgba(255, 215, 0, 0.13), 0 1px 4px #fff2",
    filter: "blur(0.2px)"
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

  const extraSkills = [
    { name: "Redux", icon: <SiRedux />, level: 75 },
    { name: "GraphQL", icon: <SiGraphql />, level: 65 },
    { name: "Jest", icon: <SiJest />, level: 60 },
    { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
    { name: "Sass", icon: <FaSass />, level: 70 },
    { name: "Photoshop", icon: <SiAdobephotoshop />, level: 60 },
    { name: "Görsel Tasarım", icon: <FaRegImages />, level: 65 }
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

  return (
    <div style={containerStyle}>
      <motion.h1 style={titleStyle} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
        Yeteneklerim
      </motion.h1>

      <div style={sectionStyle}>
        <motion.h2 style={sectionTitleStyle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
          <span style={{ color: "#ffd700" }}>✦</span>
          Teknik Yetenekler
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
        <motion.h2 style={sectionTitleStyle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}>
          <span style={{ color: "#ffd700" }}>✦</span>
          Ekstra Yetenekler
        </motion.h2>
        <div style={skillsGridStyle} className="skills-grid">
          {extraSkills.map((skill, index) => (
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
                <div style={progressBarStyle(skill.level)} />
              </div>
              <div style={skillLevelStyle}>{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <motion.h2 style={sectionTitleStyle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
          <span style={{ color: "#ffd700" }}>✦</span>
          Araştırma & Analitik
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
          Yumuşak Beceriler
        </motion.h2>
        <div style={skillsGridStyle} className="skills-grid">
          {[
            "Problem Çözme",
            "Takım Çalışması",
            "İletişim",
            "Zaman Yönetimi",
            "Sürekli Öğrenme",
            "Adaptasyon"
          ].map((skill, index) => (
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
              <span style={{ fontSize: "1.2rem", color: "#fff", fontWeight: "500" }}>{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 