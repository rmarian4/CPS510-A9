import React from "react";
import './component.css';
import { useDispatch, useSelector } from "react-redux";
import { selectStudent } from "../../features/studentSlice";
import { dropEnrolledCourse, dropCourseFromWaitlist, fetchEnrolledCourses, fetchWaitlistedCourses, selectStudentCourses } from "../../features/studentCoursesSlice";
import { enrollStudentInCourse } from "../../services/studentService";

const Course = ({courseId, sectionNum, courseName, instructorName, schDay1, schTime1, loc1, schDay2, schTime2, loc2, purpose, btnVal, sectionCapacity, waitlistCapacity}) => {
    const dispatch = useDispatch()
    const student = useSelector(selectStudent)
    
    const onClickFunc = () => {
        if(purpose === "drop"){
            dispatch(dropEnrolledCourse(student.STUDENTID, courseId, sectionNum))
        } else if (purpose === 'remove') {
            dispatch(dropCourseFromWaitlist(student.STUDENTID, courseId, sectionNum))
        } else if (purpose === 'enroll') {
            enrollStudentInCourse(student.STUDENTID, courseId, sectionNum, waitlistCapacity, sectionCapacity)
            dispatch(fetchEnrolledCourses(student.STUDENTID))
            dispatch(fetchWaitlistedCourses(student.STUDENTID))
        }
    }

   
    return (
        <div className="component">
            <table className="table">
                <thead>
                    <tr>
                        <th>Course Id</th>
                        <th>Section #</th>
                        <th>Course Name</th>
                        <th>Instructor Name</th>
                        <th>Scheduled Day</th>
                        <th>Scheduled Time</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{courseId}</td>
                        <td>{sectionNum}</td>
                        <td>{courseName}</td>
                        <td>{instructorName}</td>
                        <td>{schDay1}</td>
                        <td>{schTime1}</td>
                        <td>{loc1}</td>
                        <td>
                            {(purpose === 'drop' || purpose === 'remove' || purpose === 'enroll') &&
                            <input onClick={() => onClickFunc()} className="actionBtn" type='button' value={btnVal}/> }
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{schDay2}</td>
                        <td>{schTime2}</td>
                        <td>{loc2}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default Course;