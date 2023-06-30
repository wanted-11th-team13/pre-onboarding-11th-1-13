import { apiRequest } from './api';

export const createTodo = async todo => {
  const response = await apiRequest('/todos', 'post', { todo });

  if (response) {
    return response.data;
  } else {
    return null;
  }
};

export const getTodos = async () => {
  const response = await apiRequest('/todos', 'get');

  if (response) {
    return response.data;
  } else {
    return [];
  }
};

export const updateTodo = async (todoId, todo, isCompleted) => {
  const response = await apiRequest(`/todos/${todoId}`, 'put', {
    todo,
    isCompleted,
  });

  if (response) {
    return response.data;
  } else {
    return null;
  }
};

export const deleteTodo = async todoId => {
  const response = await apiRequest(`todos/${todoId}`, 'delete');

  if (response) {
    return response.data;
  } else {
    return false;
  }
};
