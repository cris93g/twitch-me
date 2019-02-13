import React, { Component } from "react";
import "./TopBar.css";
import LogIn from "../logIn/logIn";
class TopBar extends Component {
	render() {
		return (
			<div className="topbar">
				<LogIn />
			</div>
		);
	}
}

export default TopBar;
