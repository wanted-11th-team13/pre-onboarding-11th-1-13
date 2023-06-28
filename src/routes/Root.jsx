import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function Root() {
  const { pathname } = useLocation();
  const access_token = localStorage.getItem('access_token');
  const isTodoPage = pathname === '/todo';

  // 로그인 여부에 따른 리다이렉트
  if ((isTodoPage && !access_token) || (!isTodoPage && access_token)) {
    const redirectTo = isTodoPage ? '/signin' : '/todo';
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
}
