import { apiRequest } from './api';

export const getTodosApi = async () => {
  return await apiRequest('/todos', 'get');
};

export const createTodoApi = async newTodo => {
  return await apiRequest('/todos', 'post', newTodo);
};

export const updateTodoApi = async (id, updateTodo) => {
  return await apiRequest(`/todos/${id}`, 'put', updateTodo);
};

export const deleteTodoApi = async id => {
  return await apiRequest(`/todos/${id}`, 'delete');
};
