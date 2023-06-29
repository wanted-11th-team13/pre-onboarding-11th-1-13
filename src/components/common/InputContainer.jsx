/* eslint-disable react/prop-types */
import React from 'react';

export default function InputContainer({
  label,
  condition,
  userAccount,
  setUserAccount,
  isValid,
  setIsValid,
}) {
  const validateInput = (label, event) => {
    const input = event.target.value;
    if (label === 'email') {
      const pattern = /@/;
      if (pattern.test(input)) {
        setIsValid({ email: true, password: isValid.password })
        setUserAccount({ email: input, password: userAccount.password });
      } else {
        setIsValid({ email: false, password: isValid.password });
      }
    }
    if (label === 'password') {
      if (input.length > 7) {
        setIsValid({ email: isValid.email, password: true })
        setUserAccount({ email: userAccount.email, password: input });
      } else {
        setIsValid({ email: isValid.email, password: false });
      }
    }
  };

  return (
    <div>
      <label htmlFor={`${label}Input`}>{label}</label>
      <input
        type={label}
        id={`${label}Input`}
        data-testid={`${label}-input`}
        onChange={event => {
          validateInput(label, event);
        }}
      />
      <p>{!isValid[`${label}`] ? condition : ''}</p>
    </div>
  );
}
