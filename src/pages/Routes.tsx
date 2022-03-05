import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import type { FC } from 'react';

const Main = lazy(() => import('pages/Main'));
const NotFound = lazy(() => import('pages/NotFound'));

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <ReactRoutes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
