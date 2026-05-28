import { Route } from '@tanstack/react-router';
import { rootRoute } from './Root.route';
import DemoPage from 'src/pages/demo-page/DemoPage';

export const demoPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/demo',
  component: DemoPage,
});
