const express = require('express');
const UsersController = require('../api/controllers/users-controller');
const AddressesController = require('../api/controllers/addresses-controller');
const FirebaseMiddleware = require('../backend/middleware/firebase-middleware');

const BackendRouter = express.Router();

BackendRouter.use(FirebaseMiddleware);

BackendRouter.get('/users', UsersController);
BackendRouter.get('/addresses', AddressesController);

module.exports = BackendRouter;
