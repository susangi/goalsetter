const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000; // get port from env or not setup env get 5000 port

const app = express();

//middlewares for request body for raw JSON and encoded
app.use(express.json());
app.use(express.urlencoded({extended : false}))

//routes start

//export goalRoutes
app.use('/api/goals', require('./routes/goalRoutes'));

//error handler middleware
app.use (errorHandler);

app.listen(port, () => console.log(`Server start on port ${port}`));