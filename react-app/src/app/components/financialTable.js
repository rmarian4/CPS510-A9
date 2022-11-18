import React from "react";
import './component.css';

const FinancialTable = ({amount_owed, due_date, date_paid}) => {
    return(
        <div className="component">
            <table className="table">
                <thead>
                    <tr>
                        <th>Amount Owed</th>
                        <th>Due Date</th>
                        <th>Amount Paid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${amount_owed}</td>
                        <td>{due_date.slice(0,10)}</td>
                        <td>{date_paid === null ? '-' : amount_owed}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default FinancialTable;