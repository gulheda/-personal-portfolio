import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#fff"
  };

  const titleStyle = {
    color: "#ffa500",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    textAlign: "center"
  };

  const sectionStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "30px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  };

  const sectionTitleStyle = {
    color: "#ffa500",
    fontSize: "1.5rem",
    marginBottom: "20px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    display: "flex",
    alignItems: "center",
    gap: "10px"
  };

  const textStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "15px"
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "rgba(255, 255, 255, 0.9)"
  };

  const bulletStyle = {
    color: "#ffa500",
    marginRight: "10px",
    fontSize: "1.2em"
  };

  const subtitleStyle = {
    color: "#ffa500",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: 'Montserrat, Arial, sans-serif',
    textAlign: "center"
  };

  const descriptionStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "20px",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Hakkımda</h1>
      
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          Ben Kimim?
        </h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginBottom: "25px",
          background: "rgba(255, 255, 255, 0.08)",
          padding: "18px 24px",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaUser style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>İsim:</span>
            <span style={{ color: "#fff" }}>Gülheda Kızılhan</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaEnvelope style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>E-posta:</span>
            <span style={{ color: "#fff" }}>kizilhangulheda@gmail.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaBirthdayCake style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>Yaş:</span>
            <span style={{ color: "#fff" }}>21</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaMapMarkerAlt style={{ color: "#ffa500", fontSize: "1.2em" }} />
            <span style={{ color: "#ffa500", fontWeight: 600, minWidth: 70 }}>Konum:</span>
            <span style={{ color: "#fff" }}>Denizli</span>
          </div>
        </div>
        <p style={textStyle}>
          Merhaba, ben Gülheda. Bilgisayar mühendisliği 2. sınıf öğrencisiyim. Şu anda üniversitemin Teknofest ekibinde, bir İHA'nın simülasyon sistemini geliştiriyorum. Yapay zekâ, insan-merkezli tasarım ve simülasyon teknolojileri özel ilgi alanlarım. Kodla sadece işlev değil; anlam, his ve etki yaratmak istiyorum. Geliştirdiğim projelerde; mühendisliğin yaratıcılıkla birleştiği, sade ama güçlü çözümler üretmeyi önceliklendiriyorum. Gömülü sistemlerle ilgilenmiyorum, daha çok yüksek seviye soyutlama ve algoritmik düşünebileceğim alanlara yöneliyorum.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          Eğitim & Deneyim
        </h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            Bilgisayar Mühendisliği 2. sınıf öğrencisi, Balıkesir Üniversitesi
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          Yaklaşımım
        </h2>
        <p style={textStyle}>
          Benim için yazılım sadece kod satırlarından ibaret değil. Bir problemi çözmekten çok, onu doğru şekilde anlamayı ve sade bir yaklaşımla ele almayı önemsiyorum. Karmaşık şeyleri basitleştirmek, görselleştirmek ve işe yarar hâle getirmek benim tarzım. Yapay zekâ ve simülasyon sistemlerine olan ilgim, düşüncenin işleyişini teknolojiyle ifade etme isteğimden geliyor. Hazır çözümler değil, anlamlı süreçler ilgimi çeker.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <span style={bulletStyle}>✦</span>
          İlgi Alanlarım
        </h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            Yapay Zekâ (AI): Karar verme sistemleri, öğrenme algoritmaları ve veri odaklı çözümler üzerine çalışmayı seviyorum.
          </li>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            Simülasyon Sistemleri: Gerçek dünyayı sanal ortama taşıyıp test edebilmek; hem analitik hem yaratıcı düşünmeyi gerektiriyor ve bu denge bana ilham veriyor.
          </li>
          <li style={listItemStyle}>
            <span style={bulletStyle}>•</span>
            Otonom Sistemler: Özellikle İHA simülasyonlarında; kontrol, görev planlama ve ortam algısı gibi konularla ilgileniyorum.
          </li>
        </ul>
      </div>

      <motion.h2 style={subtitleStyle}>
        Bilgisayar Mühendisliği 2. Sınıf Öğrencisi
      </motion.h2>
      <p style={descriptionStyle}>
        Yapay zekâ, simülasyon ve otonom sistemlere tutkuyla odaklanıyorum.<br />
        Teknofest'te İHA simülasyonları geliştiriyor, karmaşık problemleri sade ve etkili çözümlere dönüştürüyorum.
      </p>
    </div>
  );
};

export default About; 