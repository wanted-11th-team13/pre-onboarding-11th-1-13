import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodoApi } from '@/api/todoApi';

export default function CreateTodo({ setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  // 투두 입력
  const handleInputChange = e => {
    setNewTodo(e.target.value);
  };

  // 새로운 TODO를 입력하고 추가 버튼을 누르면 내용이 추가되도록 구현
  const handleSubmit = async e => {
    e.preventDefault();

    if (newTodo.trim() === '') {
      alert(`할일을 입력해주세요!`);
    } else {
      try {
        const data = {
          todo: newTodo,
        };
        const response = await createTodoApi(data);
        if (response.status !== 201) {
          alert('할일 추가에 실패했습니다.');
          return;
        }
        setTodos(todos => [...todos, response.data]);
      } catch {
        alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
      } finally {
        setNewTodo('');
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="new-todo-input"
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  );
}

CreateTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
