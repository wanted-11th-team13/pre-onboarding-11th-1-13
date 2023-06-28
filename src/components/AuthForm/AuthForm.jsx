import { FormInput, RegisterButton } from '@/components';
import { useInput } from '@/hooks';
import PropTypes from 'prop-types';
// import { useEffect } from 'react';

export function AuthForm({
  isValid,
  setValid,
  handleSubmit,
  isValidPassword,
  isValidEmail,
}) {
  const emailInput = useInput('');
  const passwordInput = useInput('');

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email : </label>
      <FormInput
        data-testid="email-input"
        name="email"
        type="email"
        value={emailInput.value}
        {...emailInput} // onChange역할
      />
      <label htmlFor="password">Password : </label>
      <FormInput
        data-testid="password-input"
        name="password"
        type="password"
        value={passwordInput.value}
        {...passwordInput} // onChange역할
      />
      <RegisterButton
        data-testid="signin-button"
        type="submit"
        // disabled={!isValid}
      >
        제출
      </RegisterButton>
    </form>
  );
}

// PropTypes
AuthForm.propTypes = {
  isValid: PropTypes.bool,
  setValid: PropTypes.func,
  handleSubmit: PropTypes.func,
  isValidEmail: PropTypes.bool,
  isValidPassword: PropTypes.bool,
};
