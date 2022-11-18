import axios from 'axios';

const connection = 'http://localhost:3001';

export const getStudent = async (studentId) => {
    let response = await axios.get(`${connection}/students/${studentId}`)
    return response.data
}

export const getCoursesEnrolledIn = async (studentId) => {
    let response = await axios.get(`${connection}/students/enrolledCourses/${studentId}`)
    return response.data
}

export const getCoursesWaitlistedFor = async (studentId) => {
    let response = await axios.get(`${connection}/students/waitListedCourses/${studentId}`)
    return response.data
}

export const getStudentTuition = async (studentId) => {
    let response = await axios.get(`${connection}/students/tuition/${studentId}`)
    return response.data
}

