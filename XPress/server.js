const express = require('express');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const apiRouter = require('./api/api');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use(errorhandler());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
