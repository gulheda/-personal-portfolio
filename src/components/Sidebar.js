import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaLightbulb, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

// Mobilde hiç render etme
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

const Sidebar = () => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const t = translations[language];
  const [isExpanded, setIsExpanded] = useState(false);

  if (isMobile) return null;

  const iconBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "72px",
    height: "72px",
    borderRadius: "20px",
    background: "transparent",
    border: "2px solid #ffd70033",
    fontSize: "3.2rem",
    color: "#ffb366",
    opacity: 0.88,
    cursor: "pointer",
    boxShadow: "0 0 18px 0 rgba(255, 215, 0, 0.08)",
    transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
    "@media (max-width: 768px)": {
      width: "60px",
      height: "60px",
      fontSize: "2.8rem"
    },
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0 0 48px 16px #ffb36688, 0 0 0 8px #ffb36633",
      border: "2.5px solid #ffb366",
      animation: "glowAnim 1.2s infinite alternate"
    },
    "&:active": {
      transform: "scale(0.95)",
      background: "rgba(255, 179, 102, 0.2)",
      boxShadow: "0 0 64px 24px #ffb366cc, 0 0 0 12px #ffb36644",
      border: "2.5px solid #ffb366",
      animation: "clickGlow 0.5s ease-out"
    }
  };

  const activeBoxStyle = {
    background: "rgba(255, 179, 102, 0.15)",
    color: "#ffb366",
    opacity: 1,
    transform: "scale(1.18)",
    boxShadow: "0 0 48px 16px #ffb36688, 0 0 0 8px #ffb36633",
    border: "2.5px solid #ffb366",
    animation: "glowAnim 1.2s infinite alternate"
  };

  const sidebarStyle = {
    width: isExpanded ? "280px" : "140px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    background: "transparent",
    backdropFilter: "blur(10px)",
    borderRight: "1px solid rgba(255, 165, 0, 0.05)",
    boxShadow: "2px 0 18px 0 rgba(13,27,60,0.13)",
    padding: "35px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "35px",
    zIndex: 1000,
    overflowY: "auto",
    overflowX: "hidden",
    transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
    "@media (max-width: 768px)": {
      display: "none"
    }
  };

  const logoStyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    color: "#ffb366",
    textAlign: "center",
    marginBottom: "30px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    textShadow: "0 0 18px #ffd70055, 0 2px 8px #fff2",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    padding: "15px 20px",
    borderRadius: "16px",
    border: "2px solid #ffb36633",
    background: "rgba(255, 179, 102, 0.1)",
    position: "relative",
    "&:hover": {
      transform: "scale(1.1)",
      textShadow: "0 0 24px #ffd70088, 0 2px 12px #fff3",
      border: "2.5px solid #ffb366",
      background: "rgba(255, 179, 102, 0.15)",
      boxShadow: "0 0 20px rgba(255, 179, 102, 0.3)",
      animation: "glowAnim 1.2s infinite alternate"
    },
    "&::after": {
      content: '"Menüyü Aç"',
      position: "absolute",
      bottom: "-30px",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "0.9rem",
      color: "#ffb366",
      opacity: 0,
      transition: "opacity 0.3s ease",
      whiteSpace: "nowrap",
      textShadow: "none"
    },
    "&:hover::after": {
      opacity: 1
    }
  };

  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: "100%",
    padding: "0 25px",
    "@media (max-width: 768px)": {
      gap: "30px",
      padding: "0 15px"
    }
  };

  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    textDecoration: "none",
    color: "#ffb366",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    padding: "8px 12px",
    borderRadius: "16px",
    "&:hover": {
      background: "rgba(255, 179, 102, 0.1)",
      transform: "translateX(5px)"
    }
  };

  const navTextStyle = {
    fontSize: "1.3rem",
    fontWeight: 500,
    opacity: isExpanded ? 1 : 0,
    transition: "opacity 0.3s cubic-bezier(.4,0,.2,1)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "@media (max-width: 768px)": {
      fontSize: "1.1rem"
    }
  };

  const menuItems = [
    { path: "/", icon: <FaHome size={40} style={{ color: "#ffb366", opacity: 0.85 }} />, text: t.nav.home },
    { path: "/about", icon: <FaUser size={40} style={{ color: "#ffb366", opacity: 0.85 }} />, text: t.nav.about },
    { path: "/skills", icon: <FaTools size={40} style={{ color: "#ffb366", opacity: 0.85 }} />, text: t.nav.skills },
    { path: "/neleryapabilirim", icon: <FaLightbulb size={40} style={{ color: "#ffb366", opacity: 0.85 }} />, text: t.nav.whatICan },
    { path: "/portfolio", icon: <FaFolderOpen size={40} style={{ color: "#ffb366", opacity: 0.85 }} />, text: t.nav.portfolio },
    { path: "/contact", icon: <FaEnvelope size={40} style={{ color: "#ffb366", opacity: 0.85 }} />, text: t.nav.contact }
  ];

  return (
    <motion.div style={sidebarStyle}>
      <motion.div
        style={logoStyle}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Menüyü Aç/Kapat"
      >
        G
      </motion.div>

      <style>{`
        @keyframes glowAnim {
          0% { 
            box-shadow: 0 0 48px 16px #ffb36688, 0 0 0 8px #ffb36633;
            text-shadow: 0 0 24px #ffd70055, 0 2px 8px #fff2;
          }
          100% { 
            box-shadow: 0 0 64px 24px #ffb366cc, 0 0 0 12px #ffb36644;
            text-shadow: 0 0 32px #ffd70088, 0 2px 12px #fff3;
          }
        }

        @keyframes clickGlow {
          0% {
            box-shadow: 0 0 0 0 #ffb36644;
            background: rgba(255, 179, 102, 0.1);
          }
          50% {
            box-shadow: 0 0 64px 24px #ffb366cc;
            background: rgba(255, 179, 102, 0.3);
          }
          100% {
            box-shadow: 0 0 48px 16px #ffb36688;
            background: rgba(255, 179, 102, 0.2);
          }
        }
      `}</style>

      <nav style={navStyle}>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={({ isActive }) => ({
              ...navItemStyle,
              color: isActive ? "#ffb366" : "#fff"
            })}
          >
            <motion.div 
              style={({ isActive }) => ({
                ...iconBoxStyle,
                ...(isActive ? activeBoxStyle : {})
              })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ 
                scale: 0.95,
                boxShadow: "0 0 64px 24px #ffb366cc",
                background: "rgba(255, 179, 102, 0.3)"
              }}
            >
              {item.icon}
            </motion.div>
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  style={navTextStyle}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.text}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
