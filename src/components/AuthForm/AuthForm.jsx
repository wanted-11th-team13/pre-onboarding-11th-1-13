import { FormInput, RegisterButton } from '@/components';
import PropTypes from 'prop-types';
import { validateEmail, validatePassword } from '@/utils';

export function AuthForm({
  handleSubmit,
  emailValue,
  passwordValue,
  onEmailChange,
  onPasswordChange,
}) {
  console.log(emailValue);
  console.log(passwordValue);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email : </label>
      <FormInput
        data-testid="email-input"
        name="email"
        type="email"
        value={emailValue}
        onChange={onEmailChange}
      />
      <label htmlFor="password">Password : </label>
      <FormInput
        data-testid="password-input"
        name="password"
        type="password"
        value={passwordValue}
        onChange={onPasswordChange}
      />
      <RegisterButton
        data-testid="signin-button"
        type="submit"
        disabled={
          !validateEmail(emailValue) || !validatePassword(passwordValue)
        }
      >
        제출
      </RegisterButton>
    </form>
  );
}

AuthForm.propTypes = {
  handleSubmit: PropTypes.func,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
};
