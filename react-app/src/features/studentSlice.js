import { createSlice } from '@reduxjs/toolkit';
import { getStudent } from '../services/studentService';

const initialState = null;



export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    loginStudent: (state, action) => {
      return action.payload
    }, 
    signOutStudent:(state,action) => {
      return initialState
    }
  },
});

export const fetchStudent = (studentId) => {
    return async dispatch => {
        const student = await getStudent(studentId)
        dispatch(loginStudent(student))
    }
} 

export const { loginStudent, signOutStudent } = studentSlice.actions;

export const selectStudent = (state) => state.student;

export default studentSlice.reducer;
