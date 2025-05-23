import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1) LanguageProvider'ı içe aktar
import { LanguageProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2) App'i LanguageProvider ile sarıyoruz */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
