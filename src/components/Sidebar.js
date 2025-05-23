import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaLightbulb, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Sidebar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const iconBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "52px",
    height: "52px",
    borderRadius: "15px",
    background: "transparent",
    border: "2px solid #ffd70033",
    fontSize: "2.2rem",
    color: "#ffb366",
    opacity: 0.88,
    cursor: "pointer",
    boxShadow: "0 0 18px 0 rgba(255, 215, 0, 0.08)",
    transition: "all 0.22s cubic-bezier(.4,0,.2,1)"
  };

  const activeBoxStyle = {
    background: "transparent",
    color: "#ffb366",
    opacity: 1,
    transform: "scale(1.18)",
    boxShadow: "0 0 32px 8px #ffb36688, 0 0 0 4px #ffb36633",
    border: "2.5px solid #ffb366",
    animation: "glowAnim 1.2s infinite alternate"
  };

  return (
    <div style={{
      width: "110px",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
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
      overflowX: "hidden"
    }}>
      <div style={{
        fontSize: "2.4rem",
        fontWeight: "bold",
        color: "#ffb366",
        textAlign: "center",
        marginBottom: "30px",
        fontFamily: 'Montserrat, Arial, sans-serif',
        textShadow: "0 0 18px #ffd70055, 0 2px 8px #fff2"
      }}>G</div>
      <style>{`
        @keyframes glowAnim {
          0% { box-shadow: 0 0 32px 8px #ffb36688, 0 0 0 4px #ffb36633; }
          100% { box-shadow: 0 0 48px 16px #ffb366cc, 0 0 0 8px #ffb36644; }
        }
      `}</style>
      <nav style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <NavLink to="/" style={({ isActive }) => isActive ? { ...iconBoxStyle, ...activeBoxStyle } : iconBoxStyle} title={t.nav.home}><FaHome style={{ color: "#ffb366" }} /></NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? { ...iconBoxStyle, ...activeBoxStyle } : iconBoxStyle} title={t.nav.about}><FaUser style={{ color: "#ffb366" }} /></NavLink>
        <NavLink to="/skills" style={({ isActive }) => isActive ? { ...iconBoxStyle, ...activeBoxStyle } : iconBoxStyle} title={t.nav.skills}><FaTools style={{ color: "#ffb366" }} /></NavLink>
        <NavLink to="/neleryapabilirim" style={({ isActive }) => isActive ? { ...iconBoxStyle, ...activeBoxStyle } : iconBoxStyle} title={t.nav.whatICan}><FaLightbulb style={{ color: "#ffb366" }} /></NavLink>
        <NavLink to="/portfolio" style={({ isActive }) => isActive ? { ...iconBoxStyle, ...activeBoxStyle } : iconBoxStyle} title={t.nav.portfolio}><FaFolderOpen style={{ color: "#ffb366" }} /></NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? { ...iconBoxStyle, ...activeBoxStyle } : iconBoxStyle} title={t.nav.contact}><FaEnvelope style={{ color: "#ffb366" }} /></NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;