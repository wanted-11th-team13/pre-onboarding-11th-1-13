<<<<<<< HEAD
import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import useSetTodosByResponse from '../hooks/useSetTodosByResponse';
import Spinner from '../components/Spinner';
import TodoList from '../components/TodoList';

export default function TodoListPage() {
  const [todos, isLoading, isError, setTodosByResponse] =
    useSetTodosByResponse();

  if (isError) return <p>인증이 만료되었습니다. 다시 로그인해주세요.</p>;
  return (
    <div>
      <AddTodoForm refetch={setTodosByResponse} />
      <section>
        {isLoading ? (
          <Spinner />
        ) : (
          <TodoList todos={todos} refetch={setTodosByResponse} />
        )}
      </section>
=======
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function TodoListPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    // useAuth 커스텀 훅을 사용하여 로그인 기능 추가
    logout();
    navigate('/');
  };
  return (
    <div>
      <h1>TodoListPage</h1>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
>>>>>>> ad79e5d90bbec032b3fa76afe65143d2e96a6372
    </div>
  );
}
