import { Link } from 'react-router-dom';
import { handleLogout } from './api/api';

function App() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
      <Link to="/todo">Todo 리스트</Link>
      {accessToken && <span onClick={handleLogout}>로그아웃</span>}
    </>
  );
}

export default App;
