import React, { Component } from "react";
import "./LeftBar.css";
import styled from "styled-components";

const SidebarWrapper = styled.section`
	width: 15%;
	height: 100%;
	position: fixed;
	background-color: #373844;
	margin: 0;
	padding: 0;
`;

class LeftBar extends Component {
	render() {
		return (
			<SidebarWrapper>
				<div className="leftbar">
					<div>categories</div>
					<div>all games</div>
					<div>streams</div>
					<div>my favorites</div>
				</div>
			</SidebarWrapper>
		);
	}
}

export default LeftBar;
