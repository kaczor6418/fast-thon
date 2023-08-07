import { Router } from '@tanstack/router';
import { reactPageRoute } from './routes/ReactPage.route';
import { indexRoute, rootRoute } from './routes/Root.route';
import { vitePageRoute } from './routes/VitePage.route';

const routeTree = rootRoute.addChildren([indexRoute, reactPageRoute, vitePageRoute]);

export const router = new Router({ routeTree });
