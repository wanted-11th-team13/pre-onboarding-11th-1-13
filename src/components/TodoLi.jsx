import { Toaster } from 'react-hot-toast';
import useHandleTodo from '../hooks/useHandleTodo';
import NormalLi from './NormalLi';
import EditModeLi from './EditModeLi';
import { styled } from 'styled-components';

const Li = styled.li`
  margin: 10px 0;

  label {
    display: flex;
    gap: 10px;
    border-bottom: 2px solid #a9fac2;
    padding: 0 0 10px 0;

    [data-testid='modify-input'] {
      outline: none;
      border: none;
      border-radius: 5px;
      padding: 10px;
      font-size: 17px;
    }

    [data-testid='submit-button'] {
      background-color: #a9fac2;
    }

    [data-testid='delete-button'] {
    }
  }
`;

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
      <Li>
        <label>
          <div htmlFor={`${id}-isCompleted`}>
            <input
              type="checkbox"
              id={`${id}-isCompleted`}
              checked={isCompleted}
              onChange={handleCheckbox}
            />
          </div>
          {!isEditMode && (
            <NormalLi
              todo={todo}
              handleEditMode={handleEditMode}
              handleDelete={handleDelete}
            />
          )}
          {isEditMode && (
            <EditModeLi
              todo={todo}
              handleEdit={handleEdit}
              handleCancel={handleCancel}
              handleSubmit={handleSubmit}
            />
          )}
        </label>
      </Li>
      <Toaster />
    </>
  );
}

export default TodoLi;
