import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: { 'Content-Type': 'application/json' },
});

export const postSignIn = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/signin', {
      email: email,
      password: password,
    });
    localStorage.setItem('access_token', response.data.access_token);
    return response;
  } catch (error) {
    alert(error);
  }
};

export const postSignUp = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/signup', {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    alert(error);
  }
};

export const createTodo = async todo => {
  axiosInstance.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };
  try {
    const response = await axiosInstance.post('/todos', {
      todo: todo,
    });
    return response.data;
  } catch (error) {
    alert(error);
  }
};

export const getTodos = async () => {
  axiosInstance.defaults.headers = {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };
  try {
    const response = await axiosInstance.get('/todos');
    return response.data;
  } catch (error) {
    alert(error);
  }
};

export const updateTodo = async (id, todo, isCompleted) => {
  axiosInstance.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };
  try {
    const response = await axiosInstance.put(`/todos/${id}`, {
      todo: todo,
      isCompleted: isCompleted,
    });
    return response.data;
  } catch (error) {
    alert(error);
  }
};

export const deleteTodo = async id => {
  axiosInstance.defaults.headers = {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };
  try {
    const response = await axiosInstance.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    alert(error);
  }
};
