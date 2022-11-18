import { createSlice } from '@reduxjs/toolkit';
import { getStudentTuition } from '../services/studentService';

const initialState = null;


export const studentTuitionSlice = createSlice({
    name: 'studentTuition',
    initialState,
    reducers: {
      setStudentTuition: (state, action) => {
        return action.payload
      }
    },
  });

export const fetchStudentTuition = (studentId) => {
    return async dispatch => {
        let studentTuitionInfo = await getStudentTuition(studentId)
        dispatch(setStudentTuition(studentTuitionInfo))
    }
}

export const { setStudentTuition } = studentTuitionSlice.actions;

export const selectStudentTuition = (state) => state.studentTuition;

export default studentTuitionSlice.reducer;
  