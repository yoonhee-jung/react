import { useState } from 'react';
import './App.css';


function App() {
  const title = '제목';

  const titleStyle = {
    color: 'red',
    fontSize: '3.5rem'
  };


  const [count, setCount] = useState(0);

  const  incrementCount = () => {
    setCount((prev) => prev + 1);

  }

  const  diminution = () => {
    setCount((prev) => {
      if(prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
  })
  }

  // const [account, setAccount] = useState('');
  // const [account, setAccount] = [this.state, this.setter];

  // const test = {
  //   state: null,
  //   setter: (param) => {
  //     if(this.state === param) {
  //       this.state = param;
  //       //리렌더링 처리
  //     }
  //     else {
  //       return;
  //     }
  //     this.state = param;
  //   },
  //   useState(data) {
  //     state.satate = data;
  //     return [this.state, this.setter];
  //   }
  // }
  // const [a,b] = test.useState(0);
  // b(1);

  // console.log(a);



  const [userInfo, setUserInfo] = useState({
    name: '홍길동',
    age: 20,
    gender: 'M'
  });

  const addAge = () => {
    const copy = {...userInfo};
    copy.age += 1;
    setUserInfo(copy);
    // setUserInfo(() => {
  
    // });
  }


  return (
    <>
    <span>{`${userInfo.name} : ${userInfo.age} : ${userInfo.gender}`}</span>
    <button type="button" onClick={addAge}>나이 +</button>
    <br />
    <br />
    <br />
    <input type="text" value={count} onChange={(e) => {setAccount(e.target.value)}} name="" id="" />
    <p>{count}</p>
    <button type="button" onClick={incrementCount}>+</button>
    <button type="button" onClick={diminution}>-</button>
    <h1 className="title" style={{color: 'red', fontSize: '4rem'}}>{title}</h1>
    <h1 style={titleStyle}>{title}</h1>

    </>
  )

}

export default App
