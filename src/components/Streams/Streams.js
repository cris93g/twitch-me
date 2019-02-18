import React, { Component } from "react";
import "./Streams.css";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.section`
	width: 100%;

	display: flex;
	height: 100%;

	color: white;
`;

const TextWrapper = styled.section`
	margin: auto;
	text-align: center;
`;

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
				<Wrapper>
					<div className="cards">
						<a href={stream.channel.url}>
							<img className="card-picture" src={stream.preview.medium} />
						</a>
						<TextWrapper>
							<p>{stream.channel.display_name}</p>
							<p>{stream.channel.status}</p>
						</TextWrapper>
						{/* <p>{`Game: ${stream.game}`}</p> */}
						{/* <p>{`Viewers: ${stream.viewers}`}</p> */}
					</div>
				</Wrapper>
			);
		});
		return <div className="">{streamsDisplay}</div>;
	}
}

export default Streams;
