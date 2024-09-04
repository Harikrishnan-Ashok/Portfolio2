import styled from "styled-components"

const NavContainer = styled.div`
	border-bottom:1px solid white;
	padding:10px;
	display:flex;
	justify-content:center;
	gap:60px;
	background-color: #242424;
`;
const Li = styled.div`
	font-size:20px;
	padding:0px 20px;
	cursor: pointer;
`;


export default function Navbar() {
	return <NavContainer>
		<Li>Home</Li>
		<Li>About Me</Li>
		<Li>Tech Stacks</Li>
		<Li>Projects</Li>
		<Li>Contact</Li>
	</NavContainer>
}
