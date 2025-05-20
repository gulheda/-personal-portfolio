import React from "react";
import { FaBrain, FaCogs, FaRobot, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const NelerYapabilirim = () => {
  const abilities = [
    {
      icon: <FaBrain size={36} color="#ffa500" />,
      title: "Yapay Zekâ (AI)",
      desc: "Karar verme sistemleri, öğrenme algoritmaları ve veri odaklı çözümler üzerine çalışmayı seviyorum."
    },
    {
      icon: <FaCogs size={36} color="#ffa500" />,
      title: "Simülasyon Sistemleri",
      desc: "Gerçek dünyayı sanal ortama taşıyıp test edebilmek; hem analitik hem yaratıcı düşünmeyi gerektiriyor ve bu denge bana ilham veriyor."
    },
    {
      icon: <FaRobot size={36} color="#ffa500" />,
      title: "Otonom Sistemler",
      desc: "Özellikle İHA simülasyonlarında; kontrol, görev planlama ve ortam algısı gibi konularla ilgileniyorum."
    },
    {
      icon: <FaPaintBrush size={36} color="#ffa500" />,
      title: "Arayüz Tasarımı (UI/UX)",
      desc: "Kullanıcıya sezgisel ve anlamlı bir deneyim sunmak benim için yazılımın en insani yönü."
    }
  ];

  const pageStyle = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative",
    zIndex: 10,
    background: "rgba(10, 10, 10, 0.25)",
    backdropFilter: "blur(10px)"
  };

  const containerStyle = {
    maxWidth: "1200px",
    width: "100%",
    padding: "40px",
    position: "relative"
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "50px",
    fontFamily: "Montserrat, Arial, sans-serif",
    textAlign: "center",
    background: "linear-gradient(135deg, #ffb649 0%, #ffdc83 50%, #fff2d1 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 30px rgba(255, 182, 73, 0.3)",
    position: "relative"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    width: "100%"
  };

  const cardStyle = {
    background: "rgba(10, 10, 10, 0.35)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "35px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease"
  };

  const iconContainerStyle = {
    width: "80px",
    height: "80px",
    background: "rgba(255, 165, 0, 0.1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "25px",
    position: "relative",
    boxShadow: "0 0 20px rgba(255, 165, 0, 0.2)"
  };

  const titleGradientStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "20px",
    fontFamily: "Montserrat, Arial, sans-serif",
    background: "linear-gradient(135deg, #ffb649, #ffdc83)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 15px rgba(255, 182, 73, 0.2)"
  };

  const descriptionStyle = {
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    margin: 0,
    position: "relative",
    zIndex: 1
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Neler Yapabilirim?
        </motion.h1>
        <div style={gridStyle}>
          {abilities.map((ability, index) => (
            <motion.div
              key={index}
              style={cardStyle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                transform: "translateY(-10px)",
                boxShadow: "0 15px 45px rgba(255, 165, 0, 0.2)",
                border: "1px solid rgba(255, 165, 0, 0.3)"
              }}
            >
              <motion.div
                style={iconContainerStyle}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {ability.icon}
              </motion.div>
              <h3 style={titleGradientStyle}>
                {ability.title}
              </h3>
              <p style={descriptionStyle}>
                {ability.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NelerYapabilirim; 