import { createSlice } from '@reduxjs/toolkit';
import { getCourses } from '../services/coursesService';

const initialState = null;



export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getCoursesOffered: (state, action) => {
      return action.payload
    }
  },
});

export const fetchCourses = () => {
    return async dispatch => {
        const courses = await getCourses()
        dispatch(getCoursesOffered(courses))
    }
} 

export const { getCoursesOffered } = coursesSlice.actions;

export const selectCourses = (state) => state.courses;

export default coursesSlice.reducer;
