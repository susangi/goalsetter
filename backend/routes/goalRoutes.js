const express = require('express');
const router = express.Router();

//goalRoutes get route
router.get('/',(req,res) => {
	res.status(200).json({message : 'GET GOALS'});
})

module.exports = router;