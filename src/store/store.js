// 컴포넌트 아님. 단순 데이터 보관용 > js로 만듦.

import detailReducer from './slices/detail.js'
import listReducer from './slices/list.js'
//슬라이스명 + 이름 붙이기

import { configureStore } from "@reduxjs/toolkit";

// Redux Store 생성 및 설정

export default configureStore({
  
  reducer: {

    list: listReducer,
    detail: detailReducer
  }

})

