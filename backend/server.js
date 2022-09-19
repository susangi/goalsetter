const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; // get port from env or not setup env get 5000 port

const app = express();

//routes start

//export goalRoutes
app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => console.log(`Server start on port ${port}`));