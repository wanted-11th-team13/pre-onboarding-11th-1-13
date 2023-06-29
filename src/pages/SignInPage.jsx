<<<<<<< HEAD
import React from 'react';
import AccountForm from '../components/AccountForm';

export default function SignInPage() {
  return (
    <section>
      <h2>로그인</h2>
      <AccountForm />
    </section>
  );
=======
import { signInApi } from '@/api/authApi';
import AuthForm from './components/AuthForm';

export default function SignUpPage() {
  return <AuthForm title="signin" onSubmit={signInApi} />;
>>>>>>> ad79e5d90bbec032b3fa76afe65143d2e96a6372
}
