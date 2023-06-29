import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createTodo, getTodos } from '../api/todo';
import { handleLogout } from '../api/api';
import Todos from '../Components/Todos';

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

export default function TodoListPage() {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));

  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const navigate = useNavigate();

  const handleNewToeo = async event => {
    event.preventDefault();

    const result = await createTodo(accessToken, newTodo);

    if (result) {
      setTodos(prev => [...prev, result]);
    }
    setNewTodo(prev => '');

    return;
  };

  useEffect(() => {
    if (accessToken === null) {
      alert('로그인 후 이용하실 수 있는 서비스입니다.');
      navigate('/signin');
    }

    (async () => {
      setIsLoading(prev => true);

      const result = await getTodos(accessToken);
      setTodos(result);

      setIsLoading(prev => false);
    })();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <form onSubmit={handleNewToeo}>
            <input
              placeholder="New Todo"
              value={newTodo}
              onChange={event => setNewTodo(prev => event.target.value)}
            />
            <button disabled={newTodo.length === 0}>새로운 Todo</button>
          </form>
          <Todos todos={todos} setTodos={setTodos} />
        </Container>
      )}
      <span onClick={handleLogout}>로그아웃</span>
    </Wrapper>
  );
}
