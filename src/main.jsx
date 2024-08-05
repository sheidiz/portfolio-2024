import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </DarkModeProvider>,
  </React.StrictMode>,
)
