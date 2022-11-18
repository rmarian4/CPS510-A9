import React from "react";
import './component.css';

const Course = ({courseId, courseName, instructorName, schDay1, schTime1, loc1, schDay2, schTime2, loc2}) => {
    return (
        <div className="component">
            <table className="table">
                <thead>
                    <tr>
                        <th>Course Id</th>
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
                        <td>{courseName}</td>
                        <td>{instructorName}</td>
                        <td>{schDay1}</td>
                        <td>{schTime1}</td>
                        <td>{loc1}</td>
                        <td>
                            <input className="actionBtn" type='button' value='enroll'/>
                        </td>
                    </tr>
                    <tr>
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