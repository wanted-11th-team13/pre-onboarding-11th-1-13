/* eslint-disable react/prop-types */
import { styled } from 'styled-components';
import React, { useState, useRef } from 'react';
import Button from '@/components/common/Button';
import { getTodos, updateTodo, deleteTodo } from '../../api/todo';

const ButtonsContainer = styled.div`
  display: flex;
`;

export default function Todo({
  id,
  todo,
  isCompleted,
  todolists,
  setTodolists,
  getTodolists,
}) {
  const checkboxRef = useRef();
  const todoInputRef = useRef();
  const [checked, setChecked] = useState(isCompleted);
  const [editable, setEditable] = useState(false);

  const checkboxHandler = () => {
    updateTodo(id, todo, checked);
    setChecked(!checked);
  };
  const editButtonHandler = () => {
    setEditable(!editable);
  };
  const submitButtonHandler = async e => {
    e.preventDefault();
    const updatedTodo = todoInputRef.current.value;
    if (updatedTodo) {
      await updateTodo(id, updatedTodo, checked);
      const newTodolists = await getTodos();
      setTodolists(newTodolists);
      setEditable(!editable);
    } else {
      alert('내용을 입력해주세요.');
    }
  };
  const deleteButtonHandler = () => {
    alert('정말 삭제하시겠습니까?');
    deleteTodo(id);
    const filteredTodos = todolists.filter(todo => todo.id !== id);
    setTodolists(filteredTodos);
  };
  const cancelButtonHandler = () => {
    setEditable(!editable);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={checked ? true : false}
          onClick={checkboxHandler}
        />
      </div>
      {editable ? <input type="text" ref={todoInputRef} /> : <p>{todo}</p>}
      <ButtonsContainer>
        {editable ? (
          <>
            <Button type="button" onClick={submitButtonHandler}>
              제출
            </Button>
            <Button type="button" onClick={cancelButtonHandler}>
              취소
            </Button>
          </>
        ) : (
          <>
            <Button type="button" onClick={editButtonHandler}>
              수정
            </Button>
            <Button type="button" onClick={deleteButtonHandler}>
              삭제
            </Button>
          </>
        )}
      </ButtonsContainer>
    </div>
  );
}
