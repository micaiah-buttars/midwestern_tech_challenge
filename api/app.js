const express = require('express');

const cors = require('cors');

const Cart = require('./db/contactForm');
const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});
app.get('/get-data', (req, res) => {
	res.status(200).send({
		message: 'Hey',
	});
});

app.post('/contact', async (req, res) => {
	console.log(req.body)
	const cart = await Cart.create(req.body);

	res.status(201).send({
		status: 'success',
		data: {
			contact: cart,
		},
	});
});

module.exports = app;
