import { axiosInstance } from './api';

const authRequest = async (url, method, data) => {
  try {
    const response = await axiosInstance.request({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const signUpApi = async userInfo => {
  return await authRequest('/auth/signup', 'post', userInfo);
};

export const signInApi = async userInfo => {
  return await authRequest('/auth/signin', 'post', userInfo);
};
