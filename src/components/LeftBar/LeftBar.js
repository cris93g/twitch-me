import React, { Component } from "react";
import "./LeftBar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../TopBar/TopBar";

const SidebarWrapper = styled.section`
	width: 15%;
	height: 100%;
	position: fixed;
	background-color: #373844;
	margin: 0;
	padding: 0;
`;

const Text = styled.section`
	color: white;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: stretch;
	align-content: stretch;
	margin-top: 40px;
`;

class LeftBar extends Component {
	render() {
		return (
			<SidebarWrapper>
				<div className="leftbar">
					<Text>
						<TopBar />
						<Link to="/">
							<div className="side_headings">GAMES</div>
						</Link>
						<Link to="/">
							<div className="side_headings"> All Games</div>
						</Link>
						<div className="side_headings">Categories</div>
						<Link to="/">
							{" "}
							<div className="subhead">
								{" "}
								<i className="material-icons">videogame_asset</i> Action
							</div>
						</Link>
						<Link to="/">
							{" "}
							<div className="subhead">
								{" "}
								<i className="material-icons">videogame_asset</i> Adventure
							</div>
						</Link>
						<Link to="/">
							{" "}
							<div className="subhead">
								<i className="material-icons">videogame_asset</i> Casual
							</div>
						</Link>
						<Link to="/">
							{" "}
							<div className="subhead">
								{" "}
								<i className="material-icons">videogame_asset</i>Strategy
							</div>
						</Link>
						<Link to="/">
							{" "}
							<div className="subhead">
								<i className="material-icons">videogame_asset</i> Itellectual
							</div>
						</Link>
						<Link to="/">
							{" "}
							<div className="subhead">
								{" "}
								<i class="material-icons">videogame_asset</i> Sport
							</div>
						</Link>

						<Link to="/">
							<div className="side_headings">Most Played</div>
						</Link>
						<div className="lastH">MY GAMES</div>
					</Text>
				</div>
			</SidebarWrapper>
		);
	}
}

export default LeftBar;
