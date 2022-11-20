import React, { useEffect } from "react";
import './page.css'
import Course from "./course";
import { useSelector, useDispatch } from "react-redux";
import { selectStudentCourses } from "../../features/studentCoursesSlice";
import { fetchEnrolledCourses, fetchWaitlistedCourses } from "../../features/studentCoursesSlice";
import { selectStudent } from "../../features/studentSlice";

const EnrolledCourses = () => {
    const dispatch = useDispatch()
    const studentCourses = useSelector(selectStudentCourses)
    const student = useSelector(selectStudent)
    let enrolledCourses = studentCourses.enrolledCourses
    let waitListedCourses = studentCourses.waitListedCourses

    useEffect(() => {
        dispatch(fetchEnrolledCourses(student.STUDENTID))
        dispatch(fetchWaitlistedCourses(student.STUDENTID))
    }, [])

    return(
        <div className="page">
            <h1>Enrolled Courses</h1>
            {enrolledCourses.map((course, i) => {
                if(i % 2 === 0){
                    return(
                    <Course 
                        key = {i}
                        courseId = {course.COURSEID}
                        sectionNum = {course.SECTIONNUM}
                        courseName = {course.COURSETITLE}
                        instructorName = {course.INSTRUCTORNAME} 
                        schDay1 = {course.SCHEDULEDDAY}
                        schTime1 = {course.SCHEDULEDTIME}
                        loc1 = {course.SECTIONLOCATION}
                        schDay2 = {enrolledCourses[i+1].SCHEDULEDDAY}
                        schTime2 = {enrolledCourses[i+1].SCHEDULEDTIME}
                        loc2 = {enrolledCourses[i+1].SECTIONLOCATION}
                        purpose = 'drop'
                        btnVal= 'Drop'
                    />)
                }
            })}
            <h1>Courses Wait Listed For</h1>
            {waitListedCourses.map((course, i) => {
                if(i % 2 === 0){
                    return(
                    <Course 
                        key = {i}
                        courseId = {course.COURSEID}
                        sectionNum = {course.SECTIONNUM}
                        courseName = {course.COURSETITLE}
                        instructorName = {course.INSTRUCTORNAME} 
                        schDay1 = {course.SCHEDULEDDAY}
                        schTime1 = {course.SCHEDULEDTIME}
                        loc1 = {course.SECTIONLOCATION}
                        schDay2 = {waitListedCourses[i+1].SCHEDULEDDAY}
                        schTime2 = {waitListedCourses[i+1].SCHEDULEDTIME}
                        loc2 = {waitListedCourses[i+1].SECTIONLOCATION}
                        purpose = 'remove'
                        btnVal = 'Remove'
                    />)
                }
            })}
        </div>
    )
}

export default EnrolledCourses;