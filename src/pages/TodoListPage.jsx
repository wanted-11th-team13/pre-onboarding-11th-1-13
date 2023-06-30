import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import useSetTodosByResponse from '../hooks/useSetTodosByResponse';
import Spinner from '../components/Spinner';
import TodoList from '../components/TodoList';
import Background from './components/Background';
import { styled } from 'styled-components';
import { Toaster, toast } from 'react-hot-toast';
import logoutIcon from '@/assets/icons/logout.png';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: pink;
  padding: 10px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 60px;
  right: 120px;
  border-radius: 10px;
  background-color: white;
  outline: none;
  border: none;
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
      <Button onClick={handleLogout}>
        <img src={logoutIcon} alt="logout icon" />
      </Button>
      <Container>
        <AddTodoForm refetch={setTodosByResponse} />
        <section>
          {isLoading ? (
            <Spinner />
          ) : (
            <TodoList todos={todos} refetch={setTodosByResponse} />
          )}
        </section>
      </Container>
      <Toaster />
    </Background>
  );
}
