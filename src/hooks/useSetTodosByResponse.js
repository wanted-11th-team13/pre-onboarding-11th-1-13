import { useEffect, useState } from 'react';
import { getTodos } from '../api/todo';

const useSetTodosByResponse = () => {
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const setTodosByResponse = async () => {
    setIsLoading(true);
    const { data } = await getTodos();
    setTodos(data);
    setIsLoading(false);
    if (data?.statusCode === 401) {
      setIsError(true);
    }
  };

  useEffect(() => {
    setTodosByResponse();
  }, []);
  console.log(todos);
  return [todos, isLoading, isError, setTodosByResponse];
};

export default useSetTodosByResponse;
