const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const { initDb } = require('./database/blogdb')
const postRouter = require('./views/post')

const app = express();
const PORT = process.env.port || 3500;

app.use(bodyParser.json());

app.use('/', postRouter)
app.listen(PORT, () => {
  initDb()
  console.log(`Server is running on http://localhost:${PORT}`);
});