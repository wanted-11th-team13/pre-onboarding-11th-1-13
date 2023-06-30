/* eslint-disable react/prop-types */
import { styled } from 'styled-components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInApi, signUpApi } from '../../api/auth';
import Button from '@/components/common/Button';
import InputContainer from '../common/InputContainer';
import { toast } from 'react-hot-toast';

const ButtonsContainer = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function AuthForm({ title }) {
  const [userAccount, setUserAccount] = useState({ email: '', password: '' });
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    if (!userAccount.email | !userAccount.password) {
      toast('다시 작성해주세요.');
      return null;
    }
    if (title === 'signin') {
      try {
        await signInApi(userAccount);
        toast('로그인 성공했습니다.');
        // await postSignIn(userAccount.email, userAccount.password);
        navigate('/todo');
      } catch (error) {
        toast(error.data.message);
      }
    } else if (title === 'signup') {
      try {
        await signUpApi(userAccount);
        toast('가입이 완료되었습니다.');
        // await postSignUp(userAccount.email, userAccount.password);
        navigate('/signin');
      } catch (error) {
        toast(error.data.message);
      }
    }
  };
  return (
    <Form className="authForm" onSubmit={submitHandler}>
      <h2>{title}</h2>
      <InputContainer
        label="email"
        condition="@를 포함해 주세요."
        userAccount={userAccount}
        setUserAccount={setUserAccount}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      <InputContainer
        label="password"
        condition="8자리 이상으로 정해주세요."
        userAccount={userAccount}
        setUserAccount={setUserAccount}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      <ButtonsContainer>
        {title === 'signup' && (
          <Button type="button" onClick={() => navigate('/signin')}>
            back
          </Button>
        )}
        <Button
          type="submit"
          onClick={submitHandler}
          disabled={isValid.email && isValid.password ? false : true}
        >
          submit
        </Button>
      </ButtonsContainer>
    </Form>
  );
}
