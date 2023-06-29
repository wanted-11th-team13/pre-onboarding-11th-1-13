import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getTodos } from '../api/todo';
import { handleLogout } from '../api/api';

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
`;

export default function TodoListPage() {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));

  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

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
        <>
          {todos.map(todo => (
            <span key={todo.id + ''}>{todo.todo}</span>
          ))}
        </>
      )}
      <span onClick={handleLogout}>로그아웃</span>
    </Wrapper>
  );
}
