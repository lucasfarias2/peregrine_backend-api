const express = require('express');
const UsersController = require('../api/controllers/users-controller');
const AddressesController = require('../api/controllers/addresses-controller');

const ApiRouter = express.Router();

ApiRouter.get('/users', UsersController.getUsers);
ApiRouter.get('/users/:userId', UsersController.getUser);

ApiRouter.get('/addresses', AddressesController.getAddresses);
ApiRouter.get('/addresses/:addressId', AddressesController.getAddress);

module.exports = ApiRouter;
