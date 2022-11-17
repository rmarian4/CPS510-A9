import React from "react";
import './component.css';

const Course = () => {
    return (
        <div className="component">
            <table className="table">
                <thead>
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Scheduled Day</th>
                        <th>Scheduled Time</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CPS633</td>
                        <td>Computer Security</td>
                        <td>Tuesday</td>
                        <td>14-16</td>
                        <td>ENG103</td>
                        <td>
                            <input className="actionBtn" type='button' value='enroll'/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <th></th>
                        <td>Thursday</td>
                        <td>15-16</td>
                        <td>ENG103</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default Course;