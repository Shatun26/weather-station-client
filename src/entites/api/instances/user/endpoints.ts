import { userInstance } from './instance';
type FetchCurrentUserResponse = {
  email: string;
};
export const getCurrentUserFetch = async () => (await userInstance.get<FetchCurrentUserResponse>('current_user')).data;
