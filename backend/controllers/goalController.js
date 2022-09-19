//@desc show goals function
//@route GET /api/goals
//@access Private
const getGoals = (req,res) => {
	res.status(200).json({
		message : `Get goals`
	});
}

//@desc create goals function
//@route POST /api/goals
//@access Private
const setGoals = (req,res) => {
	console.log(req.body);
}


//@desc update goals function
//@route PUT /api/goals/:id
//@access Private
const updateGoals = (req,res) => {
	res.status(200).json(
		{message : `Update GOALS ${req.params.id}`}
	);
}

//@desc delete goals function
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = (req,res) => {
	res.status(200).json(
		{message : `Delete GOALS ${req.params.id}`}
	);
}


module.exports = {
	getGoals,
	setGoals,
	updateGoals,
	deleteGoals
}