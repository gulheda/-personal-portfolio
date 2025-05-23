import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import MobileNavBar from '../components/MobileNavBar';
import { useMediaQuery } from 'react-responsive';

const Portfolio = () => {
  const { language, t } = useLanguage();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [repos, setRepos] = useState([]);

  const projects = (translations[language].portfolio.projects || []);
  const categories = translations[language].skills.categories;

  useEffect(() => {
    fetch("https://api.github.com/users/gulheda/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

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

  const projectsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "20px"
  };

  const projectCardStyle = {
    background: "rgba(10, 10, 10, 0.35)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  };

  const projectContentStyle = {
    padding: "20px"
  };

  const projectTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "10px"
  };

  const projectDescriptionStyle = {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "20px",
    lineHeight: 1.6
  };

  const linksStyle = {
    display: "flex",
    gap: "15px"
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "#ffa500",
    textDecoration: "none",
    fontSize: "0.9rem",
    padding: "8px 15px",
    borderRadius: "20px",
    background: "rgba(255, 165, 0, 0.1)",
    transition: "all 0.3s ease"
  };

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
              {t('portfolio.title')}
            </h1>
            <div style={{
              color: '#fff',
              fontSize: 13,
              lineHeight: 1.5,
              marginBottom: 10,
              textAlign: 'center',
            }}>
              {t('portfolio.description')}
            </div>
          </div>

          {projects.map((project, index) => (
            <div key={index} style={{
              background: '#23232b',
              borderRadius: 12,
              padding: '16px 12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{
                color: '#ffa500',
                fontSize: 18,
                marginBottom: 10,
                fontWeight: 700
              }}>
                {project.title}
              </h2>
              <p style={{
                color: '#fff',
                fontSize: 14,
                lineHeight: 1.5,
                marginBottom: 12
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '12px'
              }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#ffa500',
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    <FaGithub />
                    <span style={{ fontSize: '13px' }}>GitHub</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#ffa500',
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'none'
                    }}
                  >
                    <FaExternalLinkAlt />
                    <span style={{ fontSize: '13px' }}>Demo</span>
                  </a>
                )}
              </div>
              {project.technologies && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginTop: '12px'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: 'rgba(255,165,0,0.1)',
                        color: '#ffa500',
                        padding: '3px 6px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{
            background: '#23232b',
            borderRadius: 12,
            padding: '16px 12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              color: '#ffa500',
              fontSize: 18,
              marginBottom: 12,
              textAlign: 'center',
              fontWeight: 700
            }}>
              GitHub Projeleri
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {repos.slice(0, 5).map((repo, index) => (
                <a
                  key={index}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    padding: '10px',
                    textDecoration: 'none',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <FaGithub style={{ color: '#ffa500' }} />
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#ffa500'
                    }}>
                      {repo.name}
                    </span>
                  </div>
                  {repo.description && (
                    <p style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.7)',
                      margin: 0
                    }}>
                      {repo.description}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        <MobileNavBar />
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{t('portfolio.title')}</h1>
      <div style={projectsGridStyle}>
        {repos
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 8)
          .map((repo) => (
            <motion.div
              key={repo.id}
              style={projectCardStyle}
              whileHover={{ scale: 1.06, boxShadow: "0 0 32px 0 #ffd70099, 0 0 0 6px #222a" }}
              whileTap={{ scale: 1.13, boxShadow: "0 0 48px 0 #ffd700cc, 0 0 0 10px #222a" }}
            >
              <div style={projectContentStyle}>
                <h3 style={projectTitleStyle}>{repo.name}</h3>
                <p style={projectDescriptionStyle}>{repo.description || "Açıklama yok."}</p>
                <div style={linksStyle}>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(255, 165, 0, 0.2)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "rgba(255, 165, 0, 0.1)";
                    }}
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  {repo.homepage && (
                    <a 
                      href={repo.homepage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={linkStyle}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "rgba(255, 165, 0, 0.2)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "rgba(255, 165, 0, 0.1)";
                      }}
                    >
                      <FaExternalLinkAlt />
                      Canlı Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio; 