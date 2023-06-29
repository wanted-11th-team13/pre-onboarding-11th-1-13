import { axiosInstance } from './api';

export const addTodo = async todo => {
  try {
    const response = await axiosInstance.post('/todos', { todo });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const updateTodo = async ({ todo, id }) => {
  try {
    const response = await axiosInstance.put(`/todos/${id}`, { ...todo });
    return response;
  } catch (error) {
    return error.response;
  }
};
export const deleteTodo = async id => {
  try {
    const response = await axiosInstance.delete(`/todos/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get('/todos');
    return response;
  } catch (error) {
    return error.response;
  }
};
