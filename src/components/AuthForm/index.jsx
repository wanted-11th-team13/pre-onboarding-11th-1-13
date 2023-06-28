/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../common/SubmitButton';
import InputContainer from '../common/InputContainer';
import { postSignIn, postSignUp } from '../../api/api';
import { styled } from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function AuthForm({ title }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async () => {
    if (!email | !password) {
      alert(' 입력창을 다 채워주세요.');
      return null;
    }
    if (title === 'signin') {
      try {
        await postSignIn(email, password);
        navigate('/todo');
      } catch (error) {
        alert(error.data.message);
      }
    } else if (title === 'signup') {
      try {
        await postSignUp(email, password);
        navigate('/signin');
      } catch (error) {
        alert(error.data.message);
      }
    }
  };
  return (
    <Form className="authForm" onSubmit={submitHandler}>
      <h2>{title}</h2>
      <InputContainer
        label="email"
        condition="@를 포함해 주세요."
        state={emailState}
        setState={setEmailState}
        setInput={setEmail}
      />
      <InputContainer
        label="password"
        condition="8자리 이상으로 정해주세요."
        state={passwordState}
        setState={setPasswordState}
        setInput={setPassword}
      />
      <ButtonsContainer>
        <SubmitButton type="submit" onClick={submitHandler}>
          submit
        </SubmitButton>
      </ButtonsContainer>
    </Form>
  );
}
