import { useMutation } from '@tanstack/react-query';
import { loginFetch } from '../endpoints';
import { useNavigate } from 'react-router-dom';

export const useLoginMutation = () => {
  const nav = useNavigate();
  const mutation = useMutation({
    mutationFn: loginFetch,
    onSuccess: () => nav('/dashboard', { replace: true }),
  });

  return mutation;
};
