var express = require('express');
var router = express.Router();
const addFormController = require('../controllers/addFormController')
const getAllController = require('../controllers/getAllController')
const deleteController = require('../controllers/deleteController')

/* GET users listing. */
router.get('/', getAllController);
router.post('/create', addFormController);
router.get('/delete/:id', deleteController);

module.exports = router;
