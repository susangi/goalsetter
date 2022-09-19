const express = require('express');
const router = express.Router();
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController'); //import getGoals function from controller

//goalRoutes show route
router.get('/',getGoals);


//goalRoutes create route
router.post('/',setGoals);

//goalRoutes update route
router.put('/:id',updateGoals);

//goalRoutes delete route
router.delete('/:id',deleteGoals);

module.exports = router;