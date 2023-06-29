import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { getTodosApi } from '@/api/todoApi';
import TodoLists from './components/todo/TodoLists';

export default function TodoListPage() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await getTodosApi();
      if (response.status !== 200) {
        return;
      }
      setTodos(response.data);
    } catch {
      alert('오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleLogout = () => {
    // useAuth 커스텀 훅을 사용하여 로그인 기능 추가
    logout();
    navigate('/');
  };
  return (
    <div>
      <div>
        <h1>TodoListPage</h1>
        <TodoLists todos={todos} />
      </div>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
