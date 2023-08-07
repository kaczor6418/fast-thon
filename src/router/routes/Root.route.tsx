import { Outlet, RootRoute, Route } from '@tanstack/router';
import React from 'react';
import { App } from '../../App';

export const rootRoute = new RootRoute({
  component: Root,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const TanStackRouterDevtools = React.lazy(() =>
  import('@tanstack/router-devtools').then((res) => ({
    default: res.TanStackRouterDevtools,
  }))
);

function Root() {
  return import.meta.env.DEV ? (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ) : (
    <Outlet />
  );
}
