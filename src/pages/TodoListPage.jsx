import React from 'react';
import AddTodoForm from '../components/AddTodoForm';
import useSetTodosByResponse from '../hooks/useSetTodosByResponse';
import Spinner from '../components/Spinner';
import TodoList from '../components/TodoList';
import Background from './components/Background';
import { styled } from 'styled-components';

const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: pink;
  padding: 10px;
`;

export default function TodoListPage() {
  const [todos, isLoading, isError, setTodosByResponse] =
    useSetTodosByResponse();

  if (isError) return <p>인증이 만료되었습니다. 다시 로그인해주세요.</p>;
  return (
    <Background>
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
    </Background>
  );
}
