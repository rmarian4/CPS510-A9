const coursesRouter = require('express').Router()
const queries = require('../database/queries')

coursesRouter.get("", async (request, response) => {
    const courses = await queries.getCoursesOffered()
    return response.json(courses)
});

module.exports = coursesRouter
