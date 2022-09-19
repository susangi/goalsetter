const express = require('express');
const router = express.Router();
const {
		getGoals,
		setGoals,
		updateGoals,
		deleteGoals} = require('../controllers/goalController'); //import getGoals function from controller

//goalRoutes route
router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router;