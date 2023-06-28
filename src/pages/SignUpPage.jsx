import { AuthForm } from '@/components';
import { validateEmail, validatePassword } from '@/utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from '@/hooks';
import { axiosInstance } from '../api';

export default function SignUpPage() {
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const [isRegistered, setIsRegistered] = useState(false);
  const isValidEmail = validateEmail(emailInput.value);
  const isValidPassword = validatePassword(passwordInput.value);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  useEffect(() => {
    if (isRegistered) {
      console.log('가입완료');
      navigate('/signin');
    } else {
      return;
    }
  }, [isRegistered, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (isValidEmail && isValidPassword) {
      alert('회원가입성공');
    } else {
      alert('실패하였습니다');
    }
    try {
      const response = await axiosInstance.post('/auth/signup', {
        email: emailInput.value,
        password: passwordInput.value,
      });
      console.log(response);
      setIsRegistered(() => true);
      navigate('/signin');
    } catch (error) {
      console.log(console.error());
    }
  };

  return (
    <div>
      <h2>🏠 회원가입 페이지</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </div>
  );
}
