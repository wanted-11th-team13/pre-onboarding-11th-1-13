import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useSetTodosByResponse from '../hooks/useSetTodosByResponse';
import logoutIcon from '@/assets/logout.png';
import AddTodoForm from './components/todo/AddTodoForm';
import Spinner from './components/Spinner';
import TodoList from './components/todo/TodoList';
import Background from './components/Background';
import { styled } from 'styled-components';
import { toast } from 'react-hot-toast';

const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: pink;
  padding: 10px;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  border-radius: 10px;
  background-color: white;
  outline: none;
  border: none;
`;

const EmptyTodosMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 130px;
`;

export default function TodoListPage() {
  const [todos, isLoading, isError, setTodosByResponse] =
    useSetTodosByResponse();

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast('로그아웃되었습니다.');
    navigate('/');
  };

  if (isError) return <p>인증이 만료되었습니다. 다시 로그인해주세요.</p>;
  return (
    <Background>
      <Container>
        <AddTodoForm refetch={setTodosByResponse} />
        <section>
          {isLoading ? (
            <Spinner />
          ) : todos.length > 0 ? (
            <TodoList todos={todos} refetch={setTodosByResponse} />
          ) : (
            <EmptyTodosMessage>
              할 일이 없습니다. 추가해주세요!
            </EmptyTodosMessage>
          )}
        </section>
        {/* 로그아웃 버튼 */}
        <Button onClick={handleLogout}>
          <img src={logoutIcon} alt="logout icon" />
        </Button>
      </Container>
    </Background>
  );
}
