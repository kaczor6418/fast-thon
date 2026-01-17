import { router } from '../src/router/router';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
