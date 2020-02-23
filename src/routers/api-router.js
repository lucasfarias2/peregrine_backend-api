const express = require('express');
const UsersController = require('../api/controllers/users-controller');
const AddressesController = require('../api/controllers/addresses-controller');
const DatabaseMiddleware = require('../api/middleware/database-middleware');

const ApiRouter = express.Router();

ApiRouter.use(DatabaseMiddleware);

ApiRouter.get('/users', UsersController);
ApiRouter.get('/addresses', AddressesController);

module.exports = ApiRouter;
