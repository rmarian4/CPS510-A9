import React from "react";
import FinancialTable from "./financialTable";
import './page.css';
import { useSelector } from "react-redux";
import { selectStudentTuition } from "../../features/studentTuitionSlice";

const FinancialInfo = () => {
    const studentTuitionInfo = useSelector(selectStudentTuition)

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