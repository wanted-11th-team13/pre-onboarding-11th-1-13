import React from 'react';
import styled from 'styled-components';

export const Btn = styled.button`
  font-family: 'Humanbumsuk';
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 20px;
  height: 30px;
  margin: 0 5px;
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

export default function Button({
  children,
  onClick,
  dataTestid,
  className,
  ...props
}) {
  return (
    <Btn
      onClick={onClick}
      className={className}
      data-testid={dataTestid}
      {...props}
    >
      {children}
    </Btn>
  );
}
