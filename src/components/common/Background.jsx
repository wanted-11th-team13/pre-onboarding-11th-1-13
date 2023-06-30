/* eslint-disable react/prop-types */
import { styled } from 'styled-components';
import React from 'react';

const SBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default function Background({ children }) {
  return <SBackground>{children}</SBackground>;
}
