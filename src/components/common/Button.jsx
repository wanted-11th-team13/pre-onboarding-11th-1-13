/* eslint-disable react/prop-types */
import React from 'react';

export default function Button({ children, type, onClick, disabled }) {
  return (
    <button onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
