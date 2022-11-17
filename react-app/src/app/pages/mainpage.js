import React from "react";
import Header from "../components/header";
import Courses from "../components/courses";
import EnrolledCourses from "../components/enrolledCourses";
import FinancialInfo from "../components/financialInfo";
import { useState } from "react";
import './mainpage.css';

const Mainpage = () =>{
    const [page, changepage] = useState('enroll');

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