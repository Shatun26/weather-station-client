import { useQuery } from '@tanstack/react-query';
import { getCurrentUserFetch } from '../endpoints';

export const useCurrentUserQuery = () => {
  const result = useQuery({
    queryFn: getCurrentUserFetch,
    queryKey: ['currentUser'],
  });

  return result;
};
