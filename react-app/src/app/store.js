import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../features/studentSlice';
import coursesSlice from '../features/coursesSlice';
import studentCoursesSlice from '../features/studentCoursesSlice';
import studentTuitionSlice from '../features/studentTuitionSlice';

export const store = configureStore({
  reducer: {
    student: studentReducer,
    courses: coursesSlice,
    studentCourses: studentCoursesSlice,
    studentTuition: studentTuitionSlice
  },
});
