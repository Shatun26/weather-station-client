import { QueryClientProvider as Provider, QueryCache, QueryClient } from '@tanstack/react-query';
import { toast } from 'auchan-uikit'
import { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
	queryCache: new QueryCache({
    onError: () => console.log(`Произошла ошибка, повторите позже.`, { type: 'error' }),
  }),
});

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return <Provider client={queryClient}>{children}</Provider>;
};
