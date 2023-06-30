import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { signin, signup } from '../api/auth';

function AccountForm() {
  const [account, setAccount] = useState({ email: '', password: '' });
  const [isValidate, setIsValidate] = useState({
    email: false,
    password: false,
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const leftHref = pathname === '/signup' ? '/signin' : '/signup';
  const leftLinkText =
    pathname === '/signup' ? '로그인하러 가기' : '회원가입하러 가기';
  const dataId = pathname === '/signup' ? 'signup-button' : 'signin-button';
  const rightLinkText = pathname === '/signup' ? '회원가입' : '로그인';

  const isDisabled =
    !account.email ||
    !account.password ||
    !isValidate.email ||
    !isValidate.password;

  const handleChange = e => {
    const { id, value } = e.target;
    setAccount({ ...account, [id]: value });
    if (id === 'email') {
      setIsValidate({
        ...isValidate,
        email: value.includes('@') ? true : false,
      });
    }
    if (id === 'password') {
      setIsValidate({
        ...isValidate,
        password: value.length >= 8 ? true : false,
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result =
      pathname === '/signup' ? await signup(account) : await signin(account);
    const { status, data } = result;
    if (status !== 201 && status !== 200) {
      toast(data?.message);
    }
    if (status === 201) {
      toast('회원가입이 완료되었습니다.');
      navigate('/signin');
    }
    if (status === 200) {
      localStorage.setItem('access_token', data?.access_token);
      toast('로그인되었습니다.');
      navigate('/todo');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            data-testid="email-input"
            id="email"
            onChange={handleChange}
            value={account.email}
            placeholder="test@test.com"
          />
          <p>이메일 형식에 맞게 입력해주세요.</p>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            data-testid="password-input"
            id="password"
            onChange={handleChange}
            value={account.password}
            placeholder="비밀번호를 입력해주세요"
          />
          <p>비밀번호를 8자리 이상 입력해주세요.</p>
        </div>
        <div>
          <Link to={leftHref}>{leftLinkText}</Link>
          <button data-testid={dataId} disabled={isDisabled}>
            {rightLinkText}
          </button>
        </div>
      </form>
    </>
  );
}

export default AccountForm;
