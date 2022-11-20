import { createSlice } from '@reduxjs/toolkit';
import { getCoursesEnrolledIn, getCoursesWaitlistedFor, dropCourse, removeWaitlistedCourse } from '../services/studentService';

const initialState = {
    enrolledCourses: null,
    waitListedCourses: null
};



export const studentCoursesSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    getEnrolledCourses: (state, action) => {
      return {...state, enrolledCourses: action.payload}
    }, 
    getWaitListedCourses:(state,action) => {
      return {...state, waitListedCourses: action.payload}
    },
    removeEnrolledCourse:(state, action) => {
      return {...state, enrolledCourses: state.enrolledCourses.filter(c => c.COURSEID !== action.payload.courseId)}
    }, 
    removeCourseFromWaitlist:(state, action) => {
      let updatedWaitlistedCourses = state.waitListedCourses.filter(course => course.COURSEID !== action.payload.courseId || (course.COURSEID === action.payload.courseId && course.SECTIONNUM !== action.payload.sectionNum))
      return {...state, waitListedCourses: updatedWaitlistedCourses}
    }
  },
});

export const fetchEnrolledCourses = (studentId) => {
    return async dispatch => {
        const courses = await getCoursesEnrolledIn(studentId)
        dispatch(getEnrolledCourses(courses))
    }
} 

export const fetchWaitlistedCourses = (studentId) => {
    return async dispatch => {
        const courses = await getCoursesWaitlistedFor(studentId)
        dispatch(getWaitListedCourses(courses))
    }
}

export const dropEnrolledCourse = (studentId, courseId, sectionNum) => {
    return async dispatch => {
      await dropCourse(studentId, courseId, sectionNum)
      let courseInfo = {courseId, sectionNum}
      dispatch(removeEnrolledCourse(courseInfo))
    }
}

export const dropCourseFromWaitlist = (studentId, courseId, sectionNum) => {
    return async dispatch => {
      await removeWaitlistedCourse(studentId, courseId, sectionNum)
      let courseInfo = {studentId, courseId, sectionNum}
      dispatch(removeCourseFromWaitlist(courseInfo))
    }
}

export const { getEnrolledCourses, getWaitListedCourses, removeEnrolledCourse, removeCourseFromWaitlist } = studentCoursesSlice.actions;

export const selectStudentCourses = (state) => state.studentCourses;

export default studentCoursesSlice.reducer;
