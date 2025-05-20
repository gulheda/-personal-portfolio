import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Portfolio = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [repos, setRepos] = useState([]);

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

  const projects = [
    {
      title: t.portfolio.project1Title,
      description: t.portfolio.project1Desc,
      image: "/images/project1.jpg",
      link: "https://github.com/yourusername/project1"
    },
    {
      title: t.portfolio.project2Title,
      description: t.portfolio.project2Desc,
      image: "/images/project2.jpg",
      link: "https://github.com/yourusername/project2"
    },
    {
      title: t.portfolio.project3Title,
      description: t.portfolio.project3Desc,
      image: "/images/project3.jpg",
      link: "https://github.com/yourusername/project3"
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

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{t.portfolio.title}</h1>
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