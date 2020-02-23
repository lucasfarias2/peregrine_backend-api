const express = require('express');
const HomeController = require('../backend/controllers/home-controller');
const AddressesController = require('../backend/controllers/addresses-controller');
const FirebaseMiddleware = require('../backend/middleware/firebase-middleware');

const BackendRouter = express.Router();

BackendRouter.use(FirebaseMiddleware);

BackendRouter.get('/home', HomeController);
BackendRouter.get('/addresses', AddressesController);

module.exports = BackendRouter;
