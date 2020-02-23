const express = require('express');
const bodyParser = require('body-parser');
const ApiRouter = require('./src/routers/api-router');
const BackendRouter = require('./src/routers/backend-router');

const server = express();
const port = process.env.port || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api', ApiRouter);
server.use('/frontend', BackendRouter);

server.use((_req, res) => {
  res.send('Error 404: Page not found.');
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
