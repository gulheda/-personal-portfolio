import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const containerStyle = {
    width: "100vw",
    minHeight: "100vh",
    color: "#fff",
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0",
    margin: "0"
  };

  const contentStyle = {
    width: "500px",
    minHeight: "600px",
    margin: "0 0 0 96px",
    textAlign: "left",
    padding: "50px 45px",
    background: "rgba(10, 10, 10, 0.25)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 32px 0 rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden"
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    background: "linear-gradient(90deg, #ffa500 10%, #fff 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 32px rgba(255, 165, 0, 0.18), 0 2px 8px #fff2",
    filter: "blur(0.2px)",
    width: "100%"
  };

  const subtitleStyle = {
    fontSize: "1.6rem",
    fontWeight: 700,
    marginBottom: "35px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    background: "linear-gradient(90deg, #ffd700 10%, #fff 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 16px rgba(255, 215, 0, 0.13), 0 1px 4px #fff2",
    filter: "blur(0.2px)",
    width: "100%"
  };

  const descriptionStyle = {
    fontSize: "1.15rem",
    lineHeight: 1.8,
    color: "rgba(255, 255, 255, 0.95)",
    marginBottom: "40px",
    position: "relative",
    background: "rgba(255, 255, 255, 0.03)",
    padding: "25px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(5px)"
  };

  const socialLinksStyle = {
    display: "flex",
    gap: "25px",
    marginTop: "30px",
    width: "100%",
    justifyContent: "center",
    padding: "20px 0 0 0"
  };

  const socialLinkStyle = {
    color: "#ffa500",
    fontSize: "1.8rem",
    transition: "all 0.3s ease",
    opacity: 0.85,
    "&:hover": {
      opacity: 1,
      transform: "translateY(-3px)"
    }
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "15px",
    width: "100%",
    marginBottom: "10px"
  };

  const terminalButtonStyle = {
    flex: 1,
    background: "rgba(35, 39, 46, 0.95)",
    color: "#ffe066",
    padding: "16px 24px",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "1.5px solid rgba(255, 215, 0, 0.3)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "Fira Code, monospace",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    textAlign: "center"
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={contentStyle}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div>
          <h2 style={titleStyle}>
            {t.home.greeting} <br />
            {t.home.name}
          </h2>
          <h3 style={subtitleStyle}>{t.home.title}</h3>
          <p style={descriptionStyle}>{t.home.description}</p>
        </div>
        
        <div style={{ width: "100%" }}>
          <div style={buttonContainerStyle}>
            <Link to="/about" style={{ flex: 1, textDecoration: "none" }}>
              <motion.button
                style={terminalButtonStyle}
                whileHover={{
                  scale: 1.02,
                  border: "1.5px solid rgba(255, 215, 0, 0.5)",
                  background: "rgba(35, 39, 46, 0.98)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {"> "}{t.nav.about}
              </motion.button>
            </Link>
            <Link to="/contact" style={{ flex: 1, textDecoration: "none" }}>
              <motion.button
                style={{
                  ...terminalButtonStyle,
                  border: "1.5px solid rgba(255, 215, 0, 0.4)",
                  background: "rgba(35, 39, 46, 0.98)"
                }}
                whileHover={{
                  scale: 1.02,
                  border: "1.5px solid rgba(255, 215, 0, 0.5)",
                  background: "rgba(35, 39, 46, 0.98)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {"> "}{t.nav.contact}
              </motion.button>
            </Link>
          </div>

          <div style={socialLinksStyle}>
            <motion.a
              href="https://github.com/gulheda"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/g%C3%BClheda-k%C4%B1z%C4%B1lhan-769b29284/"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com/gulhedadev"
              target="_blank"
              rel="noopener noreferrer"
              style={socialLinkStyle}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
