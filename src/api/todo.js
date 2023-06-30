import { apiRequest } from './api';

export const addTodo = async todo => {
  return await apiRequest('/todos', 'post', { todo });
};

export const updateTodo = async ({ todo, id }) => {
  return await apiRequest(`/todos/${id}`, 'put', { ...todo });
};
export const deleteTodo = async id => {
  return await apiRequest(`/todos/${id}`, 'delete');
};

export const getTodos = async () => {
  return await apiRequest('/todos', 'get');
};
