![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=원티드%20프리온보딩%2011차%201주차%20과제&fontSize=45)

<br/>

# 🚀 배포

### [원티드 프리온보딩 인턴십 1주차 과제 - 13팀 배포 링크](https://pre-onboarding-11th-1-13.netlify.app/)

<br/>

## 👨‍👧‍👦 13팀 소개

> 팀원 ( 👉 이미지 클릭시 개인 레포지토리로 이동 )

| [<img src="https://avatars.githubusercontent.com/u/84329979?s=400&u=88239052b0bc310a6dd2aa67894134272f49498d&v=4" width="120px"/> ](https://www.github.com/gamangee) | [<img src="https://avatars.githubusercontent.com/u/117294002?s=96&v=4" width="120px" /> ](https://www.github.com/www-r) | [<img src="https://avatars.githubusercontent.com/u/119585339?s=96&v=4" width="120px" /> ](https://www.github.com/dalkey23) | [<img src="https://avatars.githubusercontent.com/u/69967974?s=96&v=4" width="120px" /> ](https://www.github.com/als982001) | [<img src="https://avatars.githubusercontent.com/u/102499959?s=96&v=4" width="120px" /> ](https://www.github.com/yousunzoo) | [<img src="https://avatars.githubusercontent.com/u/109938280?s=96&v=4" width="120px" /> ](https://www.github.com/5wintae) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|                                                                          **[팀장] 장문정**                                                                           |                                                       **김영은**                                                        |                                                         **박재희**                                                         |                                                         **주재민**                                                         |                                                         **유선주**                                                          |                                                        **오승택**                                                         |

<br/>

## 🗓️ 프로젝트 기간

2023.6.27 ~ 2023.6.30 (4일)

<br/>

## 🪄 과제 진행 방식

1. 먼저 각자 과제를 구현해보고 코드를 토대로 PR를 남기며 매일 아침 10시에 코드리뷰를 진행하였습니다. 서로 궁금한 부분들을 자유롭게 물어보고 더 나은 방식은 없는지 토론하며 Best Practice를 함께 선정하였습니다. 자신의 코드에서 부족한 부분이 무엇인지를 채워나가면서 끊임없이 고민하는 시간을 가졌습니다.
2. 기타 세부 진행 과정과 커밋 컨벤션, 회의록, 에러로그는 레포지토리 [Wiki](https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/wiki)에 정리하였습니다.

<br/>

### 👉 [Wiki 바로가기](https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/wiki)

<br/>

## 🌈 실행 방법

```bash
    $ git clone https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13.git
    $ cd pre-onboarding-11th-1-13
    $ npm install
    $ npm start
```

<br/>

## 📚 기술스택

<br />

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![typescript](https://img.shields.io/badge/typescript-4.8.2-3178C6?logo=typescript)
![styledComponents](https://img.shields.io/badge/styled--components-6.0.0-DB7093?logo=styledcomponents)

- 선정 이유

  - React
    - Virtual DOM을 활용하여 빠른 렌더링이 가능
    - 단방향 데이터 바인딩을 통한 디버깅이 용이
  - TypeScript
    - 정적 타입 지원하므로 컴파일 단계에서 오류를 사전에 포착할 수 있으며 이를 통해 미리 디버깅이 가능함
    - 여러가지 패러다임을 활용할 수 있음 (절차지향, 객체지향, 함수형)
  - Styled-Components
    - CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동적으로 생성하기에 코드 경량화에 효과적
    - 스크립트에성의 상수와 함수를 쉽게 공유하여 props를 활용한 조건부 렌더링에 용이
    - 컴포넌트화 시켜 다른곳에서 사용 가능
    - 컴포넌트 기반 개발 방법에 적합하고 가장 많이 사용되는 CSS-in-JS 라이브러리

<br />

# 👀 과제 결과물 프리뷰(시연영상)

<br/>

# ✨ 고민했던 부분

## 1.

<br/>

## 2.

<br/>

## 3.

<br/>

<br/>

# 📂 폴더 구조

```
src
 ┣ api
 ┃ ┣ api.js
 ┃ ┣ authApi.js
 ┃ ┗ todoApi.js
 ┣ hooks
 ┃ ┣ useAuth.jsx
 ┃ ┗ useHandleUserInfo.jsx
 ┣ pages
 ┃ ┣ components
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┗ AuthForm.jsx
 ┃ ┃ ┣ todo
 ┃ ┃ ┃ ┣ CreateTodo.jsx
 ┃ ┃ ┃ ┣ TodoItem.jsx
 ┃ ┃ ┃ ┗ TodoLists.jsx
 ┃ ┃ ┗ Button.jsx
 ┃ ┣ NotFoundPage.jsx
 ┃ ┣ SignInPage.jsx
 ┃ ┣ SignUpPage.jsx
 ┃ ┗ TodoListPage.jsx
 ┣ routes
 ┃ ┣ Root.jsx
 ┃ ┗ router.jsx
 ┣ App.jsx
 ┣ GlobalStyle.js
 ┗ main.jsx
```

<br/>
