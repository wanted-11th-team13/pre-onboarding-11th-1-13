import { useState } from 'react';

export default function SignInPage() {
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

  return (
    <div className="flex justify-center items-center h-screen text-center">
      <form>
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
