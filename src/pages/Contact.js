import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import MobileNavBar from '../components/MobileNavBar';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const { t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
      newErrors.name = t('contact.errors.nameRequired');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.errors.invalidEmail');
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.errors.subjectRequired');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.errors.messageRequired');
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  if (isMobile) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#181f2a',
        padding: '18px 0 64px 0',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          width: '100%',
          padding: '0 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
        }}>
          <div style={{
            background: '#23232b',
            borderRadius: 10,
            padding: '18px 12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            width: '100%',
            maxWidth: 800,
          }}>
            <h1 style={{
              color: '#ffa500',
              fontSize: 22,
              marginBottom: 12,
              textAlign: 'center',
              fontWeight: 700
            }}>
              {t('contact.title')}
            </h1>
          </div>

          <form onSubmit={handleSubmit} style={{
            background: '#23232b',
            borderRadius: 12,
            padding: '16px 12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            width: '100%',
            margin: 0,
          }}>
            <div style={{ marginBottom: '12px' }}>
              <label style={{
                display: 'block',
                color: '#fff',
                fontSize: 14,
                marginBottom: 6
              }}>
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  color: '#fff',
                  fontSize: 14
                }}
              />
              {errors.name && (
                <span style={{ color: '#ff6b6b', fontSize: 12, marginTop: 4 }}>
                  {errors.name}
                </span>
              )}
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={{
                display: 'block',
                color: '#fff',
                fontSize: 14,
                marginBottom: 6
              }}>
                {t('contact.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  color: '#fff',
                  fontSize: 14
                }}
              />
              {errors.email && (
                <span style={{ color: '#ff6b6b', fontSize: 12, marginTop: 4 }}>
                  {errors.email}
                </span>
              )}
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={{
                display: 'block',
                color: '#fff',
                fontSize: 14,
                marginBottom: 6
              }}>
                {t('contact.subject')}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  color: '#fff',
                  fontSize: 14
                }}
              />
              {errors.subject && (
                <span style={{ color: '#ff6b6b', fontSize: 12, marginTop: 4 }}>
                  {errors.subject}
                </span>
              )}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                color: '#fff',
                fontSize: 14,
                marginBottom: 6
              }}>
                {t('contact.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 8,
                  color: '#fff',
                  fontSize: 14,
                  minHeight: 100,
                  resize: 'vertical'
                }}
              />
              {errors.message && (
                <span style={{ color: '#ff6b6b', fontSize: 12, marginTop: 4 }}>
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '12px',
                background: '#ffa500',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>

            {submitSuccess && (
              <div style={{
                marginTop: '12px',
                padding: '8px',
                background: 'rgba(46, 213, 115, 0.2)',
                color: '#2ed573',
                borderRadius: 8,
                fontSize: 14,
                textAlign: 'center'
              }}>
                {t('contact.success')}
              </div>
            )}
          </form>
        </div>
        <MobileNavBar />
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      color: "#fff"
    }}>
      <motion.h1 
        style={{
          fontSize: "2.7rem",
          fontWeight: "bold",
          marginBottom: "40px",
          fontFamily: 'Montserrat, Arial, sans-serif',
          textAlign: "center",
          color: "#ffa500",
          textShadow: "0 2px 8px rgba(255, 165, 0, 0.3)"
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {t('contact.title')}
      </motion.h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexWrap: "wrap",
        gap: "32px",
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <div style={{
          background: "rgba(10, 10, 10, 0.35)",
          backdropFilter: "blur(15px)",
          borderRadius: "22px",
          padding: "30px",
          border: "1.5px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
          flex: "1",
          minWidth: "300px"
        }}>
          <h2 style={{
            color: "#ffa500",
            fontSize: "1.5rem",
            marginBottom: "25px",
            fontFamily: 'Montserrat, Arial, sans-serif'
          }}>
            {t('contact.contactInfo')}
          </h2>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <FaEnvelope style={{ color: "#ffa500", fontSize: "1.5rem" }} />
              <span>kizilhangulheda@gmail.com</span>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <FaPhone style={{ color: "#ffa500", fontSize: "1.5rem" }} />
              <span>+90 537 957 3947</span>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <FaMapMarkerAlt style={{ color: "#ffa500", fontSize: "1.5rem" }} />
              <span>Denizli, Türkiye</span>
            </div>
          </div>
          <div style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px"
          }}>
            <a href="#" style={{ color: "#ffa500", fontSize: "1.5rem" }}>
              <FaLinkedin />
            </a>
            <a href="#" style={{ color: "#ffa500", fontSize: "1.5rem" }}>
              <FaGithub />
            </a>
            <a href="#" style={{ color: "#ffa500", fontSize: "1.5rem" }}>
              <FaTwitter />
            </a>
            <a href="#" style={{ color: "#ffa500", fontSize: "1.5rem" }}>
              <FaInstagram />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{
          background: "rgba(10, 10, 10, 0.35)",
          backdropFilter: "blur(15px)",
          borderRadius: "22px",
          padding: "30px",
          border: "1.5px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
          flex: "2",
          minWidth: "400px"
        }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              color: "#fff",
              fontSize: "1rem",
              marginBottom: "8px"
            }}>
              {t('contact.name')}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "1rem"
              }}
            />
            {errors.name && (
              <span style={{ color: "#ff6b6b", fontSize: "0.9rem", marginTop: "4px" }}>
                {errors.name}
              </span>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              color: "#fff",
              fontSize: "1rem",
              marginBottom: "8px"
            }}>
              {t('contact.email')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "1rem"
              }}
            />
            {errors.email && (
              <span style={{ color: "#ff6b6b", fontSize: "0.9rem", marginTop: "4px" }}>
                {errors.email}
              </span>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              color: "#fff",
              fontSize: "1rem",
              marginBottom: "8px"
            }}>
              {t('contact.subject')}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "1rem"
              }}
            />
            {errors.subject && (
              <span style={{ color: "#ff6b6b", fontSize: "0.9rem", marginTop: "4px" }}>
                {errors.subject}
              </span>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              color: "#fff",
              fontSize: "1rem",
              marginBottom: "8px"
            }}>
              {t('contact.message')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "1rem",
                minHeight: "150px",
                resize: "vertical"
              }}
            />
            {errors.message && (
              <span style={{ color: "#ff6b6b", fontSize: "0.9rem", marginTop: "4px" }}>
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "14px",
              background: "#ffa500",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.7 : 1,
              transition: "all 0.3s ease"
            }}
          >
            {isSubmitting ? t('contact.sending') : t('contact.send')}
          </button>

          {submitSuccess && (
            <div style={{
              marginTop: "20px",
              padding: "12px",
              background: "rgba(46, 213, 115, 0.2)",
              color: "#2ed573",
              borderRadius: "8px",
              fontSize: "1rem",
              textAlign: "center"
            }}>
              {t('contact.success')}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact; 