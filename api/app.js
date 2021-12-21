const express = require('express');

const cors = require('cors');

const Form = require('./db/contactForm');
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
	const form = await Form.create(req.body);

	res.status(201).send({
		status: 'success',
		data: {
			contact: form,
		},
	});
});

module.exports = app;
