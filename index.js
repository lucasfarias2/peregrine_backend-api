const express = require('express');
const bodyParser = require('body-parser');
const ApiRouter = require('./src/routers/api-router');

const server = express();
const port = process.env.port || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api', ApiRouter);

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
