import { Toaster } from 'react-hot-toast';
import useHandleTodo from '../hooks/useHandleTodo';

function TodoLi(props) {
  const [
    userTodo,
    isEditMode,
    handleEditMode,
    handleCancel,
    handleCheckbox,
    handleDelete,
    handleEdit,
    handleSubmit,
  ] = useHandleTodo(props);
  const { todo, isCompleted, id } = userTodo;

  return (
    <>
      <li>
        <label htmlFor={`${id}-isCompleted`}>
          <input
            type="checkbox"
            id={`${id}-isCompleted`}
            checked={isCompleted}
            onChange={handleCheckbox}
          />
        </label>
        {!isEditMode && (
          <>
            <p>{todo}</p>
            <div>
              <button onClick={handleEditMode} data-testid="modify-button">
                수정
              </button>
              <button onClick={handleDelete} data-testid="delete-button">
                삭제
              </button>
            </div>
          </>
        )}
        {isEditMode && (
          <>
            <input
              value={todo}
              autoFocus
              onChange={handleEdit}
              data-testid="modify-input"
            />
            <div>
              <button onClick={handleSubmit} data-testid="submit-button">
                제출
              </button>
              <button onClick={handleCancel} data-testid="cancel-button">
                취소
              </button>
            </div>
          </>
        )}
      </li>
      <Toaster />
    </>
  );
}

export default TodoLi;
