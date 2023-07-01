import { Link } from 'react-router-dom';
import Background from './pages/components/Background';
import Container from './pages/components/Container';
import Button from './pages/components/Button';
import thumbnail from './assets/thumbnail.gif';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 20px;
  height: 30px;
  position: absolute;
  bottom: 30px;
  padding: 10px 20px;
  height: 50px;
  font-size: 30px;
`;

export default function App() {
  return (
    <Background>
      <Container>
        <div className="image">
          <img src={thumbnail} alt="thumbnail" />
        </div>
        <Buttons>
          <Link to="/signin">
            <Button> 로그인 페이지로 이동</Button>
          </Link>
          <Link to="/signup">
            <Button>회원가입 페이지로 이동</Button>
          </Link>
        </Buttons>
        <Toaster />
      </Container>
    </Background>
  );
}
