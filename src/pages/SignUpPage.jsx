import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { postNewAccount } from '../api/auth';
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

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleStartJoin = async event => {
    event.preventDefault();

    const result = await postNewAccount(email, password);

    if (result === true) {
      navigate('/signin');
    } else {
      alert('회원가입 실패');
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
      <Header>회원가입 🤗</Header>
      <Container>
        <Row>
          <Logo>🤗</Logo>
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
            onClick={handleStartJoin}
          >
            회원가입
          </AuthButton>
        </Row>
      </Container>
      <PageButton onClick={() => navigate('/signin')}>로그인하기</PageButton>
    </Wrapper>
  );
}
