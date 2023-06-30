import React from 'react';

// eslint-disable-next-line react/prop-types
function NormalLi({ todo, handleEditMode, handleDelete }) {
  return (
    <>
      <p>{todo}</p>
      <div>
        <button onClick={handleEditMode} data-testid="modify-button">
          수정
        </button>
        <button onClick={handleDelete} data-testid="delete-button">
          삭제
        </button>
      </div>
    </>
  );
}

export default NormalLi;
