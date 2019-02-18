const {
	getStreams,
	getTopGames,
	getVods
} = require("../controllers/apiController");

module.exports = app => {
	app.get("/api/vods", getVods);
	app.get("/api/top-streams", getStreams);
	app.get("/api/top-games", getTopGames);
};
