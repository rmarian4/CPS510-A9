import React from "react";
import Header from "../components/header";
import Courses from "../components/courses";
import EnrolledCourses from "../components/enrolledCourses";
import FinancialInfo from "../components/financialInfo";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../features/coursesSlice";
import { fetchEnrolledCourses, fetchWaitlistedCourses } from "../../features/studentCoursesSlice";
import { selectStudent } from "../../features/studentSlice";
import { fetchStudentTuition } from "../../features/studentTuitionSlice";
import './mainpage.css';

const Mainpage = () =>{
    const student = useSelector(selectStudent)
    const dispatch = useDispatch();
    const [page, changepage] = useState('enroll');

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])

    useEffect(() => {
        dispatch(fetchEnrolledCourses(student.STUDENTID))
        dispatch(fetchWaitlistedCourses(student.STUDENTID))
        dispatch(fetchStudentTuition(student.STUDENTID))
    }, [student])



    return (
        <div className="mainpage">
            <Header changestate={changepage}/>
            {page === 'enroll' && <Courses/>}
            {page === 'enrolledCourses' && <EnrolledCourses/>}
            {page === 'financials' && <FinancialInfo/>}
        </div>
    )
}

export default Mainpage;