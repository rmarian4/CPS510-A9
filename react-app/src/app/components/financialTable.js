import React from "react";
import './component.css';

const FinancialTable = () => {
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
                        <td>$1500</td>
                        <td>12/25/2022</td>
                        <td>-</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default FinancialTable;