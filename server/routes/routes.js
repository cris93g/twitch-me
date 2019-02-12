const { getStreams, getTopGames } = require("../controllers/apiController");

module.exports = app => {
	app.get("/api/top-streams", getStreams);
	app.get("/api/top-games", getTopGames);
};
