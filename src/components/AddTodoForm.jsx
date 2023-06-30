import { useState } from 'react';
import { addTodo } from '../api/todo';
import { Toaster, toast } from 'react-hot-toast';
import { styled } from 'styled-components';

const InputContainer = styled.form`
  position: relative;
  padding: 0 0 20px;

  .todolistsInputBtn {
    position: absolute;
    right: 15px;
    top: 10px;
    background-color: #a9fac2;
  }
`;

const Input = styled.input`
  outline: none;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  padding: 15px 30px;
  width: 100%;
  font-size: 30px;
`;

const Button = styled.button`
  font-family: 'Humanbumsuk';
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 20px;
  height: 30px;

  position: absolute;
  right: 15px;
  top: 10px;
  background-color: #a9fac2;

  &:hover {
    cursor: pointer;
  }

  &.homeButton {
    position: absolute;
    bottom: 30px;
    padding: 10px 20px;
    height: 50px;
    font-size: 30px;
    background-color: rgba(206, 155, 196, 0.5);
    &:hover {
      background-color: rgba(198, 87, 192, 1);
    }
  }
  &.signButton {
    &:disabled {
    }
  }
`;

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
      <InputContainer onSubmit={handleSubmit}>
        <Input
          data-testid="new-todo-input"
          onChange={handleChange}
          value={todo}
          placeholder="할 일을 입력해주세요"
        />
        <Button data-testid="new-todo-add-button">추가</Button>
      </InputContainer>
    </>
  );
}

export default AddTodoForm;
