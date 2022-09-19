const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; // get port from env or not setup env get 5000 port

const app = express();

//routes start
app.get('/api/goals',(req,res) => {
	res.json({message : 'GET GOALS'});
})

app.listen(port, () => console.log(`Server start on port ${port}`));