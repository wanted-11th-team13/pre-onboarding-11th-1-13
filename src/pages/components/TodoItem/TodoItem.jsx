import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TodoItem = React.memo(
  ({
    todo,
    onRemove,
    onToggle,
    isEditing,
    setEditing,
    onCancelEdit,
    onSaveEdit,
    pickedIndex,
    setPickedIndex,
    index,
  }) => {
    const [editValue, setEditValue] = useState(todo.todo);

    const onChangeEdit = e => {
      setEditValue(e.target.value);
      console.log('onChangeEdit');
    };

    useEffect(() => {
      console.log(editValue);
    });

    return (
      <li>
        {isEditing && index === pickedIndex ? (
          <>
            <input
              data-testid="modify-input"
              value={editValue || ''}
              onChange={e => onChangeEdit(e)}
              type="text"
            />
            <button
              data-testid="submit-button"
              onClick={() => {
                onSaveEdit(todo, editValue);
              }}
            >
              제출
            </button>
            <button
              data-testid="cancel-button"
              onClick={() => {
                onCancelEdit();
              }}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <label>
              <input
                onChange={() => {
                  onToggle(todo);
                }}
                type="checkbox"
                checked={todo.isCompleted} // value 와 같이 명시해줌
              />
              <span>{todo.todo || ''}</span>
            </label>
            <button
              onClick={() => {
                setEditing(true);
                setPickedIndex(index);
              }}
              data-testid="modify-button"
            >
              수정
            </button>
            <button
              data-testid="delete-button"
              onClick={() => {
                onRemove(todo.id);
              }}
            >
              삭제
            </button>
          </>
        )}
      </li>
    );
  }
);

TodoItem.displayName = 'TodoItem';

//typeCheck
TodoItem.propTypes = {
  todo: PropTypes.string,
  onRemove: PropTypes.func,
  onToggle: PropTypes.func,
  isEditing: PropTypes.bool,
  setEditing: PropTypes.bool,
  onCancelEdit: PropTypes.func,
  onSaveEdit: PropTypes.func,
  pickedIndex: PropTypes.number,
  setPickedIndex: PropTypes.number,
  index: PropTypes.number,
};
