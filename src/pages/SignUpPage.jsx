<<<<<<< HEAD
import AccountForm from '../components/AccountForm';

export default function SignUpPage() {
  return (
    <section>
      <h2>회원가입</h2>
      <AccountForm />
    </section>
  );
=======
import { signUpApi } from '@/api/authApi';
import AuthForm from './components/AuthForm';

export default function SignUpPage() {
  return <AuthForm title="signup" onSubmit={signUpApi} />;
>>>>>>> ad79e5d90bbec032b3fa76afe65143d2e96a6372
}
