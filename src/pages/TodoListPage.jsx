import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { createTodo, getTodos } from '../api/todoApi';
import Todos from './components/Todos';

export default function TodoListPage() {
  const access_token = localStorage.getItem('access_token');

  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleNewTodo = async event => {
    event.preventDefault();

    const result = await createTodo(newTodo);

    if (result) {
      setTodos(prev => [...prev, result]);
    }

    setNewTodo(prev => '');

    return;
  };

  const handleLogout = () => {
    // useAuth 커스텀 훅을 사용하여 로그인 기능 추가
    logout();
    navigate('/');
  };

  useEffect(() => {
    if (access_token === null) {
      navigate('/signin');
    }

    (async () => {
      setIsLoading(prev => true);

      const result = await getTodos(access_token);

      setTodos(prev => [...result]);

      setIsLoading(prev => false);
    })();
  }, []);

  return (
    <div>
      <h1>TodoListPage</h1>
      <div>
        <form onSubmit={handleNewTodo}>
          <input
            value={newTodo}
            onChange={event => setNewTodo(prev => event.target.value)}
            data-testid="new-todo-input"
          />
          <button data-testid="new-todo-add-button">추가</button>
        </form>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Todos todos={todos} setTodos={setTodos} />
        )}
      </div>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
