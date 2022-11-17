const studentRouter = require('express').Router()
const queries = require('../database/queries')

studentRouter.get("/:id", async (request, response) => {
    const students = await queries.getStudent(request.params.id)
    if (students.length == 0) {
        return response.status(404).end();
    }
    return response.json(students[0])
});

/*
Todo:
    -add functionality to enroll and unenroll students from a course
    -add functionality to calculate tuition amount owed for student
*/ 

module.exports = studentRouter