const express = require('express');
const router = express.Router();
const {getGoals} = require('../controllers/goalController'); //import getGoals function from controller

//goalRoutes show route
router.get('/',getGoals);


//goalRoutes create route
router.post('/',(req,res) => {
	res.status(200).json({message : 'SET GOALS'});
});

//goalRoutes update route
router.put('/:id',(req,res) => {
	res.status(200).json({message : `Update GOALS ${req.params.id}`});
});

//goalRoutes delete route
router.delete('/:id',(req,res) => {
	res.status(200).json({message : `Delete GOALS ${req.params.id}`});
});

module.exports = router;