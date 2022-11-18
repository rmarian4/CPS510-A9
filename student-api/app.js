const express = require('express')
const cors = require('cors')
const studentRouter = require('./controllers/studentController')
const coursesRouter = require('./controllers/coursesController')
require('express-async-errors')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/students", studentRouter);
app.use("/courses", coursesRouter);

module.exports = app