//@desc show goals function
//@route GET /api/goals
//@access Private
const getGoals = async (req,res) => {
	res.status(200).json({
		message : `Get goals`
	});
}

//@desc create goals function
//@route POST /api/goals
//@access Private
const setGoals = async (req,res) => {
	if(!req.body.text){
		res.status(400); // client bad request
		throw new Error('Please add a text field'); // 	express error handler
	}
}


//@desc update goals function
//@route PUT /api/goals/:id
//@access Private
const updateGoals = async (req,res) => {
	res.status(200).json(
		{message : `Update GOALS ${req.params.id}`}
	);
}

//@desc delete goals function
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = async (req,res) => {
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