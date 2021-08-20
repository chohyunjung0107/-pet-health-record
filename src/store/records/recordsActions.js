import { actionsRecords } from "./recordsSlice.js";
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
	recordSet: (payload) => (dispatch) => {
		dispatch(actionsRecords.recordSet(payload));
	},
	recordsCreate: (payload) => (dispatch) => {
		axios
			.post("http://localhost:3100/api/v1/records", payload)
			.then(function (response) {
				// 라이트 페이지에서 리드 페이지로 이동
				window.location.href = "/read";
				alert("저장되었습니다.")
			})
			.catch(function (error) {
				alert(error.response.data.message || error.message || error);
			});
	},
	recordsRead: (payload) => (dispatch) => {
		axios
			.get("http://localhost:3100/api/v1/records", payload)
			.then(function (response) {
				// 통신 완료 후				
				dispatch(
					actionsRecords.recordsSet(
						response.data.records
					)
				);
			});
	},
	recordsDelete: (payload) => (dispatch) => {
		axios
			.delete(`http://localhost:3100/api/v1/records/${payload}`)
			.then(function (response) {
				// 삭제후 리드가 실행된다.		
				(actions.recordsRead())(dispatch);
			});
	},
};

export default actions;
