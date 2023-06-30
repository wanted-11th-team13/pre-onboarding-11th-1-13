/* eslint-disable react/prop-types */
import TodoLi from './TodoLi';
function TodoList({ todos, refetch }) {
  return (
    <ul className="w-full h-full overflow-y-auto">
      {todos?.map(todo => (
        <TodoLi key={todo.id} data={todo} refetch={refetch} />
      ))}
    </ul>
  );
}

export default TodoList;
