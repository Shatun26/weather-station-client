import { AuthPage, Layout } from '@/pages';
import { DashboardPage } from '@/pages/dashboard-page';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const useRouter = () => {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
        {
          path: 'dash',
          element: <>123123</>,
        },
      ],
    },
    {
      path: 'auth',
      element: <AuthPage />,
    },
    {
      path: '*',
      element: <Navigate to={'dashboard'} />,
    },
  ]);
};
