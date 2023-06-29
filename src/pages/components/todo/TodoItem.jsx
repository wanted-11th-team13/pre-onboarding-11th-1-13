import React, { useState } from 'react';
import { deleteTodoApi, updateTodoApi } from '@/api/todoApi';
import PropTypes from 'prop-types';

export default function TodoItem({ id, todo, isCompleted, setTodos }) {
  // 수정 모드
  const [isEditMode, setIsEditMode] = useState(false);

  // 수정한 투두 업데이트
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  // 수정 모드 활성화
  const handleEdit = () => {
    setIsEditMode(true);
  };

  // 수정 모드 취소
  const handleCancel = () => {
    // 수정 모드 비활성화
    setIsEditMode(false);
    // 수정 내용 초기화
    setUpdatedTodo(todo);
  };

  // 수정 입력
  const onChangeTodo = e => {
    setUpdatedTodo(e.target.value);
  };

  // 체크박스를 통해 할일 완료 여부 수정
  const handleCheckboxChange = async () => {
    try {
      const updateTodoState = {
        todo,
        isCompleted: !isCompleted,
      };
      const response = await updateTodoApi(id, updateTodoState);
      if (response.status !== 200) {
        alert('체크 변경을 실패했습니다.');
        return;
      }
      setTodos(todos =>
        todos.map(todo => (todo.id === response.data.id ? response.data : todo))
      );
    } catch {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
    }
  };

  // 수정 기능
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const updateTodoText = {
        todo: updatedTodo,
        isCompleted,
      };

      const response = await updateTodoApi(id, updateTodoText);

      if (response.status !== 200) {
        alert('수정하는데 실패했습니다.');
        return;
      }

      setTodos(todos =>
        todos.map(todo => (todo.id === response.data.id ? response.data : todo))
      );

      setIsEditMode(false);
    } catch {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
    }
  };

  // 삭제 기능
  const handleDelete = async () => {
    try {
      const response = await deleteTodoApi(id);

      if (response.status !== 204) {
        alert('삭제를 실패했습니다.');
        return;
      }

      alert('할일이 삭제되었습니다!');
      setTodos(todos => todos.filter(todo => todo.id !== id));
    } catch {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
    }
  };

  return (
    <li>
      {isEditMode ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              data-testid="modify-input"
              type="text"
              value={updatedTodo}
              onChange={onChangeTodo}
            />
          </div>
          <div className="w-1/5">
            <button data-testid="submit-button" type="submit">
              제출
            </button>
            <button data-testid="cancel-button" onClick={handleCancel}>
              취소
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCheckboxChange}
              />
              <span className={isCompleted ? 'line-through' : ''}>{todo}</span>
            </label>
          </div>
          <div>
            <button onClick={handleEdit} data-testid="modify-button">
              수정
            </button>
            <button onClick={handleDelete} data-testid="delete-button">
              삭제
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  setTodos: PropTypes.func.isRequired,
};
