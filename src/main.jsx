import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './styles.css';
import { tracker } from './analytics/index.js';

tracker.init();
const element = document.getElementById('root');
const application = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
if (element.hasChildNodes()) hydrateRoot(element, application);
else createRoot(element).render(application);

