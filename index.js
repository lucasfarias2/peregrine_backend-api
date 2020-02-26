const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ApiRouter = require('./src/routers/api-router');
const BackendRouter = require('./src/routers/backend-router');
const { initializeDb } = require('./src/api/middleware/db');

const server = express();
const port = process.env.port || 3000;

mongoose.connect(
  'mongodb+srv://peregrine:Ines123@peregrinedb-bl4av.mongodb.net/peregrine',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

initializeDb();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api', ApiRouter);
server.use('/frontend', BackendRouter);

server.use((req, res) => {
  res.send('Error 404: Page not found.');
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
