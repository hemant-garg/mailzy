const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({
		developer: 'hemant',
		age: 20,
		status: 'ready'
	})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(PORT)
});