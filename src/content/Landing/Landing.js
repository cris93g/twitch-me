import React, { Component } from "react";
import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
class Landing extends Component {
	render() {
		return (
			<div className="Landing">
				<TopBar />
				{/* Landing*/}
				<LeftBar />
			</div>
		);
	}
}

export default Landing;
