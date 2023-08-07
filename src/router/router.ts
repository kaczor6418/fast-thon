import { Router } from '@tanstack/router';
import { reactPageRoute } from './routes/ReactPage.route';
import { rootRoute } from './routes/Root.route';
import { vitePageRoute } from './routes/VitePage.route';

const routeTree = rootRoute.addChildren([reactPageRoute, vitePageRoute]);

export const router = new Router({ routeTree });
