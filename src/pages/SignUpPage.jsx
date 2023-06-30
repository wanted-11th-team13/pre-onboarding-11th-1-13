import { signUpApi } from '@/api/authApi';
import AuthForm from './components/AuthForm';
import Background from './components/Background';
import Container from './components/Container';

export default function SignUpPage() {
  return (
    <Background>
      <Container>
        <AuthForm title="signup" onSubmit={signUpApi} />
      </Container>
    </Background>
  );
}
