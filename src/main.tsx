import { RouterProvider } from '@tanstack/router';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { initializeI18n } from './i18n/i18n';
import { connectToFirebaseEmulators } from './modules/firebase-module/connectToFirebaseEmulators';
import { CustomThemeProvider } from './mui/CustomThemeProvider';
import { router } from './router/router';

if (import.meta.env.DEV) {
  connectToFirebaseEmulators();
}

initializeI18n();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback='...is loading'>
      <CustomThemeProvider>
        <RouterProvider router={router} />
      </CustomThemeProvider>
    </Suspense>
  </React.StrictMode>
);
