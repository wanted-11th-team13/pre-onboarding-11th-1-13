import React from 'react';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function Container({ children }) {
  return <Div>{children}</Div>;
}
