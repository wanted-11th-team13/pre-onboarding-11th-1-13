import { RegisterButton, FormInput } from '@/components';

export default function SignInPage() {
  return (
    <form>
      <label>Email : </label>
      <FormInput data-testid="email-input" name="email" type="email" />
      <RegisterButton data-testid="signin-button" type="submit">
        테스트
      </RegisterButton>
    </form>
  );
}
