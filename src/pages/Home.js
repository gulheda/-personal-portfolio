import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const containerStyle = {
    width: "100vw",
    minHeight: "100vh",
    color: "#fff",
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0",
    margin: "0"
  };

  const contentStyle = {
    width: "700px",
    margin: "0 0 0 96px",
    marginTop: "60px",
    textAlign: "left",
    padding: "48px 40px 40px 40px",
    background: "rgba(10, 10, 10, 0.48)",
    backdropFilter: "blur(18px)",
    borderRadius: "24px",
    border: "1.5px solid rgba(255, 255, 255, 0.09)",
    boxShadow: "0 4px 32px 0 rgba(0,0,0,0.38)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  };

  const titleStyle = {
    fontSize: "2.7rem",
    fontWeight: "bold",
    marginBottom: "18px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    background: "linear-gradient(90deg, #ffa500 10%, #fff 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 32px rgba(255, 165, 0, 0.18), 0 2px 8px #fff2",
    filter: "blur(0.2px)"
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "28px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    background: "linear-gradient(90deg, #ffd700 10%, #fff 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 16px rgba(255, 215, 0, 0.13), 0 1px 4px #fff2",
    filter: "blur(0.2px)"
  };

  const descriptionStyle = {
    fontSize: "1.08rem",
    lineHeight: 1.7,
    color: "rgba(255, 255, 255, 0.92)",
    marginBottom: "28px",
    maxWidth: "100%",
    margin: "0 0 28px 0"
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "18px",
    justifyContent: "flex-start",
    marginBottom: "22px",
    marginLeft: "0"
  };

  const terminalButtonStyle = {
    background: "#23272e",
    color: "#ffe066",
    border: "1.5px solid #444",
    borderRadius: "7px",
    fontFamily: "Fira Mono, monospace",
    fontSize: "1.08rem",
    fontWeight: 600,
    padding: "14px 28px",
    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.13)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    letterSpacing: "0.5px",
    transition: "all 0.2s",
    cursor: "pointer"
  };

  const terminalButtonSecondary = {
    ...terminalButtonStyle,
    color: "#fff7b2",
    border: "1.5px solid #ffd700",
    background: "#23272e"
  };

  const socialLinksStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "18px",
    justifyContent: "flex-start",
    marginTop: "10px"
  };

  const socialLinkStyle = {
    color: "#ffa500",
    fontSize: "1.7rem",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          Merhaba,<br />Ben Gülheda
        </motion.h1>
        <motion.h2
          style={subtitleStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          Bilgisayar Mühendisliği 2. Sınıf Öğrencisi
        </motion.h2>
        <p style={descriptionStyle}>
          Yapay zekâ, simülasyon ve otonom sistemlere tutkuyla odaklanıyorum.<br />
          Teknofest'te İHA simülasyonları geliştiriyor, karmaşık problemleri sade ve etkili çözümlere dönüştürüyorum.
        </p>
        <div style={buttonContainerStyle}>
          <Link to="/portfolio" style={terminalButtonStyle}>
            {"> projelerim"}
          </Link>
          <Link to="/contact" style={terminalButtonSecondary}>
            {"> iletişim"}
          </Link>
        </div>
        <div style={socialLinksStyle}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseOver={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.color = "#ffa500";
            }}
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseOver={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.color = "#ffa500";
            }}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseOver={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.color = "#ffa500";
            }}
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
