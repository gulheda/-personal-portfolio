import React, { useState, useEffect } from "react";
import { FaCode, FaMicrochip, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const RightBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rightBarStyle = {
    width: isMobile ? "70px" : "110px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    right: "0",
    top: "0",
    bottom: "0",
    zIndex: 1002,
    paddingTop: isMobile ? "15px" : "35px",
    background: "transparent",
    borderLeft: "1px solid rgba(255, 165, 0, 0.05)",
    boxShadow: "2px 0 18px 0 rgba(13,27,60,0.13)",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "none",
    msOverflowStyle: "none"
  };

  const profileContainerStyle = {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: isMobile ? "15px" : "35px",
    minHeight: isMobile ? "48px" : "90px"
  };

  const profileImageStyle = {
    width: isMobile ? "48px" : "90px",
    height: isMobile ? "48px" : "90px",
    borderRadius: "50%",
    border: "2px solid #ffa500",
    objectFit: "cover",
    boxShadow: "0 0 15px rgba(255, 165, 0, 0.2)",
    background: "#222",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
    display: "block",
    position: "relative",
    zIndex: 2
  };

  const iconBoxStyle = {
    width: isMobile ? "48px" : "80px",
    height: isMobile ? "48px" : "80px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(20, 20, 30, 0.55)",
    border: "2px solid #ffd70033",
    marginBottom: "20px",
    cursor: "pointer",
    transition: "all 0.22s cubic-bezier(.4,0,.2,1)"
  };

  const iconStyle = {
    fontSize: isMobile ? "1.5rem" : "2.5rem",
    color: "#ffb366",
    opacity: 0.88
  };

  const socialBoxStyle = {
    ...iconBoxStyle,
    border: "2px solid #fff7b2",
    color: "#fff7b2",
    marginBottom: "12px",
    marginTop: 0
  };

  const socialIconStyle = {
    fontSize: isMobile ? "1.2rem" : "2rem",
    color: "#ffb366"
  };

  return (
    <div style={rightBarStyle}>
      <div style={profileContainerStyle}>
        <motion.img
          src="/profil.jpg"
          alt="Profile"
          style={profileImageStyle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.15,
            border: "2px solid #ffd700",
            boxShadow: "0 0 30px rgba(255, 165, 0, 0.4), 0 0 15px rgba(255, 215, 0, 0.3)",
            filter: "brightness(1.1)",
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{
            scale: 1.25,
            border: "3px solid #ffd700",
            boxShadow: `
              0 0 60px rgba(255, 165, 0, 0.7),
              0 0 40px rgba(255, 215, 0, 0.5),
              0 0 100px rgba(255, 165, 0, 0.4),
              0 0 150px rgba(255, 215, 0, 0.3)
            `,
            filter: "brightness(1.2) contrast(1.1)",
            transition: { 
              duration: 0.3,
              ease: "easeOut",
              boxShadow: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "-100%",
            left: "-100%",
            width: "300%",
            height: "300%",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
            background: "radial-gradient(circle at center, rgba(255,215,0,0.15) 0%, transparent 70%)",
            opacity: 0
          }}
          whileHover={{
            opacity: 0.8,
            scale: 1.2,
            background: "radial-gradient(circle at center, rgba(255,215,0,0.2) 0%, rgba(255,165,0,0.15) 30%, transparent 70%)"
          }}
          whileTap={{
            opacity: 1,
            scale: 1.5,
            background: "radial-gradient(circle at center, rgba(255,215,0,0.25) 0%, rgba(255,165,0,0.2) 30%, rgba(255,165,0,0.1) 50%, transparent 75%)",
            transition: {
              duration: 0.4,
              ease: "easeOut"
            }
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none",
            mixBlendMode: "screen"
          }}
          animate={{
            background: [
              "radial-gradient(circle at center, rgba(255,215,0,0.1) 0%, transparent 60%)",
              "radial-gradient(circle at center, rgba(255,165,0,0.15) 0%, transparent 65%)",
              "radial-gradient(circle at center, rgba(255,215,0,0.1) 0%, transparent 60%)"
            ],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <motion.div
          style={iconBoxStyle}
          whileHover={{ scale: 1.08, background: "rgba(255, 215, 0, 0.1)" }}
        >
          <FaCode style={iconStyle} />
        </motion.div>
        <motion.div
          style={iconBoxStyle}
          whileHover={{ scale: 1.08, background: "rgba(255, 215, 0, 0.1)" }}
        >
          <FaMicrochip style={iconStyle} />
        </motion.div>
        <motion.div
          style={iconBoxStyle}
          whileHover={{ scale: 1.08, background: "rgba(255, 215, 0, 0.1)" }}
        >
          <GiDeliveryDrone style={iconStyle} />
        </motion.div>
      </div>

      <div style={{ marginTop: "18px" }}>
        <motion.a
          href="https://twitter.com/gulhedadev"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBoxStyle}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="Twitter"
        >
          <FaTwitter style={socialIconStyle} />
        </motion.a>
        <motion.a
          href="https://github.com/gulheda"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBoxStyle}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="GitHub"
        >
          <FaGithub style={socialIconStyle} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/rosehkzlhn/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialBoxStyle}
          whileHover={{ scale: 1.13, boxShadow: "0 0 40px 0 #ffd70099, 0 0 0 6px #222a", background: "rgba(20, 20, 30, 0.85)", color: "#ffa500" }}
          title="Instagram"
        >
          <FaInstagram style={socialIconStyle} />
        </motion.a>
      </div>
    </div>
  );
};

export default RightBar;