import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProductList from './components/ProductList.jsx'
import './App.css'
import TabUI from './components/TabUI.jsx'
import { useState } from 'react';
import Router from './routes/Router.jsx'
import {Link,Outlet} from 'react-router-dom'




function App() {
  const [prodFlg, setProdFlg] = useState(true);
  const [tabFlg, setTabFlg] = useState(false);

  const viewProductList = () => {
    setProdFlg(true);
    setTabFlg(false);
  }

  const viewTabUi = () => {
    setProdFlg(false)
    setTabFlg(true)
  }

  return (
    <>
    <Header></Header>
    <main>
      <div>
        <Link to={'/'}>상품 리스트</Link>
        <Link to={'/test'}>테스트</Link>
        <Outlet></Outlet>
      </div>
      <div>
          {/* <span onClick={viewProductList}>상품 리스트</span>
          <span onClick={viewTabUi}>테스트</span> */}
      </div>
      {/* {tabFlg && <TabUI></TabUI>}
      {prodFlg && <ProductList></ProductList>} */}
      
    </main>
    <Footer></Footer>
    </>
  )
}

export default App