
import { signInApi } from '@/api/authApi';
import AuthForm from './components/AuthForm';

export default function SignUpPage() {
  return <AuthForm title="signin" onSubmit={signInApi} />;

}
