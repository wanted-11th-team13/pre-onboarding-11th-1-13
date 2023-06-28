import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInApi } from '@/api/authApi';

export default function SignInPage() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const isValid = userInfo.email.includes('@') && userInfo.password.length >= 8;

  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async e => {
    e.preventDefault();
    try {
      const response = await signInApi(userInfo);
      if (response.status !== 200) {
        alert('로그인에 실패하였습니다.');
        return;
      }

      const access_token = response.data.access_token;
      localStorage.setItem('access_token', access_token);
      alert('로그인을 성공하였습니다.');
      navigate('/todo');
    } catch (error) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-center">
      <form onSubmit={handleSignIn}>
        <h1 className="text-lg font-bold mb-5">로그인</h1>
        <div className="flex justify-between items-center">
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
        <button disabled={!isValid} data-testid="signin-button" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}
