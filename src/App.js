import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import NelerYapabilirim from "./pages/NelerYapabilirim";
import Sidebar from "./components/Sidebar";
import RightBar from "./components/RightBar";
import LanguageSelector from "./components/LanguageSelector";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#0d1b2a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: "50px",
          height: "50px",
          border: "3px solid #ffa500",
          borderTop: "3px solid transparent",
          borderRadius: "50%"
        }}
      />
    </motion.div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş yükleme süresi
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        {/* Arka Plan Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(0.7) blur(1.5px)",
            pointerEvents: "none"
          }}
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
        {/* Karartma Overlay */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "radial-gradient(ellipse at 60% 40%, rgba(255,200,80,0.15) 0%, rgba(13,27,42,0.7) 100%)",
            zIndex: 1,
            pointerEvents: "none"
          }}
        />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <div className="app" style={{ position: "relative", zIndex: 2 }}>
              <Sidebar />
              <main className="main-content">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <PageTransition>
                          <Home />
                        </PageTransition>
                      }
                    />
                    <Route
                      path="/about"
                      element={
                        <PageTransition>
                          <About />
                        </PageTransition>
                      }
                    />
                    <Route
                      path="/skills"
                      element={
                        <PageTransition>
                          <Skills />
                        </PageTransition>
                      }
                    />
                    <Route
                      path="/portfolio"
                      element={
                        <PageTransition>
                          <Portfolio />
                        </PageTransition>
                      }
                    />
                    <Route
                      path="/contact"
                      element={
                        <PageTransition>
                          <Contact />
                        </PageTransition>
                      }
                    />
                    <Route
                      path="/neleryapabilirim"
                      element={
                        <PageTransition>
                          <NelerYapabilirim />
                        </PageTransition>
                      }
                    />
                  </Routes>
                </AnimatePresence>
              </main>
              <RightBar />
              <LanguageSelector />
            </div>
          )}
        </AnimatePresence>
      </Router>
    </LanguageProvider>
  );
};

export default App;