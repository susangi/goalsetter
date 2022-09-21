const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//@desc show goals function
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req,res) => {
	
	const goals = await Goal.find({user: req.user.id});
	
	res.status(200).json(goals);
});

//@desc create goals function
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req,res) => {
	if(!req.body.text){
		res.status(400); // client bad request
		throw new Error('Please add a text field'); // 	express error handler
	}
	const goal = await Goal.create ({
		text: req.body.text,
		user : req.user.id
	})

	res.status(200).json(goal)
});


//@desc update goals function
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler( async (req,res) => {
	const goal = await Goal.findById(req.params.id)

	if(!goal){
		res.status(400)
		throw new Error('Goal node have found');
	}

	const user = await User.findById(req.user.id)

	// check user
	if (!user) {
		res.status(401)
		throw new Error ('User not found')
	}

	// make sure the logged in user matches goal user
	if (goal.user.toString() !== user.id) {
		res.status(401)
		throw new Error ('User not authorized')
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new : true,	
	})

	res.status(200).json(updatedGoal)
});

//@desc delete goals function
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req,res) => {
	const goal = await Goal.findById(req.params.id)

	if(!goal){
		res.status(400)
		throw new Error('Goal node have found');
	}

	const user = await User.findById(req.user.id)

	// check user
	if (!user) {
		res.status(401)
		throw new Error ('User not found')
	}

	// make sure the logged in user matches goal user
	if (goal.user.toString() !== user.id) {
		res.status(401)
		throw new Error ('User not authorized')
	}

	await goal.remove(req.params.id)

	res.status(200).json()
});


module.exports = {
	getGoals,
	setGoals,
	updateGoals,
	deleteGoals
}