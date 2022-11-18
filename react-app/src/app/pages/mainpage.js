import React from "react";
import Header from "../components/header";
import Courses from "../components/courses";
import EnrolledCourses from "../components/enrolledCourses";
import FinancialInfo from "../components/financialInfo";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCourses } from "../../features/coursesSlice";
import './mainpage.css';

const Mainpage = () =>{
    const dispatch = useDispatch();
    const [page, changepage] = useState('enroll');

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])

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