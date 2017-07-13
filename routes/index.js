const express = require('express');
const router = express.Router();
// imports the controller that we want to make a route for
const storeController = require('../controllers/storeController');

// bring the controller in here
// always going to send the work to an external file
router.get('/', storeController.homePage);

module.exports = router;