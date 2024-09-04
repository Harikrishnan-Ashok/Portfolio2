import styled from "styled-components"

import linkden from "../assets/linkedin.svg"
import github from "../assets/code.svg"

const Cont = styled.div`
	display:flex;
	height:100px;
	margin-top:100px;
	width:100px;
	gap:65px;
`;
const IMG = styled.img`
	height:40px;
	width:40px;
`
export default function Contact() {
	return (<Cont>
		<IMG src={linkden}></IMG>
		<IMG src={github}></IMG>
	</Cont>)
}
