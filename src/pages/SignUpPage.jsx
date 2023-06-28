import React, { useState } from 'react';
import styled from 'styled-components';
import { postNewAccount } from '../utils/UserFunctions';
import { useNavigate } from 'react-router-dom';
import { validEmail, validPassword } from '../utils/Functions';

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
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

const Container = styled.div`
  width: 500px;
  height: 500px;
  margin-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin: 10px 0;
  padding: 0 20px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
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

  return (
    <Wrapper>
      <Header>회원가입 🤗</Header>
      <Container>
        <Input
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
        />
        <Button
          disabled={!(validEmail(email) && validPassword(password))}
          onClick={handleStartJoin}
        >
          회원가입
        </Button>
      </Container>
    </Wrapper>
  );
}
