import { authInstance, authProtectedInstance } from './instance';
import { loginRequest } from './types';

export const loginFetch = async (payload: loginRequest) => {
  return (await authInstance.post<{ token: string }>('login', payload)).data;
};

export const refreshFetch = async () => {
  return (await authInstance.post('refresh')).data;
};

export const logOutFetch = async () => {
  return (await authProtectedInstance.post<{ token: string }>('logout')).data;
};
