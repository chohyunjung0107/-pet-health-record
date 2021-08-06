import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { LogOut } from "react-feather";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import actionsMembers from "store/members/membersActions";
import { stateMembers } from "store/members/membersSlice.js";

const Wrap = styled.div`
	height: 50px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

export default function Menu() {
	//토큰 없으면 로그인 페이지로
	if (!localStorage.getItem("x-jwt-token")) {
		window.location.href = "/login";
	}
	//로그인된 정보를 토근과 비교해서 체크
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actionsMembers.memberCheck());
	}, [dispatch]);

	//이닛스테이트가 수정되면 해당 컴포넌트는 다시 그려진다.
	const member = useSelector(stateMembers).member;

	console.log(member);

	return (
		<Wrap>
			{member.id}
			<Link
				to="/login"
				onClick={() => {
					axios.defaults.headers.common["x-jwt-token"] = "";
					localStorage.removeItem("x-jwt-token", "");
				}}
			>
				<LogOut />
			</Link>
		</Wrap>
	);
}
