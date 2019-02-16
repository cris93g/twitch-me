import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

class Streams extends Component {
	state = {
		streams: []
	};
	componentDidMount() {
		axios
			.get(`/api/top-streams`)
			.then(response => this.setState({ streams: response.data.streams }));
	}

	render() {
		console.log(this.state.streams);
		const { streams } = this.state;
		const streamsDisplay = streams.map((stream, e) => {
			return (
				<div>
					<a href={stream.channel.url}>
						<img src={stream.preview.medium} />
					</a>
					<p>{stream.channel.display_name}</p>
					<p>{stream.channel.status}</p>
					<p>{`Game: ${stream.game}`}</p>
					<p>{`Viewers: ${stream.viewers}`}</p>
				</div>
			);
		});
		return <div className="">{streamsDisplay}</div>;
	}
}

export default Streams;
