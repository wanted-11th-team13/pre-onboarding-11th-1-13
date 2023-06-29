import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

// ** React.memo **
// TodoLists 컴포넌트의 props가 변경되지 않으면 이전에 랜더링된 결과를 재사용
const TodoLists = ({ todos, setTodos }) => {
  return (
    <div>
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              setTodos={setTodos}
            />
          ))
        ) : (
          <li>
            <div>
              <p>할일이 없습니다.</p>
              <p>
                새로운 할일을 <span>추가</span>
                해주세요!
              </p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default React.memo(TodoLists);

TodoLists.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};
