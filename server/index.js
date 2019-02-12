require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
routes = require("./routes/routes");
const session = require("express-session");
const passport = require("passport");
const app = express();
const port = process.env.port || 3001;

app.use(cors());

app.use(json());

routes(app);
const {
	getUser,
	strat,
	logout
} = require(`${__dirname}/controllers/authController`);
app.use(require("body-parser").text());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 100000
		}
	})
);

massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		app.set("db", dbInstance);
		console.log("connected");
	})
	.catch(err => {
		console.log(err);
	});
passport.serializeUser((user, done) => {
	const db = app.get("db");
	db.getUserByAuthid([user.id])
		.then(response => {
			if (!response[0]) {
				db.addUserByAuthid([user.displayName, user.id, user.picture])
					.then(res => done(null, res[0]))
					.catch(console.log);
			} else return done(null, response[0]);
		})
		.catch(console.log);
});

passport.deserializeUser((user, done) => done(null, user));

app.get("/me", getUser);
app.get("/logout", logout);

app.get(
	"/login",
	passport.authenticate("auth0", {
		// successRedirect: "/",
		successRedirect: "http://localhost:3000/#/",
		// successRedirect: "/#/",
		failureRedirect: "/login"
	})
);

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
