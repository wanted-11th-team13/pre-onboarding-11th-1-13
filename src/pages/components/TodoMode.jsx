import { useState } from "react";


export function EditMode({ todo, updateTodo, cancelTodo }) {
  const [editedTodo, setEditTodo] = useState('');

  const clickSubmitButton = () => {
    updateTodo(todo.id, editedTodo, todo.isCompleted);
  };

  const clickCancelButton = () => {
    cancelTodo();
  };

  const clickCheckbox = () => {
    updateTodo(todo.id, todo.todo, !todo.isCompleted);
  };

  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={clickCheckbox}
        />
        <input
          data-testid="modify-input"
          defaultValue={todo.todo}
          onChange={e => {
            setEditTodo(e.target.value);
          }}
        />
      </label>
      <button data-testid="submit-button" onClick={clickSubmitButton}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={clickCancelButton}>
        취소
      </button>
    </li>
  );
}

export function NormalMode({ todo, changeEditMode, deleteTodo, updateTodo }) {
  const clickModifyButton = () => {
    changeEditMode(todo.id);
  };

  const clickDeleteButton = () => {
    deleteTodo(todo.id);
  };

  const clickCheckbox = () => {
    updateTodo(todo.id, todo.todo, !todo.isCompleted);
  };

  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={clickCheckbox}
        />
        <span>{todo.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={clickModifyButton}>
        수정
      </button>
      <button data-testid="delete-button" onClick={clickDeleteButton}>
        삭제
      </button>
    </li>
  );
}
