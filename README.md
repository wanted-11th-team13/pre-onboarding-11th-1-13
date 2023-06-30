![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=원티드%20프리온보딩%2011차%201주차%20과제&fontSize=45)

<br/>

# 목차

[1. 배포](#🚀-배포)
<br/>
[2. 팀 소개](#👨‍👧‍👦-13팀-소개)
<br/>
[3. 과제 진행 방식](#🪄-과제-진행-방식)
<br/>
[4. 프로젝트 실행 방법](#🌈-실행-방법)
<br/>
[5. 프리뷰(시연 영상)](#👀-과제-결과물-프리뷰시연영상)
<br/>
[6. 기술 스택](#📚-기술스택)
<br/>
[7. 커밋 컨벤션](#🤝-커밋-컨벤션)
<br/>
[8. 개인 구현 로직](#🙋‍♀️🙋‍♂️-개인-구현-로직)
<br/>
[9. 기능별 Best Practice](#👍-기능별-best-practice-선정과-이유)
<br/>

> [1. 라우팅 설정](#1-라우팅-설정) <br/> [2. axios를 이용한 api 관련 함수](#2-axios를-이용한-api-관련-함수) <br/> [3. token 설정과 리다이렉트](#3-token-설정과-리다이렉트) <br/> [4. authForm으로 컴포넌트 재사용](#4-authform으로-컴포넌트-재사용) <br/> [5. [Custom Hook] useHandleUserInfo](#5-custom-hook-usehandleuserinfo) <br/> [6. [Custom Hook] useHandleTodo](#6-custom-hook-usehandletodo) <br/> [7. [Custom Hook] useSetTodoByResponse](#7-custom-hook-usesettodosbyresponse)

[10. 회고](#🤔-회고)

<br/>

# 🚀 배포

### [원티드 프리온보딩 인턴십 1주차 과제 - 13팀 배포 링크](https://creative-pixie-6613f8.netlify.app/)

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

1. 먼저 각자 과제를 다시 구현해보면서 어떻게하면 좋은 코드를 작성할 수 있을지 고민하였습니다.
2. 코드를 토대로 PR를 남기며 매일 아침 10시에 코드 리뷰를 진행하였습니다.
3. 서로에게 궁금한 부분들을 자유롭게 물어보고 더 나은 방식은 없는지 토론하며 Best Practice를 함께 선정하였습니다.
4. 자신의 코드에서 부족한 부분이 무엇인지를 채워나가면서 끊임없이 고민하는 시간을 가졌습니다.
5. 기타 세부 진행 과정과 [커밋 컨벤션](https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98), [회의록](https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/wiki/%ED%9A%8C%EC%9D%98%EB%A1%9D), [에러로그](https://lean-mahogany-686.notion.site/Error-Log-49620bb25fd34750973266455a3b9786)는 레포지토리 위키에 정리하였습니다.
   👉 [Wiki 바로가기](https://github.com/wanted-11th-team13/pre-onboarding-11th-1-13/wiki)

<br/>
