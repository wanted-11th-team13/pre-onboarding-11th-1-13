import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import useHandleUserInfo from '@/hooks/useHandleUserInfo';
import { signUpApi, signInApi } from '@/api/authApi';
import AuthButton from '../AuthButton';
import styled from 'styled-components';
import { toast } from 'react-hot-toast';

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: auto;
  padding: 20px 20px 10px 20px;
  background-color: #fecbdd;
  width: 480px;
  height: 480px;
  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px;
    padding: 30px 0 50px;
  }
  .itemWrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    input {
      outline: none;
      border: none;
      border-radius: 5px;
      padding: 15px 70px 15px 25px;
      font-size: 20px;
    }
  }
`;
export const EmailContainer = styled.div``;

export const PasswordContainer = styled.div`
  position: relative;
  .passwordIcon {
    position: absolute;
    right: 10px;
    top: 39.5px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
`;

export const Label = styled.label`
  padding-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
`;
export const Message = styled.p`
  padding: 10px 0 0;
  height: 17px;
  color: red;
`;

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
        toast(`${title} 실패하였습니다.`);
        return;
      }

      if (onSubmit === signInApi && response.status !== 200) {
        toast(`${title} 실패하였습니다.`);
        return;
      }

      if (onSubmit === signInApi) {
        const access_token = response.data.access_token;
        // useAuth 커스텀 훅을 사용하여 로그인 기능 추가
        login(access_token);
        navigate('/todo');
      }

      toast(`${title} 성공하였습니다.`);
      navigate('/signin');
    } catch (error) {
      toast(`오류가 발생했습니다.\n다시 시도해주세요.`);
    }
  };

  return (
    <SignContainer>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <EmailContainer className="itemWrapper">
          <Label htmlFor="email">이메일 </Label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfo}
            data-testid="email-input"
            placeholder="이메일을 입력해주세요."
          />
        </EmailContainer>
        <PasswordContainer className="itemWrapper">
          <Label htmlFor="password">비밀번호 </Label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserInfo}
            data-testid="password-input"
            placeholder="비밀번호를 입력해주세요."
          />
        </PasswordContainer>
        <ButtonContainer>
          <AuthButton disabled={!isValid} buttonText={title} />
        </ButtonContainer>
      </form>
    </SignContainer>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};
