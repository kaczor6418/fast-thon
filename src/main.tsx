import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback='...is loading'>
      <App />
    </Suspense>
  </React.StrictMode>
);
