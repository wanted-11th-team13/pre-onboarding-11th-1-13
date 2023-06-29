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

export const createTodo = async (accessToken, todo) => {
  try {
    const response = await axiosInstance.post(
      '/todos',
      { todo },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    return null;
  }
};

export const updateTodo = async (accessToken, todoId, todo, isCompleted) => {
  try {
    const response = await axiosInstance.put(
      `/todos/${todoId}`,
      {
        todo,
        isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    return null;
  }
};

export const deleteTodo = async (accessToken, todoId) => {
  try {
    await axiosInstance.delete(`/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (Error) {
    return false;
  }
};
