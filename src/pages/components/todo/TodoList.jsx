import React from 'react';
import PropTypes from 'prop-types';
import TodoLi from './TodoLi';
import { styled } from 'styled-components';

const TodosContainer = styled.ul`
  height: 500px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function TodoList({ todos, refetch }) {
  return (
    <TodosContainer>
      {todos?.map(todo => (
        <TodoLi key={todo.id} data={todo} refetch={refetch} />
      ))}
    </TodosContainer>
  );
}

export default React.memo(TodoList);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
      iscompleted: PropTypes.bool,
    })
  ),
  refetch: PropTypes.func.isRequired,
};
