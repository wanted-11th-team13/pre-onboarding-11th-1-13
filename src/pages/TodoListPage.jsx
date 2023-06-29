import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function TodoListPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div>
      TodoListPage
      <button onClick={handleLogout}></button>
    </div>
  );
}
