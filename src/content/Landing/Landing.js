import React, { Component } from "react";
import TopBar from "../../components/TopBar/TopBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import Streams from "../../components/Streams/Streams";
import Games from "../../components/Games/Games";
class Landing extends Component {
	render() {
		return (
			<div className="Landing">
				{/* <LeftBar /> */}
				<TopBar />

				{/* <Games /> */}
				<Streams />
			</div>
		);
	}
}

export default Landing;
