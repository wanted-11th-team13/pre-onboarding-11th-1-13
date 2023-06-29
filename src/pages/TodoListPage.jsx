import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function TodoListPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    // useAuth 커스텀 훅을 사용하여 로그인 기능 추가
    logout();
    navigate('/');
  };
  return (
    <div>
      <h1>TodoListPage</h1>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}
