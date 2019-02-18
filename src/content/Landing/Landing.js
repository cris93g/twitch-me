import React, { Component } from "react";
import "./Landing.css";
import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Streams from "../../components/Streams/Streams";
import Games from "../../components/Games/Games";
import styled from "styled-components";

const MiddleWrapper = styled.section`
	/* display: flex; */
	width: 30%;
	height: 30%;
	/* justify-content: space-between; */
	margin: auto;
`;

// const Wrapper = styled.section`
// 	display: flex;
// 	flex-direction: row;
// 	flex-wrap: wrap;
// 	justify-content: space-between;
// 	/* align-items: flex-start; */
// 	align-content: stretch;
// `;

class Landing extends Component {
	render() {
		return (
			// <Wrapper>
			<div className="landing">
				{/* <LeftBar /> */}
				{/* <TopBar /> */}

				{/* <Games /> */}
				<MiddleWrapper>
					<Streams />
				</MiddleWrapper>
			</div>
			// </Wrapper>
		);
	}
}

export default Landing;
