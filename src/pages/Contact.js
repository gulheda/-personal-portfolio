import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Hata mesajını temizle
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "İsim alanı zorunludur";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-posta alanı zorunludur";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Konu alanı zorunludur";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Mesaj alanı zorunludur";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Burada form gönderme işlemi yapılacak
    // Örnek olarak setTimeout kullanıyoruz
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      // 3 saniye sonra başarı mesajını kaldır
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const containerStyle = {
    maxWidth: "1200px",
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

  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr"
    }
  };

  const contactInfoStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "30px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  };

  const infoItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "25px",
    color: "rgba(255, 255, 255, 0.9)"
  };

  const iconStyle = {
    fontSize: "1.5rem",
    color: "#ffa500"
  };

  const socialLinksStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "30px"
  };

  const socialLinkStyle = {
    color: "#ffa500",
    fontSize: "1.5rem",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "translateY(-3px)"
    }
  };

  const formStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "30px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
  };

  const inputGroupStyle = {
    marginBottom: "20px"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    color: "rgba(255, 255, 255, 0.9)"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    transition: "all 0.3s ease"
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "150px",
    resize: "vertical"
  };

  const errorStyle = {
    color: "#ff6b6b",
    fontSize: "0.9rem",
    marginTop: "5px"
  };

  const buttonStyle = {
    background: "#ffa500",
    color: "#fff",
    padding: "12px 30px",
    border: "none",
    borderRadius: "25px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px"
  };

  const successMessageStyle = {
    background: "rgba(46, 213, 115, 0.2)",
    color: "#2ed573",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "20px",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>İletişim</h1>
      <div style={contentStyle}>
        <div style={contactInfoStyle}>
          <div style={infoItemStyle}>
            <FaEnvelope style={iconStyle} />
            <div>
              <h3 style={{ margin: "0 0 5px 0", color: "#ffa500" }}>E-posta</h3>
              <p style={{ margin: 0 }}>kizilhangulheda@gmail.com</p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <FaPhone style={iconStyle} />
            <div>
              <h3 style={{ margin: "0 0 5px 0", color: "#ffa500" }}>Telefon</h3>
              <p style={{ margin: 0 }}>0537 957 39 47</p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <FaMapMarkerAlt style={iconStyle} />
            <div>
              <h3 style={{ margin: "0 0 5px 0", color: "#ffa500" }}>Konum</h3>
              <p style={{ margin: 0 }}>İstanbul, Türkiye</p>
            </div>
          </div>
          <div style={socialLinksStyle}>
            <a href="https://www.linkedin.com/in/g%C3%BClheda-k%C4%B1z%C4%B1lhan-769b29284/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/gulheda" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <FaGithub />
            </a>
            <a href="https://twitter.com/gulhedadev" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/rosehkzlhn/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <FaInstagram />
            </a>
          </div>
        </div>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label style={labelStyle} htmlFor="name">İsim</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Adınız Soyadınız"
            />
            {errors.name && <div style={errorStyle}>{errors.name}</div>}
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle} htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="ornek@email.com"
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle} htmlFor="subject">Konu</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Mesajınızın konusu"
            />
            {errors.subject && <div style={errorStyle}>{errors.subject}</div>}
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle} htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              placeholder="Mesajınızı buraya yazın..."
            />
            {errors.message && <div style={errorStyle}>{errors.message}</div>}
          </div>

          <button 
            type="submit" 
            style={buttonStyle}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
          </button>

          {submitSuccess && (
            <div style={successMessageStyle}>
              Mesajınız başarıyla gönderildi!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact; 