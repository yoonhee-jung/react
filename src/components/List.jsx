import { useDispatch, useSelector } from 'react-redux'
import './List.css'
import { addCnt, minusCnt } from '../store/slices/list.js'
import { useEffect } from 'react'
import { getList } from '../store/thunks/listThunk.js'

function List() {
  // State에 접근하는 방법
  const cnt = useSelector(state => state.list.cnt)
  // const cnt = useSelector(state => state > store .list > slice .cnt)

  // action 호출 방법
  const dispatch = useDispatch()

  useEffect(() => {


    dispatch(getList())


     return () => {
  //   dispatch(clearList())

  // }
     }
 }, [])

 

  const list = useSelector(state => state.list.list)
  const loading = useSelector(state => state.list.loading)

  return (


    <>
    <h1>리스트 페이지</h1>
    <p>{cnt}</p>
    <button type="button" onClick={() => {dispatch(addCnt())}}>+</button>
    <button type="button" onClick={() => {dispatch(minusCnt())}}>-</button>
    { loading && <h2>로딩중</h2> }
    <div className="card-container">
    {
      list && list.map(item => {
        return (
          <img src={item.download_url} width='100px' key={item.id}/>
        )
      })
    }
    </div>
    </>
  )
}

export default List