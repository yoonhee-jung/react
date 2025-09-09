import { createSlice } from "@reduxjs/toolkit";
import { getList, getTest } from "../thunks/listThunk";


//`list`상태관리 slice 생성 및 설정

const list = createSlice({
  name: 'list', //slice 명
  initialState: { //상태 관리할 state를 정의하는 영역
    cnt: 0, 
    list: null,
    loading: false,

  },
  reducers: { //state의 상태를 변화시키는 actions를 정의하는 영역
    addCnt(state) { // 여기서 state는 initialState의 영역을 말하는 것
      state.cnt += 1
    },
    minusCnt(state) {
      state.cnt -= 1
    },
    changeCnt(state, action) {
      //state 파라미터: `initial state`의 정보를 담고 있는 파라미터.
      //action: 외부에서 전달 된 값을 담는 파라미터.
      //  >action.payload: 전달 된 값에 접근할 수 있는 프로퍼티.
      state.cnt = action.payload
    },
    // clearList(state) {

    // }
  },
  extraReducers: builder => {
    builder
      // .addCase(getList.pending, (state) => {
      //   state.loading = true;

      //   // 'getList' Thunk의 처리가 대기중일때의 처리를 작성
        

      // })
      .addCase(getList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
        // 'getList' Thunk의 처리가 성공일때의 처리를 작성

      })
      // .addCase(getList.rejected, (state) => {
      //   state.loading = false;
      //   // 'getList' Thunk의 처리가 실패일때의 처리를 작성

      // })
      // .addCase(getTest.pending, (state) => {
      //   state.loading = true;

      //   // 'getList' Thunk의 처리가 대기중일때의 처리를 작성
        

      // })
      .addCase(getTest.fulfilled, (state, action) => {
        state.test = action.payload;
        state.loading = false;
        // 'getList' Thunk의 처리가 성공일때의 처리를 작성

      })
      // .addCase(getTest.rejected, (state) => {
      //   state.loading = false;
      //   // 'getList' Thunk의 처리가 실패일때의 처리를 작성

      // })
      .addMatcher(


          action => action.type.endsWith('/pending'),
          state => {
            state.loading = false;

          }

      )
      .addMatcher(


          action => action.type.endsWith('/rejected'),
          state => {
            state.loading = false;

          }

      )
  }
})

//정의한 Actions 내보내기

export const  { addCnt, minusCnt, changeCnt } =  list.actions
// export const  { addCnt, minusCnt, changeCnt, clearList } =  list.actions

//Reducer 내보내기

export default list.reducer