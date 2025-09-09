# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1. React Router 설치 명령어
npm install react-router-dom

2. Router 컴포넌트 생성
/src/routes/Router.jsx

3. main.jsx에 App 컴포넌트 대신 Router 컴포넌트로 변경

4. 라우터로 관리하고 싶은 컴포넌트를 만듦

5. 라우터 컴포넌트의 라우터 객체 정의를 HTML 구조에 맞게 설정함

<!-- Redux -->

상세 > 기능별로 컴포넌트 쪼개기도 함

<!-- 상태 관리 라이브러리, 중앙 집중식 상태관리 패턴 구현 -->
<!-- 기본적으로 포함된 것 아님, 라이브러리임 -->
1. Redux 설치 
npm install @reduxjs/toolkit react-redux

2. Redux Store 생성
경로 예시: src/store/store.js

3. Slices 생성
경로 예시: src/store/slices-modules-둘 중 상관 없음/**

4. 생성한 Slices를 Store에 추가

5. main.jsx에 React Redux <Provider> 추가 (최상위 컴포넌트일 것, StrictMode를 제외한 최상위 컴포넌트일 것)

6. 사용

<!-- Redux Thunk -->
1. Redux Thunk 설치
npm install redux-thunk

2. Redux Thunk 파일 생성
경로는 store 안에 넣거나/ store와 형제 요소처럼

3. 해당 Slice에 'extraReducers' 추가