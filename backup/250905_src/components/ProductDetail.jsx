import './ProductDetail.css'
import {useEffect} from 'react'
import { useState } from 'react';

function ProductDetail(props) {
  const {product, setModalFlag} = props;
  const [count, setCount] = useState(0);

  //LifeCycle Hooks
  //mount에서 실행 하고 싶을 때 최초 1회만 실행

  // useEffect(() => {

  //   console.log('마운트');

  // }, []);

  //언마운트 전에 실행: Clean up Function 작성
  // useEffect(() => {

  //   return () => {
  //     console.log('언마운트');
  //   }

  //   //clean up function
  // }, [])


  //state가 변할 때마다 실행, 마운트 후 최초 1회 실행

  useEffect(() => {
    console.log('테스트')
  }, [count])





  return (
    <>

  <div className="detail-modal" onClick={() => {setModalFlag(false)}}>
    <div className="detail-box">
      <div className="detail-image" style={{backgroundImage: `url('${product.image}')`}}>
        <p className="detail-title">
          {props.product.title}
        </p>  
        <p className="detail-info">
          {product.info}
        </p>
        <p className="detail-price">
          {product.price}
        </p>
        <p>{count}</p>
        <button type="button" onClick={() => {
          setCount((prev) => prev + 1)
        }}>+</button>
      </div>
    </div>
  </div>
    </>
  
)
}

export default ProductDetail