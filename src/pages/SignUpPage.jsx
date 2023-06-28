import { useState } from 'react';
import { signUpApi } from '@/api/authApi';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
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

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const response = await signUpApi(userInfo);
      if (response.status !== 201) {
        alert('회원가입에 실패하였습니다.');
        return;
      }

      alert('회원가입을 성공하였습니다.');

      navigate('/signin');
    } catch (error) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-center">
      <form onSubmit={handleSignUp}>
        <h1 className="text-lg font-bold mb-5">회원가입</h1>
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
        <button disabled={!isValid} data-testid="signup-button" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
