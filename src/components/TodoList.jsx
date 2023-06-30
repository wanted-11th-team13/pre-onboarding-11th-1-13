/* eslint-disable react/prop-types */
import { styled } from 'styled-components';
import TodoLi from './TodoLi';

const TodosContainer = styled.ul`
  height: 500px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function TodoList({ todos, refetch }) {
  return (
    <TodosContainer className="w-full h-full overflow-y-auto">
      {todos?.map(todo => (
        <TodoLi key={todo.id} data={todo} refetch={refetch} />
      ))}
    </TodosContainer>
  );
}

export default TodoList;
