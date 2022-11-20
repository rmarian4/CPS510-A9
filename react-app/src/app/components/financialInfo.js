import React, { useEffect } from "react";
import FinancialTable from "./financialTable";
import './page.css';
import { useDispatch, useSelector } from "react-redux";
import { selectStudentTuition, fetchStudentTuition } from "../../features/studentTuitionSlice";
import { selectStudent } from "../../features/studentSlice";
const FinancialInfo = () => {
    const studentTuitionInfo = useSelector(selectStudentTuition)
    const student = useSelector(selectStudent)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStudentTuition(student.STUDENTID))
    }, [])


    if(studentTuitionInfo.length  === 0){
        return(
            <div className="page">
                <h1>No tuition owed</h1>
            </div>
        )
    }

    return(
        <div className="page">
            <FinancialTable
                amount_owed={studentTuitionInfo[0].AMOUNT}
                due_date={studentTuitionInfo[0].DUE_DATE}
                date_paid = {studentTuitionInfo[0].DATE_PAID}
            />
        </div>
    )
}

export default FinancialInfo;