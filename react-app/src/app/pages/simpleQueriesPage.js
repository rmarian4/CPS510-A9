import React, {useState, useEffect} from 'react'
import { getSimpleQueryResults } from '../../services/dbServices'
import './simpleQueriesPage.css'

const SimpleQueriesPage = ({setCloseWindow}) => {
    const [queryResults, setQueryResults] = useState(null)

    useEffect(() => {
        getSimpleQueryResults()
        .then(data => {
            setQueryResults(data)
        })
    }, [])

    return (
        <div>
            <input className='closebtn' type='button' value='Close Window' onClick={() => setCloseWindow(false)}/>
            { queryResults !== null &&
                <div>
                    <p>get the courses a student with studentId of 500747921 is enrolled in</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>CourseId</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[0][0].COURSEID}</td>
                            </tr>
                            <tr>
                                <td>{queryResults[0][1].COURSEID}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>get the location of cps510 section 1</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>SectionLocation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[1][0].SECTIONLOCATION}</td>
                            </tr>
                            <tr>
                                <td>{queryResults[1][1].SECTIONLOCATION}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>get the name of the instructor with an id of 1</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>InstructorName</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[2][0].INSTRUCTORNAME}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>get the courseId of the courses a student with id of 500821821 has been wait listed for</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>CourseId</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[3][0].COURSEID}</td>
                            </tr>
                            <tr>
                                <td>{queryResults[3][1].COURSEID}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>get the department name of the department with id of 1</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>DepName</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[4][0].DEPNAME}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>get all students on the waitlist for cps510 section 1</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>StudentId</th>
                                <th>DateAdded</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[5][0].STUDENTID}</td>
                                <td>{queryResults[5][0].DATEADDED}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>


            }
        </div>
    )
}

export default SimpleQueriesPage