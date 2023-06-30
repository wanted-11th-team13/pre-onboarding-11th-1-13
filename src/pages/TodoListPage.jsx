import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { EditMode, NormalMode } from './components/TodoMode';
import * as todoApi from '../api/todoApi';

export default function TodoListPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodoId, setEditedTodoId] = useState(-1);

  const handleLogout = () => {
    // useAuth 커스텀 훅을 사용하여 로그인 기능 추가
    logout();
    navigate('/');
  };

  useEffect(() => {
    todoApi
      .getTodoApi()
      .then(response => {
        setTodoList(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  const addTodo = async () => {
    await todoApi.createTodoApi(newTodo).then(() => {
      window.location.href = '/todo';
    })
    .catch(err => {
      console.log(err);
    });
  }

  const deleteTodo = async id => {
    await todoApi
      .deleteTodoApi(id)
      .then(() => {
        window.location.href = '/todo';
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateTodo = async (id, editedTodo, isCompleted) => {
    await todoApi
      .updateTodoApi(id, editedTodo, isCompleted)
      .then(() => {
        window.location.href = '/todo';
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>TodoListPage</h1>
      <input
        data-testid="new-todo-input"
        onChange={e => {
          setNewTodo(e.target.value);
        }}
      />
      <button data-testid="new-todo-add-button" onClick={addTodo}>
        추가
      </button>
      <ul>
        {todoList.map(todo => {
          if (todo.id === editedTodoId) {
            return (
              <EditMode
                todo={todo}
                key={todo.id}
                updateTodo={updateTodo}
                cancelTodo={() => {
                  setEditedTodoId(-1);
                }}
              />
            );
          } else {
            return (
              <NormalMode
                todo={todo}
                key={todo.id}
                changeEditMode={id => {
                  setEditedTodoId(id);
                }}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            );
          }
        })}
      </ul>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
