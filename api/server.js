const mongoose = require('mongoose');
require('dotenv').config()

const app = require('./app');
const {SERVER_PORT, DB_URL} = process.env

mongoose.connect(DB_URL).then(() => console.log(`DB attached`));

const port = process.env.SERVER_PORT || 3555;
app.listen(port, () => {
	console.log(`Something's happening on port ${port}.`);
});
