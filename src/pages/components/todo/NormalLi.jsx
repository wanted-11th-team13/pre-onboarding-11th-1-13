import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
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

export default function NormalLi({ todo, handleEditMode, handleDelete }) {
  return (
    <Container>
      <p>{todo}</p>
      <Btn onClick={handleEditMode} data-testid="modify-button">
        수정
      </Btn>
      <Btn onClick={handleDelete} data-testid="delete-button">
        삭제
      </Btn>
    </Container>
  );
}

NormalLi.propTypes = {
  todo: PropTypes.string.isRequired,
  handleEditMode: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
