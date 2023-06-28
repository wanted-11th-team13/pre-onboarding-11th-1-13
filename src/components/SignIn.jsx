import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosInstance } from '../api/api';
import * as S from './AuthForm.styles'

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const checkedEmail = e => {
    const curEmail = e.target.value;
    if (curEmail.includes('@')) {
      setEmail(curEmail);
      setIsEmail(true);
    } else {
      setEmail('');
      setIsEmail(false);
    }
  };

  const checkedPassword = e => {
    const curPassword = e.target.value;
    if (curPassword.length >= 8) {
      setPassword(curPassword);
      setIsPassword(true);
    } else {
      setPassword('');
      setIsPassword(false);
    }
  };

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/auth/signin', {
        email,
        password,
      });

      localStorage.setItem('access_token', response.data.access_token);
      navigate('/todo');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const hasToken = localStorage.getItem('access_token');
    if (hasToken) {
      navigate('/todo');
    }
  }, []);

  return (
    <S.Container>
      <h1>WELCOME</h1>
      <S.SignFrom onSubmit={submitHandler}>
        <S.IdLine>
          <input
            data-testid="email-input"
            type="text"
            placeholder="EMAIL"
            name="email"
            onChange={checkedEmail}
          />
        </S.IdLine>
        <S.PwLine>
          <input
            data-testid="password-input"
            type="password"
            placeholder="PASSWORD"
            name="password"
            onChange={checkedPassword}
          />
        </S.PwLine>
        <button
          data-testid="signin-button"
          type="submit"
          disabled={isEmail && isPassword ? false : true}
        >
          LOGIN
        </button>
      </S.SignFrom>
    </S.Container>
  );
}
