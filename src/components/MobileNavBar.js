import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const navItems = [
  { path: "/", icon: <FaHome />, label: "Anasayfa" },
  { path: "/about", icon: <FaUser />, label: "Hakkımda" },
  { path: "/skills", icon: <FaTools />, label: "Yetenekler" },
  { path: "/portfolio", icon: <FaFolderOpen />, label: "Portfolyo" },
  { path: "/contact", icon: <FaEnvelope />, label: "İletişim" },
];

const MobileNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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