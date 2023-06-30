import { useRef } from 'react';
import PropTypes from 'prop-types';
import { createTodoApi } from '@/api/todoApi';
import Button from './Button';

export default function CreateTodo({ setTodos }) {
  // input onChange의 value 값을 구할 때,
  // useState 대신 useRef를 이용하여 렌더링 방지
  const inputRef = useRef(null);

  // 새로운 TODO를 입력하고 추가 버튼을 누르면 내용이 추가되도록 구현
  const handleSubmit = async e => {
    e.preventDefault();
    // useRef를 사용하여 input 요소의 값을 가져옴
    const newTodo = inputRef.current.value.trim();

    if (newTodo === '') {
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
        // 입력 초기화
        inputRef.current.value = '';
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="new-todo-input" type="text" ref={inputRef} />
      <Button title="추가" label="new-todo-add" type="submit" />
    </form>
  );
}

CreateTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
