import React, { Component } from "react";
import "./Landing.css";
import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Streams from "../../components/Streams/Streams";
import Games from "../../components/Games/Games";
import styled from "styled-components";
const MainWrapper = styled.section`
	width: 100%;
	height: 100%;
	background-color: #2b2c3a;
`;

const TopWrapper = styled.section`
	width: 100%;
	background-color: #2b2c3a;
`;

const NavBar = styled.section`
	display: flex;
`;

class Landing extends Component {
	render() {
		return (
			<MainWrapper>
				<NavBar>
					<LeftBar />
				</NavBar>
				{/* <MiddleWrapper> */}
				<Streams />
				<br />
				<Games />
				{/* </MiddleWrapper> */}
			</MainWrapper>
		);
	}
}

export default Landing;
