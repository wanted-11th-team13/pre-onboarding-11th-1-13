import { axiosInstance } from './api';

export const signin = async account => {
  try {
    const response = await axiosInstance.post('/auth/signin', account);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signup = async account => {
  try {
    const response = await axiosInstance.post('/auth/signup', account);
    return response;
  } catch (error) {
    return error.response;
  }
};
