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

export const dropCourse = async (studentId, courseId, sectionNum) => {
    await axios.delete(`${connection}/students/dropCourse/${studentId}/${courseId}/${sectionNum}`)
}

export const removeWaitlistedCourse = async (studentId, courseId, sectionNum) => {
    await axios.delete(`${connection}/students/removeCourseFromWaitlist/${studentId}/${courseId}/${sectionNum}`)
}

export const enrollStudentInCourse = async (studentId, courseId, sectionNum, waitlistCapacity, sectionCapacity) => {
    await axios.post(`${connection}/students/enrollStudent/${studentId}/${courseId}/${sectionNum}/${waitlistCapacity}/${sectionCapacity}`)
}

