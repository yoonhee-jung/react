import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "../components/ProductList.jsx"
import TabUI from "../components/TabUI.jsx"

//라우터를 정의하는 라우터 객체 인스턴스를 생성


  const router = createBrowserRouter([
    {

      element: <App />, 
      children: [
 {
      path: '/', //라우팅 경로 설정
      element: <ProductList></ProductList> //렌더링 할 컴포넌트 지정


    },
    {
      path: '/test',
      element: <TabUI></TabUI>
     
    }

      ]

    }
   
  ])

  function Router() {
    return <RouterProvider router={router} />

  }



  export default Router