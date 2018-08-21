const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const checkUserLogin = require("../middlewares/checkUserLogin");

module.exports = app => {
	app.post("/api/stripe", checkUserLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "$5 = 5 Credits",
			source: req.body.id
		});
		req.user.credits += 5;
		const user = await req.user.save();
		res.send(user);
	});
};
