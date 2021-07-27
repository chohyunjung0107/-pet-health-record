import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

// const axiosDefaultsHeaders = function(token) {
//   if (token) {
//     //로컬스토리지에 토큰 값을 저장(setItem)
//     localStorage.setItem('x-jwt-token', token);
//     //다음 통신부터 디폴트 값으로 헤더에 토근 값을 넘겨준다.
//     axios.defaults.headers.common['x-jwt-token'] = token;
//   } else if (localStorage.getItem('x-jwt-token')) {
//     //한 번 로그인 하면 새로고침해도 로컬스토리지에 토큰 값이 저장되어있다.
//     axios.defaults.headers.common['x-jwt-token'] = localStorage.getItem('x-jwt-token');
//   }
// };
// axiosDefaultsHeaders();

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
		// ajax를 통신하는 함수 // 백api 주소로 post해줌, action.payload: ui에서 입력한 회원정보//통신이 성공적으로 끝났을 때 then 실행
		// memberLogin: (state, action) => {
		//   axios.post('http://localhost:3100/api/v1/members/login', action.payload).then(function(response) {
		//     axiosDefaultsHeaders(response.data.token);
		//   });
		// }
	},
});

export const stateMembers = (state) => state.members; //스토어에서 잘라쓴 네임
export const actionsMembers = membersSlice.actions; // 리듀서()의 모든 함수들을 접근하기 위해 사용하는 오브젝트

export default membersSlice.reducer;
