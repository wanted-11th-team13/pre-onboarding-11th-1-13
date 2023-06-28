import { axiosInstance } from './api';

export const postNewAccount = async (email, password) => {
  try {
    await axiosInstance.post('/auth/signup', {
      email,
      password,
    });

    return true;
  } catch (error) {
    return false;
  }
};

export const handleLogin = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/signin', {
      email,
      password,
    });

    return response.data.access_token;
  } catch (error) {
    return null;
  }
};
