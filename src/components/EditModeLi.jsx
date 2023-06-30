import React from 'react';

// eslint-disable-next-line react/prop-types
function EditModeLi({ todo, handleEdit, handleCancel, handleSubmit }) {
  return (
    <>
      <input
        value={todo}
        autoFocus
        onChange={handleEdit}
        data-testid="modify-input"
      />
      <div>
        <button onClick={handleSubmit} data-testid="submit-button">
          제출
        </button>
        <button onClick={handleCancel} data-testid="cancel-button">
          취소
        </button>
      </div>
    </>
  );
}

export default EditModeLi;
