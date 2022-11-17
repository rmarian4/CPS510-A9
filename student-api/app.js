const express = require('express')
const cors = require('cors')
const studentRouter = require('./controllers/studentController')
require('express-async-errors')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/students", studentRouter);

module.exports = app