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

const Btn = styled.button`
  font-family: 'Humanbumsuk';
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 20px;
  height: 30px;
  width: 70px;
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

const Buttons = styled.div`
  display: flex;
`;

// eslint-disable-next-line react/prop-types
function NormalLi({ todo, handleEditMode, handleDelete }) {
  return (
    <Containter>
      <p>{todo}</p>
      <Btn onClick={handleEditMode} data-testid="modify-button">
        수정
      </Btn>
      <Btn onClick={handleDelete} data-testid="delete-button">
        삭제
      </Btn>
    </Containter>
  );
}

export default NormalLi;
