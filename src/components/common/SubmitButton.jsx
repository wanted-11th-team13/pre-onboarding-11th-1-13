import React from 'react';

export default function SubmitButton({ children, onClick }) {
  return (
    <button onClick={onClick} type="submit">
      {children}
    </button>
  );
}
