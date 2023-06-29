import { useNavigate } from 'react-router-dom';
import useHandleUserInfo from '@/hooks/useHandleUserInfo';
import { signUpApi, signInApi } from '@/api/authApi';
import AuthButton from './AuthButton';
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';

export default function AuthForm({ title, onSubmit }) {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [userInfo, handleUserInfo] = useHandleUserInfo();

  const isValid = userInfo.email.includes('@') && userInfo.password.length >= 8;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await onSubmit(userInfo);
      if (onSubmit === signUpApi && response.status !== 201) {
        alert(`${title} 실패하였습니다.`);
        return;
      }

      if (onSubmit === signInApi && response.status !== 200) {
        alert(`${title} 실패하였습니다.`);
        return;
      }

      if (onSubmit === signInApi) {
        const access_token = response.data.access_token;
        // 로그인
        login(access_token);
        navigate('/todo');
      }

      alert(`${title} 성공하였습니다.`);
      navigate('/signin');
    } catch (error) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <div>
          <label htmlFor="email">이메일 </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfo}
            data-testid="email-input"
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호 </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserInfo}
            data-testid="password-input"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <AuthButton disabled={!isValid} buttonText={title} />
      </form>
    </div>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};
