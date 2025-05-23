import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaLightbulb, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const MobileNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: "/", icon: <FaHome />, label: t('nav.home') },
    { path: "/about", icon: <FaUser />, label: t('nav.about') },
    { path: "/skills", icon: <FaTools />, label: t('nav.skills') },
    { path: "/neleryapabilirim", icon: <FaLightbulb />, label: t('nav.whatICan') },
    { path: "/portfolio", icon: <FaBriefcase />, label: t('nav.portfolio') },
    { path: "/contact", icon: <FaEnvelope />, label: t('nav.contact') }
  ];

  // Sadece mobilde göster
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (min-width: 769px) {
        .mobile-navbar { display: none !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <nav className="mobile-navbar" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100vw',
      height: 62,
      background: 'rgba(24,24,24,0.98)',
      borderTop: '1.5px solid #ffb36644',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 9999,
      boxShadow: '0 -2px 16px #0005',
      padding: 0,
    }}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: isActive ? '#ffb366' : '#fff',
              fontSize: 22,
              fontWeight: isActive ? 700 : 500,
              opacity: isActive ? 1 : 0.8,
              cursor: 'pointer',
              padding: '0 2px',
              transition: 'color 0.2s, opacity 0.2s',
            }}
          >
            {React.cloneElement(item.icon, { size: 24, color: isActive ? '#ffb366' : '#fff' })}
            <span style={{ fontSize: 11, marginTop: 2 }}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default MobileNavBar; 