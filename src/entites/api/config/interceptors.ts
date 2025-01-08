import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { sensorsOutsideInstance } from '../instances/sensord-outside/instance';
import { refreshFetch } from '../instances/auth/endpoints';
import { authProtectedInstance } from '../instances/auth/instance';
import { userInstance } from '../instances/user/instance';

const instances: AxiosInstance[] = [sensorsOutsideInstance, authProtectedInstance, userInstance];

instances.forEach(instance => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config;

      if (originalRequest && error.response?.status === 401) {
        try {
          await refreshFetch();

          return instance.request(originalRequest);
        } catch (err) {
          window.location.href = '/auth';

          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );
});
