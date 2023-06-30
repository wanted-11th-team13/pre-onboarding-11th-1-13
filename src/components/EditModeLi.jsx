import React from 'react';
import styled from 'styled-components';

const Containter = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  p {
    font-size: 18px;
  }
`;

const ModifiInput = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 17px;
`;

const Btn = styled.button`
  font-family: 'Humanbumsuk';
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 20px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
  &.homeButton {
    position: absolute;
    bottom: 30px;
    padding: 10px 20px;
    height: 50px;
    font-size: 30px;
    background-color: rgba(206, 155, 196, 0.5);
    &:hover {
      background-color: rgba(198, 87, 192, 1);
    }
  }
  &.signButton {
    &:disabled {
    }
  }
`;

// eslint-disable-next-line react/prop-types
function EditModeLi({ todo, handleEdit, handleCancel, handleSubmit }) {
  return (
    <Containter>
      <ModifiInput
        value={todo}
        autoFocus
        onChange={handleEdit}
        data-testid="modify-input"
      />
      <Btn onClick={handleSubmit} data-testid="submit-button">
        제출
      </Btn>
      <Btn onClick={handleCancel} data-testid="cancel-button">
        취소
      </Btn>
    </Containter>
  );
}

export default EditModeLi;
