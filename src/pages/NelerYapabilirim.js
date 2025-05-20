import React from "react";
import { FaBrain, FaCogs, FaRobot, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const abilities = [
  {
    icon: <FaBrain size={36} color="#ffa500" />,
    title: "Yapay Zekâ & Algoritmalar",
    desc: "Veri analizi, karar verme sistemleri ve öğrenen algoritmalar geliştiriyorum."
  },
  {
    icon: <FaCogs size={36} color="#ffa500" />,
    title: "Simülasyon Sistemleri",
    desc: "Gerçek dünyayı sanal ortama taşıyan, test edilebilir simülasyonlar kuruyorum."
  },
  {
    icon: <FaRobot size={36} color="#ffa500" />,
    title: "Otonom Sistemler",
    desc: "İHA'lar için görev planlama, kontrol ve ortam algısı üzerine çalışıyorum."
  },
  {
    icon: <FaCode size={36} color="#ffa500" />,
    title: "Yazılım Geliştirme",
    desc: "Python ve C# ile fonksiyonel, sürdürülebilir yazılım çözümleri üretiyorum."
  }
];

const containerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px 20px",
  color: "#fff"
};

const titleStyle = {
  color: "#ffa500",
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "40px",
  fontFamily: 'Montserrat, Arial, sans-serif',
  textAlign: "center"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "32px"
};

const cardStyle = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(10px)",
  borderRadius: "18px",
  padding: "32px 24px",
  border: "1.5px solid rgba(255,255,255,0.10)",
  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "transform 0.2s cubic-bezier(.4,0,.2,1), box-shadow 0.2s cubic-bezier(.4,0,.2,1)",
  cursor: "pointer"
};

const cardHover = {
  transform: "scale(1.05)",
  boxShadow: "0 8px 32px 0 rgba(255, 215, 0, 0.18)"
};

function NelerYapabilirim() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Neler Yapabilirim?</h1>
      <div style={gridStyle}>
        {abilities.map((item, i) => (
          <motion.div
            key={i}
            style={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            whileHover={{ scale: 1.06, boxShadow: "0 0 32px 0 #ffd70099, 0 0 0 6px #222a" }}
            whileTap={{ scale: 1.13, boxShadow: "0 0 48px 0 #ffd700cc, 0 0 0 10px #222a" }}
          >
            {item.icon}
            <h3 style={{ color: "#ffd700", margin: "18px 0 10px 0", fontSize: "1.3rem" }}>{item.title}</h3>
            <p style={{ color: "#fff", opacity: 0.92, fontSize: "1.05rem" }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NelerYapabilirim; 