const studentRouter = require('express').Router()
const { request } = require('express');
const queries = require('../database/queries')

studentRouter.get("/:id", async (request, response) => {
    const students = await queries.getStudent(request.params.id)
    if (students.length == 0) {
        return response.status(404).end();
    }
    return response.json(students[0])
});

studentRouter.get("/enrolledCourses/:id", async (request, response) => {
    const enrolledCourses = await queries.getEnrolledCourses(request.params.id)
    return response.json(enrolledCourses)
})

studentRouter.get("/waitListedCourses/:id", async (request, response) => {
    const waitListedCourses = await queries.getCoursesWaitlistedFor(request.params.id)
    return response.json(waitListedCourses)
})

studentRouter.get("/tuition/:id", async (request, response) => {
    const tuitionInfo = await queries.getStudentTuition(request.params.id)
    return response.json(tuitionInfo)
})

studentRouter.get("/enrollmentTotal/:courseId/:sectionNum", async (request, response) => {
    const total = await queries.getNumPeopleEnrolledInCourse(request.params.courseId, request.params.sectionNum)
    return response.json(total)
})

studentRouter.delete("/dropCourse/:studentId/:courseId/:sectionNum", async (request, response) => {
    await queries.dropCourse(request.params.studentId, request.params.courseId, request.params.sectionNum)
    response.status(204)
    response.end()
})

studentRouter.delete("/removeCourseFromWaitlist/:studentId/:courseId/:sectionNum", async (request, response) => {
    await queries.removeCourseFromWaitlist(request.params.studentId, request.params.courseId, request.params.sectionNum)
    response.status(204)
    response.end()
})

studentRouter.post("/enrollStudent/:studentId/:courseId/:sectionNum/:waitlistCapacity/:sectionCapacity", async (request, response) => {
    const success = await queries.enrollStudent(request.params.studentId, request.params.courseId, parseInt(request.params.sectionNum), parseInt(request.params.waitlistCapacity), parseInt(request.params.sectionCapacity))
    if (success) {
        response.status(201);
    } else {
        response.status(400);
    }
    response.end();
})

/*
Todo:
    -add functionality to enroll and unenroll students from a course
    -add functionality to calculate tuition amount owed for student
*/ 

module.exports = studentRouter