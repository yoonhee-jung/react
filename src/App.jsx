import './App.css'
import {Link, Outlet, useNavigate} from 'react-router-dom'

function App() {
  // 컴포넌트 내부에서 프로그래밍 방시긍로 페이지 이동을 구현
  const navigate = useNavigate();




  const ok = ()  => {
    navigate('/ok')
  }

  return (
<>
<header><h2>..</h2>
<div className="nav">
  <Link to={'/list'}>리스트 페이지</Link>
  <Link to={'/detail'}>상세 페이지</Link>
  <br />
  <NavLink to ={'/list'}>리스트 페이지</NavLink>
  <NavLink to ={'/detail'}>상세 페이지</NavLink>
  <br />
  <button type="button" onClick={ok}>확인</button>
</div>
</header>
<main>
  <Outlet></Outlet>
</main>
{/*라우터의 자식 컴포넌트를 출력 */}
<footer>
  <p>copyright.</p>
</footer>
</>



  )
}

export default App