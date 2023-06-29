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
    </div>
  );
}
