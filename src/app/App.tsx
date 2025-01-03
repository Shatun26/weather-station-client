import type { FC } from 'react';
import '../entites/api/config/interceptors';
import { RouterProvider } from 'react-router-dom';
import 'dayjs/locale/ru';
import './colors.css';
import './index.css';
import { useRouter } from './routers/router';
import { QueryClientProvider } from './configs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const App: FC = () => {
  return (
    <QueryClientProvider>
      <RouterProvider router={useRouter()} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};
