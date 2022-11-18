import React from "react";
import './page.css'
import Course from "./course";
import { useSelector } from "react-redux";
import { selectStudentCourses } from "../../features/studentCoursesSlice";

const EnrolledCourses = () => {
    const studentCourses = useSelector(selectStudentCourses)
    let enrolledCourses = studentCourses.enrolledCourses
    let waitListedCourses = studentCourses.waitListedCourses

    return(
        <div className="page">
            <h1>Enrolled Courses</h1>
            {enrolledCourses.map((course, i) => {
                if(i % 2 === 0){
                    return(
                    <Course 
                        key = {i}
                        courseId = {course.COURSEID}
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
                        courseName = {course.COURSETITLE}
                        instructorName = {course.INSTRUCTORNAME} 
                        schDay1 = {course.SCHEDULEDDAY}
                        schTime1 = {course.SCHEDULEDTIME}
                        loc1 = {course.SECTIONLOCATION}
                        schDay2 = {waitListedCourses[i+1].SCHEDULEDDAY}
                        schTime2 = {waitListedCourses[i+1].SCHEDULEDTIME}
                        loc2 = {waitListedCourses[i+1].SECTIONLOCATION}
                        purpose = 'Remove'
                        btnVal = 'Remove'
                    />)
                }
            })}
        </div>
    )
}

export default EnrolledCourses;