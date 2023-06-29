import styled from 'styled-components';
import { deleteTodo, updateTodo } from '../api/todo';
import { useState } from 'react';

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Todos({ todos, setTodos }) {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));

  const [updateIdx, setUpdateIdx] = useState(-1);
  const [updateContent, setUpdateContent] = useState('');

  const handleDeleteTodo = async todoId => {
    await deleteTodo(accessToken, todoId);

    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const handleUpdate = async (todoId, todo, isCompleted) => {
    const result = await updateTodo(accessToken, todoId, todo, isCompleted);

    const updatedTodos = todos.map(item => {
      if (item.id === todoId) {
        return {
          id: todoId,
          todo,
          isCompleted,
          userId: item.userId,
        };
      } else {
        return item;
      }
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id}>
          {updateIdx === todo.id ? (
            <>
              <div>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={event => {
                    event.preventDefault();
                    handleUpdate(todo.id, todo.todo, event.target.checked);
                  }}
                />
                <input
                  value={updateContent}
                  onChange={event => setUpdateContent(event.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={event => {
                    event.preventDefault();
                    handleUpdate(todo.id, updateContent, todo.isCompleted);
                    setUpdateContent(prev => '');
                    setUpdateIdx(prev => -1);
                  }}
                  data-testid="submit-button"
                >
                  제출
                </button>
                <button
                  onClick={event => {
                    event.preventDefault();
                    setUpdateIdx(prev => -1);
                    setUpdateContent(prev => '');
                  }}
                  data-testid="cancel-button"
                >
                  취소
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={event => {
                    event.preventDefault();
                    handleUpdate(todo.id, todo.todo, event.target.checked);
                  }}
                />
                <span>{todo.todo}</span>
              </div>
              <div>
                <button
                  onClick={event => {
                    event.preventDefault();
                    setUpdateIdx(todo.id);
                    setUpdateContent(prev => todo.todo);
                  }}
                >
                  수정
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
              </div>
            </>
          )}
        </Todo>
      ))}
    </div>
  );
}
