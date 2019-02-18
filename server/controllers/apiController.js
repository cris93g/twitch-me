require("dotenv").config();
const axios = require("axios");
const twitch = process.env.TWITCH_KEY;
const streamer = process.env.STREAMER;

axios
	.get(`https://api.twitch.tv/kraken/streams?${twitch}&limit=4`)
	.then(response => {
		streams = response.data;
		// console.log(streams);
		return streams;
	});
let getStreams = (req, res) => {
	res.status(200).send(streams);
	// console.log(streams);
};

axios
	.get(`https://api.twitch.tv/kraken/games/top?${twitch}&limit=4`)
	.then(response => {
		games = response.data;
		console.log(games);
		return games;
	});

let getTopGames = (req, res) => {
	res.status(200).send(games);
	console.log(games);
};

axios
	.get(
		`https://api.twitch.tv/kraken/channels/${streamer}/videos?limit=10&${twitch}`
	)
	.then(response => {
		vods = response.data;
		console.log(vods);
		return vods;
	});
let getVods = (req, res) => {
	res.status(200).send(vods);
	console.log(vods);
};
module.exports = {
	getStreams,
	getTopGames,
	getVods
};
