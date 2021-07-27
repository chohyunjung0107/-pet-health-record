import React from "react";
import styled from "styled-components";
import { LogOut } from "react-feather";
import { Link } from "react-router-dom";
import axios from "axios";

const Wrap = styled.div`
	height: 50px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

export default function Menu() {
	if (!localStorage.getItem("x-jwt-token")) {
		window.location.href = "/login";
	}
	return (
		<Wrap>
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
