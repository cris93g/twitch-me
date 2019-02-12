const { getStreams } = require("../controllers/apiController");

module.exports = app => {
	app.get("/api/streams", getStreams);
};
