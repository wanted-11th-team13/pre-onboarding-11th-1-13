import { useEffect, useState } from 'react';

export default function useAuth() {
  // 로컬스토리지 토큰 유무
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    // 로컬스토리지에 토큰이 존재하면 isAuthenticated 값이 true, 아닐경우 false로 변경
    setIsAuthenticated(!!token);
  }, [isAuthenticated]);

  // 로그인 기능
  const login = token => {
    localStorage.setItem('access_token', token);
    setIsAuthenticated(true);
  };

  // 로그아웃 기능
  const logout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}
