import { Route } from '@tanstack/router';
import { rootRoute } from './Root.route';
import { VitePage } from '../../pages/vite-page/VitePage';

export const vitePageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about-vite',
  component: VitePage,
});
