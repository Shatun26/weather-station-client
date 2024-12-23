import { useQuery } from '@tanstack/react-query';

import { getCharDataFetch } from '../../api';

type Props = {};

export const useFetchCharData = () => {
  const { data, isLoading } = useQuery({
    queryKey: [getCharDataFetch],
    queryFn: async () => {
      const res = await getCharDataFetch();

      return res;
    },
  });

  return { data, isLoading };
};
