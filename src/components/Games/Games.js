import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

class Games extends Component {
	state = {
		games: []
	};
	componentDidMount() {
		axios
			.get(`/api/top-games`)
			.then(response => this.setState({ games: response.data.top.game }));
	}

	render() {
		// const { games } = this.state;
		console.log(this.state.games);
		// const gamesDisplay = games.map((game, e) => {
		// 	return (
		// 		<div>
		// 			<p>{game.game.name}</p>
		// 			<p>{game.game.viewers}</p>
		// 		</div>
		// 	);
		// });
		return <div className="">{/* {gamesDisplay} */}</div>;
	}
}

export default Games;
