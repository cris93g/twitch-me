import React, { Component } from "react";
import "./Streams.css";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.section`
	/* width: 100%; */

	/* display: flex; */
	top: 180px;
	position: relative;
	left: 450px;
	color: white;
`;

const CardWrapper = styled.section`
	display: flex;

	margin: auto;
`;

const TextWrapper = styled.section`
	margin: auto;
	text-align: center;
`;
const Cards = styled.section`
	height: 300px;
	width: 355px;
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
					<Cards>
						<a href={stream.channel.url}>
							<img className="card-picture" src={stream.preview.medium} />
						</a>
						<TextWrapper>
							<h4>{stream.channel.display_name}</h4>
							<h5>{stream.channel.status}</h5>
						</TextWrapper>
					</Cards>
					{/* <p>{`Game: ${stream.game}`}</p> */}
					{/* <p>{`Viewers: ${stream.viewers}`}</p> */}
				</Wrapper>
			);
		});
		return (
			<div className="">
				<h2 style={{ left: "400px" }}>Top Streams</h2>
				<CardWrapper>{streamsDisplay}</CardWrapper>
			</div>
		);
	}
}

export default Streams;
