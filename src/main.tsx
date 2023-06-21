import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { connectToFirebaseEmulators } from './services/FirebaseService/connectToFirebaseEmulators';
import { initializeI18n } from './i18n/i18n';
import { CustomThemeProvider } from './mui/CustomThemeProvider';

if (import.meta.env.DEV) {
  connectToFirebaseEmulators();
}

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
