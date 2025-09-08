import { useDispatch, useSelector } from 'react-redux'
import './Detail.css'  
import { addCnt, minusCnt, changeCnt } from '../store/slices/detail.js'
import { useState } from 'react'

function Detail() {


  const dispatch = useDispatch()
  //dispatch 위에 선언해두고 씀,  상태관리 라이브러리인 redux와 자바스크립트 라이브러리 .. react 사이의 연결고리 역할을 함.

  const cnt = useSelector(state => state.detail.cnt)

  const [inputNumber, setInputNumber ] = useState(0)
  // const [inputNumber, setInputNumber ] = userState(number 나오게 하려면 비워두면 안 됨 0 이나 null 써 놓아야 함..)

  const convertAndSetNumber = (e) => {
      if(!isNaN(e.target.value)) {
        setInputNumber(parseInt(e.target.value));
      } else {
        console.error('숫자 아닙니다')
      }

  }


  return (


    <>
    <h1>상세 페이지</h1>
    <p>
    {cnt}
    </p>
    <input type="number" onChange={convertAndSetNumber} />
    <button type="button" onClick={()=>{dispatch(changeCnt(inputNumber))}}>입력</button>
    <button type="button" onClick={()=>{dispatch(addCnt())}}>+</button>
    <button type="button" onClick={()=>{dispatch(minusCnt())}}>-</button>
    </>
  )
}

export default Detail