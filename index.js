const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const path = require("path");
require("./models/Users");
require("./services/passport");

mongoose.connect(
	keys.mongoURI,
	{ useNewUrlParser: true }
);

const app = express();
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "client/build")));

require("./routes/googleAuth")(app);
require("./routes/billingRoutes")(app);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server started :", PORT);
});
