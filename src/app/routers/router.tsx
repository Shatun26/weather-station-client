import { createBrowserRouter } from 'react-router-dom';
import { Root, SomePage } from '@/pages';

export const useRoutes = () => {
  return createBrowserRouter(
    [
      {
        element: <Root />,
        children: [
          {
            index: true,
            element: <SomePage />,
          },
        ],
      },
    ],
    { basename: '/' }
  );
};
