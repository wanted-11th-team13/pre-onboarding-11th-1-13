// ** React.memo **
// 해당 프로퍼티가 변경된 경우에만 다시 랜더링된다.

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  margin-top: 50px;
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

const AuthButton = ({ disabled, buttonText }) => {
  return (
    <Btn disabled={disabled} data-testid={`${buttonText}-button`} type="submit">
      {buttonText}
    </Btn>
  );
};

export default React.memo(AuthButton);

AuthButton.propTypes = {
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
};
