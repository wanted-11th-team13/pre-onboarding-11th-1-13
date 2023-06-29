import { AuthForm } from '@/components';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '@/utils';
import { useInput } from '@/hooks';
import { axiosInstance } from '../api';
// import { RegisterButton } from '@/components';

export default function SignInPage() {
  const { value: emailValue, onChange: onEmailChange } = useInput('');
  const { value: passwordValue, onChange: onPasswordChange } = useInput('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   setValid(isValidEmail && isValidPassword);
  // }, [isValidEmail, isValidPassword]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/auth/signin', {
        email: emailValue,
        password: passwordValue,
      });
      console.log(res);
      const token = res.data.access_token;
      localStorage.setItem('token', token);
      console.log('성공');
      // window.location.replace('/todo');
      navigate('/todo');
      if (validateEmail(emailValue) && validatePassword(passwordValue)) {
        alert('로그인 성공');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      if (!validateEmail(emailValue) || !validatePassword(passwordValue)) {
        alert('로그인실패');
      }
    }
  };

  return (
    <div>
      <h2>🔑 로그인 페이지</h2>
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
