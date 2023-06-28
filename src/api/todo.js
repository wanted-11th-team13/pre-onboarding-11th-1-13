import { axiosInstance } from './api';

export const getTodos = async accessToken => {
  try {
    const response = await axiosInstance.get('/todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    return [];
  }
};
