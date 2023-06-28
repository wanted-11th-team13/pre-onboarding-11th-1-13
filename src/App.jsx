import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Link to="/signin">
        <button> 로그인 페이지로 이동</button>
      </Link>
      <Link to="/signup">
        <button>회원가입 페이지로 이동</button>
      </Link>
    </div>
  );
}
