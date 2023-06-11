import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/i18n';
import './index.css';
import { App } from './App';
import { initializeI18n } from './i18n/i18n';

initializeI18n();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback='...is loading'>
      <App />
    </Suspense>
  </React.StrictMode>
);
