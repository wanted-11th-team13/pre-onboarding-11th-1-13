import { AuthForm } from '@/components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '@/utils';
import { useInput } from '@/hooks';
import { axiosInstance } from '../api';
// import { RegisterButton } from '@/components';

export default function SignInPage() {
  const [isValid, setValid] = useState(false);
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const navigate = useNavigate();
  const isValidEmail = validateEmail(emailInput.value);
  const isValidPassword = validatePassword(passwordInput.value);

  useEffect(() => {
    setValid(isValidEmail && isValidPassword);
  }, [isValidEmail, isValidPassword]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (isValidEmail && isValidPassword) {
      alert('로그인성공');
    } else {
      alert('실패하였습니다');
    }
    try {
      const res = await axiosInstance.post('/auth/signin', {
        email: emailInput.value,
        password: passwordInput.value,
      });
      console.log(res);
      const token = res.data.access_token;
      localStorage.setItem('token', token);
      console.log('성공');

      navigate('/todo');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <div>
      <h2>🔑 로그인 페이지</h2>
      <AuthForm
        isValid={isValid}
        setValid={setValid}
        handleSubmit={handleSubmit}
        isValidEmail={isValidEmail}
        isValidPassword={isValidPassword}
      />
    </div>
  );
}
