import styled from "styled-components"
const H1 = styled.h1`
	font-size:100px;
	letter-spacing:50px;
`;

const P = styled.p`
	font-size:40px;
`;
const EduCont = styled.div``;

const H2 = styled.h2`
	text-decoration:underline;
	font-size:80px;
`;
const Recent = styled.div``;
const H3 = styled.h3`
	font-size:60px;
`;

export default function About() {
	return (<>
		<H1>ABOUT ME</H1>
		<P>Im a passionate full  web developer who just wants to try diffrent things that it.</P>
		<P>linux enthusiast</P>
		<P>Music Lover</P>
		<P>Creative (ig)</P>
		<EduCont>
			<H2>Educational Details</H2>
			<Recent>
				<H3>Most Recent</H3>
				<li>B Tech Graduate Major in Computer Science</li>
				<li>St. Josephs College of Engineering and Technology Palai</li>
				<li>B Tech Graduate </li>
			</Recent>
		</EduCont>

	</>)
}
