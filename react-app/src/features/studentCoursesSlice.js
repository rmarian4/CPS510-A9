import { createSlice } from '@reduxjs/toolkit';
import { getCoursesEnrolledIn, getCoursesWaitlistedFor } from '../services/studentService';

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

export const { getEnrolledCourses, getWaitListedCourses } = studentCoursesSlice.actions;

export const selectStudentCourses = (state) => state.studentCourses;

export default studentCoursesSlice.reducer;
