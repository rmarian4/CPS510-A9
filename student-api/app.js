const express = require('express')
const cors = require('cors')
const studentRouter = require('./controllers/studentController')
const coursesRouter = require('./controllers/coursesController')
const dbRouter = require('./controllers/dbController');
require('express-async-errors')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/students", studentRouter);
app.use("/courses", coursesRouter);
app.use("/db", dbRouter);

module.exports = app