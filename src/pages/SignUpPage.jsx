import { AuthForm } from '@/components';
import { validateEmail, validatePassword } from '@/utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from '@/hooks';
import { axiosInstance } from '../api';

export default function SignUpPage() {
  const { value: emailValue, onChange: onEmailChange } = useInput('');
  const { value: passwordValue, onChange: onPasswordChange } = useInput('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateEmail(emailValue) || !validatePassword(passwordValue)) {
      alert('실패하였습니다');
      return;
    } else {
      try {
        const response = await axiosInstance.post('/auth/signup', {
          email: emailValue,
          password: passwordValue,
        });
        console.log(response);
        alert('성공하였습니다');
        navigate('/signin');
      } catch (error) {
        console.log(console.error());
        alert('실패하였습니다');
      }
    }
  };

  return (
    <div>
      <h2>🏠 회원가입 페이지</h2>
      <AuthForm
        handleSubmit={handleSubmit}
        emailValue={emailValue}
        passwordValue={passwordValue}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
      />
    </div>
  );
}
