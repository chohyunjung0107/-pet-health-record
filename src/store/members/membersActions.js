import { actionsMembers } from "./membersSlice.js";
import axios from "axios";

const axiosDefaultsHeaders = function (token) {
	if (token) {
		//로컬스토리지에 토큰 값을 저장(setItem)
		localStorage.setItem("x-jwt-token", token);
		//다음 통신부터 디폴트 값으로 헤더에 토근 값을 넘겨준다.
		axios.defaults.headers.common["x-jwt-token"] = token;
	} else if (localStorage.getItem("x-jwt-token")) {
		//한 번 로그인 하면 새로고침해도 로컬스토리지에 토큰 값이 저장되어있다.
		axios.defaults.headers.common["x-jwt-token"] =
			localStorage.getItem("x-jwt-token");
	}
};
axiosDefaultsHeaders();

const actions = {
	memberSet: (payload) => (dispatch) => {
		dispatch(actionsMembers.memberSet(payload));
	},
	memberLogin: (payload) => (dispatch) => {
		// 로딩 (true)
		dispatch(actionsMembers.loadingSet(true));
		axios
			.post("http://localhost:3100/api/v1/members/login", payload)
			.then(function (response) {
				axiosDefaultsHeaders(response.data.token);
				window.location.href = "/read";
			})
			.catch(function (error) {
				alert(error.response.data.message || error.message || error);
			})
			.finally(function () {
				// 로딩 (false)
				dispatch(actionsMembers.loadingSet(false));
			});
	},
	memberCheck: (payload) => (dispatch) => {
		axios
			.get("http://localhost:3100/api/v1/members/login", payload)
			.then(function (response) {
				// 통신 완료 후, 토큰과 비교된 회원 정보를 받음
				dispatch(
					actionsMembers.memberSet({
						name: response.data.decoded.name,
						age: response.data.decoded.age,
						id: response.data.decoded.id,
						password: "",
					})
				);
			});
	},
};

export default actions;
