/* eslint-disable react/prop-types */
import React from 'react';

export default function InputContainer({
  label,
  condition,
  state,
  setState,
  setInput,
}) {
  const validateInput = e => {
    setInput(e.target.value);
    if (label === 'email') {
      const pattern = /@/;
      if (pattern.test(e.target.value)) {
        setState(true);
      } else {
        setState(false);
      }
    } else if (label === 'password') {
      if (e.target.value.length > 7) {
        setState(true);
      } else {
        setState(false);
      }
    }
  };
  return (
    <div>
      <label htmlFor={`${label}Input`}>{label}</label>
      <input
        type="text"
        id={`${label}Input`}
        data-testid={`${label}-input`}
        onChange={validateInput}
      />
      <p>{!state ? condition : ''}</p>
    </div>
  );
}
