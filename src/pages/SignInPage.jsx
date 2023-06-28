import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { handleLogin } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { validEmail, validPassword } from '../api/api';
import AuthButton from '../Components/AuthButton';
import AuthInput from '../Components/AuthInput';
import PageButton from '../Components/PageButton';
import Container from '../Components/AuthContainer';

const Wrapper = styled.main`
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  height: 50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Logo = styled.h4`
  font-size: 100px;
`;

const Row = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleStartLogin = async event => {
    event.preventDefault();

    const accessToken = await handleLogin(email, password);

    if (accessToken) {
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
      navigate('/todo');
    } else {
      alert('계정 정보가 일치하지 않습니다.');
    }
  };

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));

    if (accessToken) {
      navigate('/todo');
    }
  }, []);

  return (
    <Wrapper>
      <Header>로그인 🙋</Header>
      <Container>
        <Row>
          <Logo>🙋</Logo>
        </Row>
        <Row>
          <AuthInput
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
          />
          <AuthInput
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
          />
        </Row>
        <Row>
          <AuthButton
            disabled={!(validEmail(email) && validPassword(password))}
            onClick={handleStartLogin}
          >
            로그인
          </AuthButton>
        </Row>
      </Container>
      <PageButton onClick={() => navigate('/signup')}>회원가입하기</PageButton>
    </Wrapper>
  );
}
