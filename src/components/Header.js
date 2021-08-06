import styled from "styled-components";

const HeaderWrap = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	background: #ccc;
	color: #000;
`;

export default function Header(props) {
	return (
		<>
			<HeaderWrap>
				<h1>{props.title}</h1>
			</HeaderWrap>
		</>
	);
}
