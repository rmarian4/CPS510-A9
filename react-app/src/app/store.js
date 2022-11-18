import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../features/studentSlice';
import coursesSlice from '../features/coursesSlice';

export const store = configureStore({
  reducer: {
    student: studentReducer,
    courses: coursesSlice
  },
});
