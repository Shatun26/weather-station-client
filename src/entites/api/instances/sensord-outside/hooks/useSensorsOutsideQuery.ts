import { useQuery } from '@tanstack/react-query';
import { getOutsideSensorsDataFetch } from '../endpoints';

export const useSensorsDataQuery = () => {
  const result = useQuery({ queryFn: getOutsideSensorsDataFetch, queryKey: ['sensorsOutside'] });

  return result;
};
