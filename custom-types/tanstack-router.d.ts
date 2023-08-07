import { router } from '../src/router/router';

declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}
