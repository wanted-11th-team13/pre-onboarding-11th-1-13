import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '@/components/common/Background';
import Todo from '@/components/Todo';
import Button from '@/components/common/Button';

import { getTodos, createTodo } from '@/api/todo';

export default function TodolistsPage() {
  const [todolists, setTodolists] = useState([]);
  const newTodoInputRef = useRef();
  const navigate = useNavigate();

  const getTodolists = async () => {
    const todolists = await getTodos();
    setTodolists(todolists);
  };

  const addTodoHandler = async e => {
    e.preventDefault();
    if (newTodoInputRef.current.value) {
      const response = await createTodo(newTodoInputRef.current.value);
      setTodolists([...todolists, response]);
    } else {
      alert('내용을 입력해주세요');
    }
  };

  const logoutHandler = () => {
    alert('로그아웃하시나요?');
    localStorage.removeItem('access_token');
    window.location.reload();
  };

  useEffect(() => {
    localStorage.getItem('access_token') ? getTodolists() : navigate('/signin');
  }, []); /* eslint-disable-line */

  return (
    <Background>
      <div>
        <div>
          <h1>투두리스트</h1>
          <div onClick={logoutHandler}>로그아웃</div>
        </div>
        <div onSubmit={addTodoHandler}>
          <input
            type="text"
            className="todoInput"
            ref={newTodoInputRef}
            data-testid="new-todo-input"
          />
          <Button
            type={'submit'}
            className="todolistsInputBtn"
            dataTestid="new-todo-add-button"
          >
            추가
          </Button>
        </div>
        {todolists?.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            todolists={todolists}
            setTodolists={setTodolists}
            getTodolists={getTodolists}
          />
        ))}
      </div>
    </Background>
  );
}
