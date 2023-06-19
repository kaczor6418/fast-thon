import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { initializeI18n } from './i18n/i18n';
import { CustomThemeProvider } from './mui/CustomThemeProvider';

initializeI18n();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback='...is loading'>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </Suspense>
  </React.StrictMode>
);
