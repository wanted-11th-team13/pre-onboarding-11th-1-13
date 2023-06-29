import { signInApi } from '@/api/authApi';
import AuthForm from './components/auth/AuthForm';

export default function SignUpPage() {
  return <AuthForm title="signin" onSubmit={signInApi} />;
}
