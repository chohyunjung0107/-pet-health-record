import styled from "styled-components";
// import { useSelector } from 'react-redux';
// import { stateMembers } from 'store/members/membersSlice.js';

const FooterWrap = styled.div`
	width: 100%;
	height: 50px;
	background: #888;
`;

export default function Footer() {
	// const member = useSelector(stateMembers).member;

	return (
		<>
			{/* {member.id} */}
			<FooterWrap>footer</FooterWrap>
		</>
	);
}
