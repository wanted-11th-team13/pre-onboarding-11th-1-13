import { useState } from 'react';
import { addTodo } from '../api/todo';
import { Toaster, toast } from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
function AddTodoForm({ refetch }) {
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setTodo(value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const { status } = await addTodo(todo);
    if (status === 201) {
      setTodo('');
      refetch();
    } else {
      toast('잠시 후 다시 시도해주세요');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="new-todo-input"
          onChange={handleChange}
          value={todo}
          placeholder="할 일을 입력해주세요"
        />
        <button data-testid="new-todo-add-button">추가</button>
      </form>
      <Toaster />
    </>
  );
}

export default AddTodoForm;
