import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/api/api';

export default function Singup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const navigate = useNavigate();

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
      await axiosInstance.post('/auth/signup', { email, password });
      navigate('/signin');
    } catch (error) {
      console.log(error);
      alert('다시입력해주세요');
    }
  };

  useEffect(() => {
    const hasToken = localStorage.getItem('access_token');
    if (hasToken) {
      navigate('/todo');
    }
  }, []);

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            data-testid="email-input"
            type="text"
            placeholder="EMAIL"
            name="email"
            onChange={checkedEmail}
          />
        </div>
        <div>
          <input
            data-testid="password-input"
            type="password"
            placeholder="PASSWORD"
            name="password"
            onChange={checkedPassword}
          />
        </div>
        <button
          data-testid="signup-button"
          type="submit"
          disabled={isEmail && isPassword ? false : true}
        >
          SIGNUP
        </button>
      </form>
    </div>
  );
}
