import React, {useState, useEffect} from 'react'
import { getAdvancedQueryResults } from '../../services/dbServices'
import './simpleQueriesPage.css'


const AdvancedQueriesPage = ({setCloseWindow}) => {
    const [queryResults, setQueryResults] = useState(null)

    useEffect(() => {
        getAdvancedQueryResults()
        .then(data => {
            setQueryResults(data)
        })
    }, [])
    return (
        <div>
        {queryResults !== null && 
            <div>
                <input className='closebtn' type='button' value='Close Window' onClick={() => setCloseWindow(false)}/>   
                    <p>get the names of all the students enrolled in cps510 section 1</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>StudentName</th>
                                <th>CourseId</th>
                                <th>SectionNum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[0][0].STUDENTNAME}</td>
                                <td>{queryResults[0][0].COURSEID}</td>
                                <td>{queryResults[0][0].SECTIONNUM}</td>
                            </tr>
                            <tr>
                                <td>{queryResults[0][1].STUDENTNAME}</td>
                                <td>{queryResults[0][1].COURSEID}</td>
                                <td>{queryResults[0][1].SECTIONNUM}</td>
                            </tr>
                        </tbody>
                    </table>  

                    <p>get the names of all the students enrolled in a course where the instructor id is 1</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>CourseId</th>
                                <th>InstructorName</th>
                                <th>SectionNum</th>
                                <th>StudentName</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[1][0].COURSEID}</td>
                                <td>{queryResults[1][0].INSTRUCTORNAME}</td>
                                <td>{queryResults[1][0].SECTIONNUM}</td>
                                <td>{queryResults[1][0].STUDENTNAME}</td>
                            </tr>
                            <tr>
                                <td>{queryResults[1][1].COURSEID}</td>
                                <td>{queryResults[1][1].INSTRUCTORNAME}</td>
                                <td>{queryResults[1][1].SECTIONNUM}</td>
                                <td>{queryResults[1][1].STUDENTNAME}</td>
                            </tr>
                        </tbody>
                    </table>  

                    <p>get the names of all the students enrolled in a course with professor Abhari</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>StudentName</th>
                                <th>SectionNum</th>
                                <th>CourseId</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[2][0].STUDENTNAME}</td>
                                <td>{queryResults[2][0].SECTIONNUM}</td>
                                <td>{queryResults[2][0].COURSEID}</td>
                            </tr>
                            <tr>
                                <td>{queryResults[2][1].STUDENTNAME}</td>
                                <td>{queryResults[2][1].SECTIONNUM}</td>
                                <td>{queryResults[2][1].COURSEID}</td>
                            </tr>
                        </tbody>
                    </table>  

                    <p>get the waitlists that a student is placed on</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>StudentName</th>
                                <th>CourseId</th>
                                <th>SectionNum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[3][0].STUDENTNAME}</td>
                                <td>{queryResults[3][0].COURSEID}</td>
                                <td>{queryResults[3][0].SECTIONNUM}</td>
                            </tr>
                        </tbody>
                    </table>  

                    <p>get instructor name, course title and course description for each section</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>courseDescription</th>
                                <th>CourseId</th>
                                <th>CourseTitle</th>
                                <th>InstructorName</th>
                                <th>SectionNum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[4][0].COURSEDESCRIPTION}</td>
                                <td>{queryResults[4][0].COURSEID}</td>
                                <td>{queryResults[4][0].COURSETITLE}</td>
                                <td>{queryResults[4][0].INSTRUCTORNAME}</td>
                                <td>{queryResults[4][0].SECTIONNUM}</td>
                            </tr>
                            <tr>
                                <td>{queryResults[4][1].COURSEDESCRIPTION}</td>
                                <td>{queryResults[4][1].COURSEID}</td>
                                <td>{queryResults[4][1].COURSETITLE}</td>
                                <td>{queryResults[4][1].INSTRUCTORNAME}</td>
                                <td>{queryResults[4][1].SECTIONNUM}</td>
                            </tr>
                            <tr>
                                <td>{queryResults[4][2].COURSEDESCRIPTION}</td>
                                <td>{queryResults[4][2].COURSEID}</td>
                                <td>{queryResults[4][2].COURSETITLE}</td>
                                <td>{queryResults[4][2].INSTRUCTORNAME}</td>
                                <td>{queryResults[4][2].SECTIONNUM}</td>
                            </tr>
                        </tbody>
                    </table>  

                    <p>Count number of people enrolled in a course</p>

                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>CourseId</th>
                                <th>SectionNum</th>
                                <th>Number_enrolled</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[5][0].COURSEID}</td>
                                <td>{queryResults[5][0].SECTIONNUM}</td>
                                <td>{queryResults[5][0].NUMBER_ENROLLED}</td>
                            </tr>
                        </tbody>
                    </table> 

                    <p>calculate the tuition that the student owes</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>Due_Date</th>
                                <th>StudentName</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[6][0].DUE_DATE}</td>
                                <td>{queryResults[6][0].STUDENTNAME}</td>
                                <td>{queryResults[6][0].AMOUNT}</td>
                            </tr>
                        </tbody>
                    </table> 

                    <p>calculate the number of people that are the waitlist for a specific course</p>
                    <table className='tables'>
                        <thead>
                            <tr>
                                <th>CourseId</th>
                                <th>NumPeopleOnWaitlist</th>
                                <th>SectionNum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{queryResults[7][0].COURSEID}</td>
                                <td>{queryResults[7][0].NUMPEOPLEONWAITLIST}</td>
                                <td>{queryResults[7][0].SECTIONNUM}</td>
                            </tr>
                        </tbody>
                    </table> 
            </div>
        }
        </div>
    )
}

export default AdvancedQueriesPage