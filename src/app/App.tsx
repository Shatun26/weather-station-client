import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import 'dayjs/locale/ru';
import './colors.css';
import { useRoutes } from './routers/router';
import { QueryClientProvider } from './configs';

export const App: FC = () => {
  const routes = useRoutes();

  return (
    <QueryClientProvider>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
};
