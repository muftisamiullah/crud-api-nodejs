const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employee_controller = require('../controllers/employee.controller');


router.get('/test', employee_controller.test);
router.post('/create', employee_controller.employee_create);
router.get('/:id', employee_controller.employee_details);
module.exports = router;