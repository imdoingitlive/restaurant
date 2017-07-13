const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// add the middleware
// since the middleware has next() inside of it, it will pass to homePage
// this is route specific middleware
router.get('/', storeController.myMiddleware, storeController.homePage);

module.exports = router;

// express can have global middleware
// will be application wide features and functions
// example is app.js