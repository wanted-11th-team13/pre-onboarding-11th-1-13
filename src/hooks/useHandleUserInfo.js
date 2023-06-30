// ** useCallback **
// 랜더링 최적화에 도움을 주는 Hook
// 컴포넌트가 랜더링될 때마다 새로운 함수 인스턴스를 생성하는 것이 아니라,
// 의존성이 변경되지 않으면 이전에 생성된 함수 인스턴스를 재사용한다.

import { useState, useCallback } from 'react';

export default function useHandleUserInfo(
  initialState = { email: '', password: '' }
) {
  const [userInfo, setUserInfo] = useState(initialState);

  const handleUserInfo = useCallback(e => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return [userInfo, handleUserInfo];
}
