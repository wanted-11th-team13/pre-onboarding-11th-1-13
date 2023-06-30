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

![javascript]()
![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![react-router-dom]()
![axios]()
![react-hot-toast]()
![styledComponents](https://img.shields.io/badge/styled--components-6.0.0-DB7093?logo=styledcomponents)


<br />

## 커밋 컨벤션

- `Init` : 초기화
- `Feat` : 기능개발
- `Fix` : 버그 or 오류 발생
- `Docs` : 문서 작성 및 수정([README.md](http://readme.md/) 등)
- `Design` : HTML, CSS 등 사용자 UI 디자인 변경
- `Refactor` : 코드 리팩토링(서울로 가는데 택시탈지, 버스탈지 바꾸는거)
- `Style` : 컴포넌트 스타일 및 테마 변경 등의 수정 사항 (ex: 주석 변경, 코드 포맷 변경, 세미콜론 누락)
- `Merge`: merge를 위한 작업
- `Chore` : 빌드 작업, 패키지 관리자 구성 등 업데이트
- `Remove` : 파일의 삭제가 생긴 경우

> ➡️  깔끔하고 직관적인 git-moji 사용을 고려해보았지만,
초기 러닝커브가 높은 점과, 프로젝트 최적의 성능과 속도를 원하기에 배제하였습니다.


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
├── package-lock.json
├── package.json
├── public
│   └── assets
├── src
│   ├── App.jsx
│   ├── GlobalStyle.js
│   ├── api
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── authApi.js
│   │   └── todo.js
│   ├── components
│   │   ├── AccountForm.jsx
│   │   ├── AddTodoForm.jsx
│   │   ├── EditModeLi.jsx
│   │   ├── NormalLi.jsx
│   │   ├── Spinner.jsx
│   │   ├── TodoLi.jsx
│   │   └── TodoList.jsx
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useHandleTodo.js
│   │   ├── useHandleUserInfo.jsx
│   │   └── useSetTodosByResponse.js
│   ├── main.jsx
│   ├── pages
│   │   ├── NotFoundPage.jsx
│   │   ├── SignInPage.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── TodoListPage.jsx
│   │   └── components
│   │       ├── AuthButton.jsx
│   │       └── AuthForm.jsx
│   └── routes
│       ├── Root.jsx
│       └── router.jsx
└── vite.config.js
```

<br/>
