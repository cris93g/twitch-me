import React, { Component } from "react";
import "./Games.css";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
const Wrapper = styled.section`
	/* width: 100%; */

	/* display: flex; */
	position: relative;
	left: 400px;
	color: white;
`;

const CardWrapper = styled.section`
	display: flex;

	margin: auto;
`;
const Cards = styled.section`
	height: 300px;
	width: 355px;
`;
const TextWrapper = styled.section`
	margin: auto;
	text-align: center;
`;
class Games extends Component {
	state = {
		games: []
	};
	componentDidMount() {
		axios
			.get(`/api/top-games`)
			.then(response => this.setState({ games: response.data.top }));
	}

	render() {
		console.log(this.state.games);
		const { games } = this.state;

		const gamesDisplay = games.map((game, e) => {
			return (
				<Wrapper>
					<Cards>
						<img className="game-cards" src={game.game.box.large} />
						<TextWrapper>
							<h4 key={game.game._id}>{game.game.name}</h4>
							<p>{`Current Viewers: ${game.viewers}`}</p>
						</TextWrapper>
					</Cards>
				</Wrapper>
			);
		});
		return (
			<div className="">
				<h2>Top Games</h2>
				<CardWrapper>{gamesDisplay}</CardWrapper>
			</div>
		);
	}
}

export default Games;
