import { apiRequest } from './api';

export const signUpApi = async userInfo => {
  return await apiRequest('/auth/signup', 'post', userInfo);
};

export const signInApi = async userInfo => {
  return await apiRequest('/auth/signin', 'post', userInfo);
};
