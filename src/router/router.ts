import { Router } from '@tanstack/react-router';
import { reactPageRoute } from './routes/ReactPage.route';
import { demoPageRoute } from './routes/DemoPage.route';
import { indexRoute, rootRoute } from './routes/Root.route';
import { vitePageRoute } from './routes/VitePage.route';

const routeTree = rootRoute.addChildren([indexRoute, reactPageRoute, vitePageRoute, demoPageRoute]);

export const router = new Router({ routeTree });
