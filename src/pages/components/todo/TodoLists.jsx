import React from 'react';
import PropTypes from 'prop-types';

export default function TodoLists({ todos }) {
  return (
    <div>
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => <li key={todo.id}>{todo.todo}</li>)
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
}

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
