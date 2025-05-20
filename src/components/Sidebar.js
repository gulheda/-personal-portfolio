import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaStar } from "react-icons/fa";

const Sidebar = () => {
  const sidebarStyle = {
    width: "64px",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    background: "rgba(20, 20, 30, 0.32)",
    backdropFilter: "blur(14px)",
    borderRight: "2px solid rgba(255, 215, 0, 0.13)",
    boxShadow: "2px 0 18px 0 rgba(13,27,60,0.13)",
    padding: "32px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    zIndex: 1000
  };

  const logoStyle = {
    fontSize: "2.1rem",
    fontWeight: "bold",
    color: "#ffd700",
    textAlign: "center",
    marginBottom: "24px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    textShadow: "0 0 18px #ffd70055, 0 2px 8px #fff2"
  };

  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "28px"
  };

  const iconBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    borderRadius: "13px",
    background: "rgba(20, 20, 30, 0.55)",
    border: "2px solid #ffd70033",
    fontSize: "2rem",
    color: "#ffd700",
    opacity: 0.88,
    cursor: "pointer",
    boxShadow: "0 0 18px 0 rgba(255, 215, 0, 0.08)",
    transition: "all 0.22s cubic-bezier(.4,0,.2,1)"
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>G</div>
      <nav style={navStyle}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...iconBoxStyle,
            background: isActive ? "linear-gradient(90deg, #ffd700 10%, #ffa500 90%)" : "rgba(20, 20, 30, 0.55)",
            color: isActive ? "#fff7b2" : "#ffd700",
            opacity: isActive ? 1 : 0.88,
            transform: isActive ? "scale(1.18)" : "scale(1)",
            boxShadow: isActive ? "0 0 24px 2px #ffd70088" : iconBoxStyle.boxShadow,
            border: isActive ? "2.5px solid #ffd700" : iconBoxStyle.border
          })}
          title="Ana Sayfa"
        >
          <FaHome />
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...iconBoxStyle,
            background: isActive ? "linear-gradient(90deg, #ffd700 10%, #ffa500 90%)" : "rgba(20, 20, 30, 0.55)",
            color: isActive ? "#fff7b2" : "#ffd700",
            opacity: isActive ? 1 : 0.88,
            transform: isActive ? "scale(1.18)" : "scale(1)",
            boxShadow: isActive ? "0 0 24px 2px #ffd70088" : iconBoxStyle.boxShadow,
            border: isActive ? "2.5px solid #ffd700" : iconBoxStyle.border
          })}
          title="Hakkımda"
        >
          <FaUser />
        </NavLink>
        <NavLink
          to="/skills"
          style={({ isActive }) => ({
            ...iconBoxStyle,
            background: isActive ? "linear-gradient(90deg, #ffd700 10%, #ffa500 90%)" : "rgba(20, 20, 30, 0.55)",
            color: isActive ? "#fff7b2" : "#ffd700",
            opacity: isActive ? 1 : 0.88,
            transform: isActive ? "scale(1.18)" : "scale(1)",
            boxShadow: isActive ? "0 0 24px 2px #ffd70088" : iconBoxStyle.boxShadow,
            border: isActive ? "2.5px solid #ffd700" : iconBoxStyle.border
          })}
          title="Yetenekler"
        >
          <FaCode />
        </NavLink>
        <NavLink
          to="/neleryapabilirim"
          style={({ isActive }) => ({
            ...iconBoxStyle,
            background: isActive ? "linear-gradient(90deg, #ffd700 10%, #ffa500 90%)" : "rgba(20, 20, 30, 0.55)",
            color: isActive ? "#fff7b2" : "#ffd700",
            opacity: isActive ? 1 : 0.88,
            transform: isActive ? "scale(1.18)" : "scale(1)",
            boxShadow: isActive ? "0 0 24px 2px #ffd70088" : iconBoxStyle.boxShadow,
            border: isActive ? "2.5px solid #ffd700" : iconBoxStyle.border
          })}
          title="Neler Yapabilirim?"
        >
          <FaStar />
        </NavLink>
        <NavLink
          to="/portfolio"
          style={({ isActive }) => ({
            ...iconBoxStyle,
            background: isActive ? "linear-gradient(90deg, #ffd700 10%, #ffa500 90%)" : "rgba(20, 20, 30, 0.55)",
            color: isActive ? "#fff7b2" : "#ffd700",
            opacity: isActive ? 1 : 0.88,
            transform: isActive ? "scale(1.18)" : "scale(1)",
            boxShadow: isActive ? "0 0 24px 2px #ffd70088" : iconBoxStyle.boxShadow,
            border: isActive ? "2.5px solid #ffd700" : iconBoxStyle.border
          })}
          title="Portfolyo"
        >
          <FaBriefcase />
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            ...iconBoxStyle,
            background: isActive ? "linear-gradient(90deg, #ffd700 10%, #ffa500 90%)" : "rgba(20, 20, 30, 0.55)",
            color: isActive ? "#fff7b2" : "#ffd700",
            opacity: isActive ? 1 : 0.88,
            transform: isActive ? "scale(1.18)" : "scale(1)",
            boxShadow: isActive ? "0 0 24px 2px #ffd70088" : iconBoxStyle.boxShadow,
            border: isActive ? "2.5px solid #ffd700" : iconBoxStyle.border
          })}
          title="İletişim"
        >
          <FaEnvelope />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;