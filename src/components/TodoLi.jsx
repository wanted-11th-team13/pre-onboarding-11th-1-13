import { Toaster } from 'react-hot-toast';
import useHandleTodo from '../hooks/useHandleTodo';
import NormalLi from './NormalLi';
import EditModeLi from './EditModeLi';

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
      </li>
      <Toaster />
    </>
  );
}

export default TodoLi;
