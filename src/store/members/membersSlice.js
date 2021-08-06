import { createSlice } from "@reduxjs/toolkit";

export const membersSlice = createSlice({
	//스토어를 잘라쓸껀데, 거기에 네임을 붙임 (탭에 이름같은 존재)
	name: "members",
	//스토어의 변수들 모음
	initialState: {
		member: {
			name: "",
			age: "",
			id: "",
			password: "",
		},
	},
	//스테이트 값을 바꿔주는 오브젝트
	reducers: {
		memberSet: (state, action) => {
			state.member = action.payload;
		},
	},
});

export const stateMembers = (state) => state.members; //스토어에서 잘라쓴 네임
export const actionsMembers = membersSlice.actions; // 리듀서()의 모든 함수들을 접근하기 위해 사용하는 오브젝트

export default membersSlice.reducer;
