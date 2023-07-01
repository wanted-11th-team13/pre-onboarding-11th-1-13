import PropTypes from 'prop-types';
import { useRef } from 'react';
import { addTodo } from '@/api/todoApi';
import { toast } from 'react-hot-toast';
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

export default function AddTodoForm({ refetch }) {
  // useState를 useRef로 변경하여 랜더링 최소화
  const todoInputRef = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const todo = todoInputRef.current.value;
    const { status } = await addTodo(todo);
    if (status === 201) {
      toast(`"${todo}" 추가되었습니다!`);
      todoInputRef.current.value = '';
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
          ref={todoInputRef}
          placeholder="할 일을 입력해주세요"
        />
        <Button data-testid="new-todo-add-button">추가</Button>
      </InputContainer>
    </>
  );
}

AddTodoForm.propTypes = {
  refetch: PropTypes.func.isRequired,
};
