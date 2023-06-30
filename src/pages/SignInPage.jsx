import { signInApi } from '@/api/authApi';
import AuthForm from './components/AuthForm';
import Background from './components/Background';
import Container from './components/Container';
import { Toaster } from 'react-hot-toast';

export default function SignUpPage() {
  return (
    <Background>
      <Container>
        <AuthForm title="signin" onSubmit={signInApi} />
      </Container>
      <Toaster />
    </Background>
  );
}
