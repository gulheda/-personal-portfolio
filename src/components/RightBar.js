import React, { useState, useEffect } from "react";
import { FaCode, FaMicrochip, FaSatellite, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const RightBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rightBarStyle = {
    width: isMobile ? "56px" : "90px",
    minHeight: isMobile ? "auto" : "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 1002,
    paddingTop: isMobile ? "10px" : "30px",
    background: "rgba(20, 20, 30, 0.32)",
    backdropFilter: "blur(14px)",
    borderLeft: "2px solid rgba(255, 215, 0, 0.13)",
    boxShadow: "-2px 0 18px 0 rgba(13,27,60,0.13)"
  };

  const profileImageStyle = {
    width: isMobile ? "44px" : "96px",
    height: isMobile ? "44px" : "96px",
    borderRadius: "50%",
    border: "3px solid #ffa500",
    marginBottom: isMobile ? "10px" : "25px",
    objectFit: "cover",
    boxShadow: "0 0 20px rgba(255, 165, 0, 0.3)",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#222",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)"
  };

  const iconBoxStyle = {
    border: "2px solid #ffd70033",
    borderRadius: "13px",
    width: isMobile ? "36px" : "64px",
    height: isMobile ? "36px" : "64px",
    marginBottom: isMobile ? "10px" : "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: isMobile ? "1.2rem" : "2.7rem",
    color: "#ffd700",
    background: "rgba(20, 20, 30, 0.55)",
    opacity: 0.88,
    cursor: "pointer",
    boxShadow: "0 0 18px 0 rgba(255, 215, 0, 0.08)",
    transition: "all 0.22s cubic-bezier(.4,0,.2,1)"
  };

  const iconBoxHover = {
    boxShadow: "0 0 32px 0 rgba(255, 200, 80, 0.25)",
    background: "rgba(20, 20, 30, 0.85)",
    color: "#ffa500",
    transform: "scale(1.13)"
  };

  const socialStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: isMobile ? "8px" : "22px",
    marginTop: isMobile ? "10px" : "48px"
  };

  const socialIconBox = {
    ...iconBoxStyle,
    border: "2px solid #fff7b2",
    color: "#fff7b2",
    fontSize: isMobile ? "1rem" : "2.1rem",
    marginBottom: 0,
    marginTop: 0
  };

  return (
    <div style={rightBarStyle}>
      <motion.img 
        src="/profil.jpg" 
        alt="Profil" 
        style={profileImageStyle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
      />
      <div>
        <motion.div
          style={iconBoxStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="Kod"
        >
          <FaCode />
        </motion.div>
        <motion.div
          style={iconBoxStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="AI"
        >
          <FaMicrochip />
        </motion.div>
        <motion.div
          style={iconBoxStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="Drone"
        >
          <FaSatellite />
        </motion.div>
      </div>
      <div style={socialStyle}>
        <motion.a
          href="https://twitter.com/gulhedadev"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconBox}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="Twitter"
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://github.com/gulheda"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconBox}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="GitHub"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/rosehkzlhn/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconBox}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="Instagram"
        >
          <FaInstagram />
        </motion.a>
      </div>
    </div>
  );
};

export default RightBar;