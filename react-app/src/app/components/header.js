import React from "react";
import './header.css';
import { useDispatch } from "react-redux";
import { signOutStudent } from "../../features/studentSlice";

const Header = ({changestate}) => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutStudent())
    }

    return (
        <div className="header">
            <div onClick={() => changestate('enroll')} className="headeroption">Enroll in courses</div>
            <div onClick={() => changestate('enrolledCourses')} className="headeroption">See Courses Enrolled In</div>
            <div onClick={() => changestate('financials')} className="headeroption">Financial Info.</div>
            <div onClick={() => signOut() } className="headeroption">Sign Out</div>
        </div>
    )
}

export default Header;