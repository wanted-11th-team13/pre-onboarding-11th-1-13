import { apiRequest } from './api';

export const getTodoApi = async () => {
  return await apiRequest('/todos', 'get');
};

export const createTodoApi = async (newTodo)=>{
    return await apiRequest('/todos','post',{ todo: newTodo })
}

export const deleteTodoApi = async (id)=>{
    return await apiRequest(`/todos/${id}`, 'delete')
}

export const updateTodoApi = async (id, editedTodo, isCompleted) => {
    return await apiRequest(`/todos/${id}`,'put',{ todo: editedTodo, isCompleted })
}