![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=원티드%20프리온보딩%2011차%201주차%20과제&fontSize=45)

<br/>

# 목차

[1. 배포](#배포)
<br/>
[2. 팀 소개](#13팀-소개)
<br/>
[3. 과제 진행 방식](#과제-진행-방식)
<br/>
[4. 프로젝트 실행 방법](#실행-방법)
<br/>
[5. 기술 스택](#기술스택)
<br/>
[6. 커밋 컨벤션](#커밋-컨벤션)
<br/>
[7. 개인 구현 로직](#개인-구현-로직)
<br/>
[8. 기능별 Best Practice](#기능별-best-practice-선정과-이유)
<br/>

> [1. 라우팅 설정](#1-라우팅-설정) <br/> [2. axios를 이용한 api 관련 함수](#2-axios를-이용한-api-관련-함수) <br/> [3. token 설정과 리다이렉트](#3-token-설정과-리다이렉트) <br/> [4. authForm으로 컴포넌트 재사용](#4-authform으로-컴포넌트-재사용) <br/> [5. [Custom Hook] useHandleUserInfo](#5-custom-hook-usehandleuserinfo) <br/> [6. [Custom Hook] useHandleTodo](#6-custom-hook-usehandletodo) <br/> [7. [Custom Hook] useSetTodoByResponse](#7-custom-hook-usesettodosbyresponse)

[10. 회고](#회고)

<br/>

# 배포

### [원티드 프리온보딩 인턴십 1주차 과제 - 13팀 배포 링크](https://creative-pixie-6613f8.netlify.app/)

<br/>

## 13팀 소개

> 팀원 ( 👉 이미지 클릭시 개인 레포지토리로 이동 )

| [<img src="https://avatars.githubusercontent.com/u/84329979?s=400&u=88239052b0bc310a6dd2aa67894134272f49498d&v=4" width="120px"/> ](https://www.github.com/gamangee) | [<img src="https://avatars.githubusercontent.com/u/117294002?s=96&v=4" width="120px" /> ](https://www.github.com/www-r) | [<img src="https://avatars.githubusercontent.com/u/119585339?s=96&v=4" width="120px" /> ](https://www.github.com/dalkey23) | [<img src="https://avatars.githubusercontent.com/u/69967974?s=96&v=4" width="120px" /> ](https://www.github.com/als982001) | [<img src="https://avatars.githubusercontent.com/u/102499959?s=96&v=4" width="120px" /> ](https://www.github.com/yousunzoo) | [<img src="https://avatars.githubusercontent.com/u/109938280?s=96&v=4" width="120px" /> ](https://www.github.com/5wintaek) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|                                                                          **[팀장] 장문정**                                                                           |                                                       **김영은**                                                        |                                                         **박재희**                                                         |                                                         **주재민**                                                         |                                                         **유선주**                                                          |                                                         **오승택**                                                         |

<br/>

## 프로젝트 기간

2023.6.27 ~ 2023.6.30 (4일)

<br/>

## 과제 진행 방식

1. 먼저 각자 과제를 다시 구현해보면서 어떻게하면 좋은 코드를 작성할 수 있을지 고민하였습니다.
2. 코드를 토대로 PR를 남기며 매일 아침 10시에 코드 리뷰를 진행하였습니다.
3. 서로에게 궁금한 부분들을 자유롭게 물어보고 더 나은 방식은 없는지 토론하며 Best Practice를 함께 선정하였습니다.
4. 자신의 코드에서 부족한 부분이 무엇인지를 채워나가면서 끊임없이 고민하는 시간을 가졌습니다.
5. 기타 세부 진행 과정과 [커밋 컨벤션](https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98), [회의록](https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/wiki/%ED%9A%8C%EC%9D%98%EB%A1%9D), [에러로그](https://lean-mahogany-686.notion.site/Error-Log-49620bb25fd34750973266455a3b9786)는 레포지토리 위키에 정리하였습니다.
   👉 [Wiki 바로가기](https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/wiki)

<br/>

## 실행 방법

```bash
    $ git clone https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13.git
    $ cd pre-onboarding-11th-1-13
    $ npm install
    $ npm run dev
```

<br/>

## 기술스택

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![javascript](https://img.shields.io/badge/javascript-ES6-F7DF1E?logo=javascript)
![styledComponents](https://img.shields.io/badge/styled--components-6.0.0-DB7093?logo=styledcomponents)
![reactrouter](https://img.shields.io/badge/react--router--dom-6.14.0-CA4245?logo=reactrouter)
![axios](https://img.shields.io/badge/axios-1.4.0-5A29E4?logo=axios)

<br/>

## 커밋 컨벤션

- `Init` : 초기화
- `Feat` : 기능개발
- `Fix` : 버그 or 오류 발생
- `Docs` : 문서 작성 및 수정 README.md 등
- `Design` : HTML, CSS 등 사용자 UI 디자인 변경
- `Refactor` : 코드 리팩토링(서울로 가는데 택시탈지, 버스탈지 바꾸는거)
- `Style` : 컴포넌트 스타일 및 테마 변경 등의 수정 사항 (ex: 주석 변경, 코드 포맷 변경, 세미콜론 누락)
- `Merge`: merge를 위한 작업
- `Chore` : 빌드 작업, 패키지 관리자 구성 등 업데이트
- `Remove` : 파일의 삭제가 생긴 경우

> 깔끔하고 직관적인 git-moji 사용을 고려해보았지만,
> 초기 러닝커브가 높은 점과, 프로젝트 최적의 성능과 속도를 원하기에 배제하였습니다.

<br/>

## 개인 구현 로직

| Name   | Auth PR URL                                                           | Todo PR URL                                                            |
| ------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 김영은 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/5 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/14 |
| 장문정 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/1 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/10 |
| 오승택 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/2 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/11 |
| 유선주 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/3 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/7  |
| 박재희 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/4 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/12 |
| 주재민 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/6 | https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/pull/13 |

> 각자 작업한 코드 PR을 올려서 팀원들이 보면서 자유롭게 의견을 남길 수 있도록 하였습니다.

<br />

# 기능별 Best Practice 선정과 이유

### 1. 라우팅 설정

```
// router.jsx
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, path: '/', element: <App /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/signin', element: <SignInPage /> },
      { path: '/todo', element: <TodoListPage /> },
    ],
  },
]);
```

`토론 및 결론`

- react-router-dom 버전 6의 children 속성을 사용하여 path를 보기 쉽게 관리하였습니다.
- Root 컴포넌트에서 Outlet을 리턴하여 하위 페이지인 로그인, 회원가입, 투두리스트에 전역적으로 로그인 여부에 따른 리다이렉트 설정을 한번에 적용하였습니다.

<br/>

### 2. axios를 이용한 api 관련 함수

```

const getAxiosInstance = () => {
  const config = {
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(config);

  instance.interceptors.request.use(
    request => {
      const access_token = localStorage.getItem('access_token');
      // 요청을 보내기 전에 localStorage에서 'access_token'이 있다면
      if (access_token)
        // 요청 헤더에 'Authorization' 헤더로 추가
        request.headers.Authorization = `Bearer ${access_token}`;
      return request;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosInstance = getAxiosInstance();

// api 함수 간소화
export const apiRequest = async (url, method, data) => {
  try {
    const response = await axiosInstance.request({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    alert(error.response.data.message);
  }
};

// auth apis
export const signUpApi = async userInfo => {
  return await apiRequest('/auth/signup', 'post', userInfo);
};

export const signInApi = async userInfo => {
  return await apiRequest('/auth/signin', 'post', userInfo);
};

// todo apis
export const getTodosApi = async () => {
  return await apiRequest('/todos', 'get');
};

export const createTodoApi = async newTodo => {
  return await apiRequest('/todos', 'post', newTodo);
};

export const updateTodoApi = async (id, updateTodo) => {
  return await apiRequest(`/todos/${id}`, 'put', updateTodo);
};

export const deleteTodoApi = async id => {
  return await apiRequest(`/todos/${id}`, 'delete');
};
```

`설명`

- 요청 헤더를 응답이 전송되기 전,후에 수정하여 응답 데이터를 변환할 수 있는 axios interceptor를 적용하였습니다. 요청을 보내기 전에 로컬스토리지에 토큰이 있다면 axios 헤더에 자동으로 토큰을 추가하여 토큰 유무에 따라 2개의 함수를 만들지 않고도 처리할 수 있게 되었습니다.
- 또한 axios 코드에서 반복적으로 사용되는 파라미터(url, method, data)만 받으면 요청을 응답하는 apiRequest 함수를 만들었습니다. axios 요청을 보낼 때마다 반복되는 코드를 apiRequest 함수 내에 한 곳에 모아두면서 중복을 제거하였습니다.

`토론 및 결론`

- getAxiosInstance 라는 함수를 만들어 요청을 할 때 공통적으로 들어가는 부분을 묶어서 채택하였습니다.
- interceptor 라는 것을 통해서 access token 이 있을때만 header를 추가적으로 넣어주는 로직이 좋아 채택하였습니다.
- 반복적인 axios 코드를 하나의 유틸함수로 묶어서 처리할 수 있는 로직이 좋아 채택하였습니다.

<br />

### 3. token 설정과 리다이렉트

#### 3-1. 로그인, 로그아웃에 따른 localStorage, Access token 관련 함수

```
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
```

3-2. 토큰 여부에 따른 리다이렉트 처리

```
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
```

`토론 및 결론`

- 반복적으로 사용하는 localStorage 관련 함수들을 모아 커스텀 hook을 만들어서 사용하는게 인상깊었습니다.
- auth 관련 API 함수와 함께 isAuthenticated라는 상태를 만들어 isAuthenticated를 통해 페이지 접근 제한을 간편하게 구현할 수 있었습니다.

<br/>

### 4. AuthForm으로 컴포넌트 재사용

```
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
        alert(`${title} 실패하였습니다.`);
        return;
      }

      if (onSubmit === signInApi && response.status !== 200) {
        alert(`${title} 실패하였습니다.`);
        return;
      }

      if (onSubmit === signInApi) {
        const access_token = response.data.access_token;
        // useAuth 커스텀 훅을 사용하여 로그인 기능 추가
        login(access_token);
        navigate('/todo');
      }

      alert(`${title} 성공하였습니다.`);
      navigate('/signin');
    } catch (error) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <div>
          <label htmlFor="email">이메일 </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfo}
            data-testid="email-input"
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호 </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserInfo}
            data-testid="password-input"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <AuthButton disabled={!isValid} buttonText={title} />
      </form>
    </div>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};
```

`코드 설명`

- 공통적으로 사용하는 입력폼을 AuthForm 컴포넌트로 따로 분리시켜 title과 apiName을 props로 받게 구현하였습니다.
- AuthButton 컴포넌트로 버튼만 따로 분리시킨 후 React.memo 하여 프로퍼티가 변경된 경우에만 랜더링 되도록 변경하여 랜더링 최적화하였습니다.

`토론 및 결론`

- State사용을 간소화하고 유틸함수 및 커스텀훅에서 가져온 후 코드를 작성하셔서 읽기가 굉장히 편했습니다.

<br/>

### 5. [Custom Hook] useHandleUserInfo

```
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
```

`토론 및 결론`

- 회원가입과 로그인 페이지에서 입력폼이 동일하고 이를 공용으로 사용하고 있다는 것을 발견하였습니다. 컴포넌트 재사용을 위해 AuthForm이라는 컴포넌트를 분리하는 동시에 사용자가 입력하는 이메일과 비밀번호 입력폼 또한 동일하게 재사용하고 있다는 것이 눈에 띄였습니다.

- 이메일과 비밀번호 2개 모두 유효성 검사에 통과해야 버튼이 활성화 된다는 점에서 useState에 객체 형태로 담아 하나로 관리하였고, input의 value값을 담아주는 onChange도 useCallback에 넣어주어 사용자 입력폼이 수시로 변화는 과정 에서 불필요한 랜더링을 막았습니다.

<br/>

### 6. [Custom Hook] useHandleTodo

```
const useHandleTodo = ({ data, refetch }) => {
  const [todo, setTodo] = useState({ ...data });
  const [isEditMode, setIsEditMode] = useState(false);
  const handleCheckbox = async () => {
    const editedTodo = { todo: todo.todo, isCompleted: !todo.isCompleted };
    await updateTodo({ todo: editedTodo, id: todo.id });
    setTodo({ ...todo, isCompleted: !todo.isCompleted });
  };

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  const handleCancel = () => {
    handleEditMode();
    setTodo({ ...todo });
  };

  const handleDelete = async () => {
    const res = await deleteTodo(todo.id);
    if (res.status === 204) {
      refetch();
      toast('삭제되었습니다.');
    }
  };

  const handleEdit = e => {
    const { value } = e.target;
    setTodo({ ...todo, todo: value });
  };

  const handleSubmit = async () => {
    const editedTodo = { todo: todo.todo, isCompleted: todo.isCompleted };
    const res = await updateTodo({ todo: editedTodo, id: todo.id });
    if (res.status === 200) {
      toast('수정되었습니다.');
      setIsEditMode(!isEditMode);
    } else {
      toast('요청에 실패했습니다. 다시 시도해주세요!');
    }
  };
  return [
    todo,
    isEditMode,
    handleEditMode,
    handleCancel,
    handleCheckbox,
    handleDelete,
    handleEdit,
    handleSubmit,
  ];
};

export default useHandleTodo;
```

`설명`

- 투두 수정모드, 삭제, 체크박스, 투두 수정 요청 기능을 useHandleTodo라는 커스텀 훅에 한꺼번에 담았습니다.
- 컴포넌트에는 컴포넌트 구현 로직만 남아있게 해 가독성을 높였습니다.

`토론 및 결론`

- 직관적으로 handle 함수들을 모아서 사용하기 쉽게 관리를 하여 남들이 보기에도 편한 코드라 생각하여 채택을 하게 되었습니다.

<br/>

### 7. [Custom Hook] useSetTodosByResponse

```
const useSetTodosByResponse = () => {
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const setTodosByResponse = async () => {
    setIsLoading(true);
    const { data } = await getTodos();
    setTodos(data);
    setIsLoading(false);
    if (data?.statusCode === 401) {
      setIsError(true);
    }
  };

  useEffect(() => {
    setTodosByResponse();
  }, []);

  return [todos, isLoading, isError, setTodosByResponse];
};

export default useSetTodosByResponse;
```

`설명`

- 투두리스트를 가져오는 API 함수의 상태에 따라 isLoading, isError, todos를 반환하는 커스텀 훅을 작성했습니다.
- API가 실행되기 전 isLoading = true가 되고, 데이터를 가져오고 난 후에 todos에 데이터가 세팅되면 isLoading = false가 됩니다.
- statusCode === 401 즉, 응답 값이 에러면 isError = true를 반환합니다.
- API 함수 상태에 따라 투두리스트를 렌더링하거나, 로딩 컴포넌트를 띄워주거나, 에러 컴포넌트를 띄워줄 수 있습니다.
- setTodosByResponse 함수도 리턴하여 투두를 삭제/변경 요청을 하고 난 후 업데이트된 투두 리스트를 refetch할 수 있도록 구현했습니다.

`토론 및 결론`

- 커스텀 훅을 통해 컴포넌트에는 최대한 컴포넌트 구현 로직만 남도록 하고, API 상태에 따른 표현을 isLoading, isError라는 보다 간결한 코드로 작성할 수 있어서 이 코드를 채택하게 되었습니다.

## 📂 폴더 구조

```
├── package-lock.json
├── package.json
├── public
│   └── assets
├── src
│   ├── App.jsx
│   ├── GlobalStyle.js
│   ├── api // 통신
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── authApi.js
│   │   └── todo.js
│   ├── components // 컴포넌트
│   │   ├── AccountForm.jsx
│   │   ├── AddTodoForm.jsx
│   │   ├── EditModeLi.jsx
│   │   ├── NormalLi.jsx
│   │   ├── Spinner.jsx
│   │   ├── TodoLi.jsx
│   │   └── TodoList.jsx
│   ├── hooks // 생명 주기와 관련된 함수
│   │   ├── useAuth.jsx
│   │   ├── useHandleTodo.js
│   │   ├── useHandleUserInfo.jsx
│   │   └── useSetTodosByResponse.js
│   ├── main.jsx
│   ├── pages // 화면 페이지
│   │   ├── NotFoundPage.jsx
│   │   ├── SignInPage.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── TodoListPage.jsx
│   │   └── components
│   │       ├── AuthButton.jsx
│   │       └── AuthForm.jsx
│   └── routes // 라우팅 경로
│       ├── Root.jsx
│       └── router.jsx
└── vite.config.js
```

<br/>

## 회고

### 1. 타입스크립트 미사용

1. 대부분의 팀원들이 타입스크립트에 익숙하지 않아 이번 과제에서는 자바스크립트로 과제를 구현하였습니다.
2. 그러나 작업 중에 많은 타입 오류를 만나서 디버깅하는데 오히려 시간을 쓴 거 같아 컴파일 단계에서 오류를 사전에 알 수 있는 타입스크립트를 배워서 적용해야겠다는 필요성을 느끼게 되었습니다.
3. 그래도 eslint에서 props에 타입을 지정해주지 않으면 오류가 뜨게 설정해두었기에 prop-types를 설정해주어 타입 오류를 줄이려 노력했습니다.

### 2. 에러 로그 작성과 커밋 습관 부족

1. 에러 로그라는 것을 초기에는 작성하였으나, 리팩토링을 하는 과정에서 습관화가 되지 않아 작성을 많이 하지 못하였습니다.
2. 작업 중에 기능이 변경된 코드들을 커밋에 남기면서 작업을 진행했어야 했는데 습관화가 되지 않아 세세하게 기록을 하지 못하였습니다.
3. 이를 해결하기 위해 다음 과제에서 에러 로그 작성과 커밋 습관 개선을 위해 깃허브 디스커션을 활용하고자 합니다.
4. 에러 로그 작성이라는 거창한 숙제 대신 개발 과정에서 발생한 에러와 관련된 문제를 공유하고 토론하고 기록해 볼 예정입니다.
5. 인턴십의 동료학습이 주된 키워드인 만큼 디스커션을 활용하여 팀원들과 원활한 소통을 유지하고 부족한 부분을 채워나가려고 합니다.
