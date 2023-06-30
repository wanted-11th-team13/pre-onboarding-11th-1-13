
import { signUpApi } from '@/api/authApi';
import AuthForm from './components/AuthForm';

export default function SignUpPage() {
  return <AuthForm title="signup" onSubmit={signUpApi} />;

}
