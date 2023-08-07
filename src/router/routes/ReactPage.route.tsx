import { Route } from '@tanstack/router';
import { rootRoute } from './Root.route';
import { ReactPage } from '../../pages/react-page/ReactPage';

export const reactPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about-react',
  component: ReactPage,
});
