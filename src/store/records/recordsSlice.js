import { createSlice } from "@reduxjs/toolkit";

export const recordsSlice = createSlice({
	//스토어를 잘라쓸껀데, 거기에 네임을 붙임 (탭에 이름같은 존재)
	name: "records",
	//스토어의 변수들 모음
	initialState: {
		record: {
			restroomPee: 0,
			restroomPoo: 0,
			meal: 0,
			play: 0,
			nutrients: false,
			breathAm: 0,
			breathPm: 0,
			notice: "",
		},
	},
	//스테이트 값을 바꿔주는 오브젝트
	reducers: {
		recordSet: (state, action) => {
			state.record = action.payload;
		},
	},
});

export const stateRecords = (state) => state.records; //스토어에서 잘라쓴 네임
export const actionsRecords = recordsSlice.actions; // 리듀서()의 모든 함수들을 접근하기 위해 사용하는 오브젝트

export default recordsSlice.reducer;
