require("dotenv").config();
const axios = require("axios");

axios
	.get(
		`https://api.twitch.tv/kraken/streams?client_id=gue31zwe29qzw9mlr2xmcje34ktit2&limit=5`
	)
	.then(response => {
		streams = response.data;
		console.log(streams);
		return streams;
	});
let getStreams = (req, res) => {
	res.status(200).send(streams);
	console.log(streams);

	axios
		.get(
			`https://api.twitch.tv/kraken/games/top?client_id=gue31zwe29qzw9mlr2xmcje34ktit2&limit=5`
		)
		.then(response => {
			games = response.data;
			console.log(games);
			return games;
		});
};
let getTopGames = (req, res) => {
	res.status(200).send(games);
	console.log(games);
};

module.exports = {
	getStreams,
	getTopGames
};
