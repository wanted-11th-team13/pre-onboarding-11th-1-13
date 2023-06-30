import { useState } from 'react';
import { deleteTodo, updateTodo } from '../api/todo';
import { toast } from 'react-hot-toast';

const useHandleTodo = ({ data, refetch }) => {
  const [todo, setTodo] = useState({ ...data });
  const [isEditMode, setIsEditMode] = useState(false);
  const handleCheckbox = async () => {
    const editedTodo = { todo: todo.todo, isCompleted: !todo.isCompleted };
    await updateTodo({ todo: editedTodo, id: todo.id });
    setTodo({ ...todo, isCompleted: !todo.isCompleted });
  };

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  const handleCancel = () => {
    handleEditMode();
    setTodo({ ...todo, todo: data.todo });
  };

  const handleDelete = async () => {
    const res = await deleteTodo(todo.id);
    if (res.status === 204) {
      refetch();
      toast('삭제되었습니다.');
    }
  };

  const handleEdit = e => {
    const { value } = e.target;
    setTodo({ ...todo, todo: value });
  };

  const handleSubmit = async () => {
    const editedTodo = { todo: todo.todo, isCompleted: todo.isCompleted };
    const res = await updateTodo({ todo: editedTodo, id: todo.id });
    if (res.status === 200) {
      toast('수정되었습니다.');
      setIsEditMode(!isEditMode);
    } else {
      toast('요청에 실패했습니다. 다시 시도해주세요!');
    }
  };
  return [
    todo,
    isEditMode,
    handleEditMode,
    handleCancel,
    handleCheckbox,
    handleDelete,
    handleEdit,
    handleSubmit,
  ];
};

export default useHandleTodo;
