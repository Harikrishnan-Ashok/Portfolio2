import styled from "styled-components"

const Cont = styled.div`
	display:flex;
	margin:20px;
	height:700px;
`;
const Left = styled.div`
	flex:3;
	justify-content:center;
	align-items:center;
	display:flex;
	flex-direction:column;
	display:flex;
`
const Right = styled.div`
	flex:4;
	border:1px solid white;
	justify-content:center;
	align-items:center;
	display:flex;
`
const H1 = styled.h1`
	font-size:40px;
`;

export default function Hero() {
	return (<Cont>
		<Left>
			<H1>HI</H1>
			<H1>Im Harikrishnan Ashok</H1>
			<H1>A Full Stack Developer</H1>
		</Left>
		<Right>righty</Right>
	</Cont>)
}
