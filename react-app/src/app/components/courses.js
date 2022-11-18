import React from "react";
import './page.css';
import Course from "./course";
import { useSelector } from "react-redux";
import { selectCourses } from "../../features/coursesSlice";

const Courses = () => {
    const courses = useSelector(selectCourses)
    
    if(courses === null){
        return <></>
    }
    return(
        <div className="page">
            {courses.map((course, i) => {
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
                        schDay2 = {courses[i+1].SCHEDULEDDAY}
                        schTime2 = {courses[i+1].SCHEDULEDTIME}
                        loc2 = {courses[i+1].SECTIONLOCATION}
                        purpose = 'enroll'
                        btnVal= 'Enroll'
                    />)
                }
            })}
        </div>
    )
}

export default Courses;