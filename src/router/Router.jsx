import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import List from "../components/List.jsx";
import Detail from "../components/Detail.jsx"
import NotFound from "../components/errors/NotFound.jsx";


const router = createBrowserRouter([

// 라우터정의 

{

//element속성: 해당 경로로 이동할 때 렌더링할 컴포넌트 지정
element: <App></App>,
chldren: [ //children 속성 : <Outlet>에 출력할 자식 컴포넌트 지정

{
  path: '/',
  loader: async () => {
    // 컴포넌트 외부에서 프로그래밍 방식으로 페이지 이동
    return redirect('/list');
  }
},
{
  path: '/list',
  element: <List></List>
},
{
  path: '/detail',
  element: <Detail></Detail>
},
{
  path: '*',
  element: <NotFound />

}

]

}
])


function  Router() {


  return <RouterProvider
   router = {router} />
}

export default Router




