const express = require('express');
const UsersController = require('../api/controllers/users-controller');
const AddressesController = require('../api/controllers/addresses-controller');

const ApiRouter = express.Router();

ApiRouter.get('/users', UsersController);
ApiRouter.get('/addresses', AddressesController);

module.exports = ApiRouter;
