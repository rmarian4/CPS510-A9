import React from 'react';
import { useState } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { fetchStudent } from '../../features/studentSlice';
import SimpleQueriesPage from './simpleQueriesPage';
import AdvancedQueriesPage from './advancedQueriesPage';
import { createDBTables, dropDBTables, populateDBTables } from '../../services/dbServices';
import QuriesPage from './queriesPage';
import NewWindow from 'react-new-window';

const Login = () => {
    const [studentNum, updateStudentNum] = useState('');
    const [openSQ, setOpenSQ] = useState(false)
    const [openAQ, setOpenAq] = useState(false)
    const [openCT, setOpenCT] = useState(false)
    const [openDT, setOpenDT] = useState(false)
    const [openPT, setOpenPT] = useState(false)
    const dispatch = useDispatch();
    const login = (studentNum) => {
        dispatch(fetchStudent(studentNum))
    }

    return(
        <div className='login'>
            {openSQ && <NewWindow><SimpleQueriesPage setCloseWindow={setOpenSQ}/></NewWindow>}
            {openAQ && <NewWindow><AdvancedQueriesPage setCloseWindow={setOpenAq}/></NewWindow>}
            {openDT && <NewWindow><QuriesPage setCloseWindow={setOpenDT} message='Tables Dropped' getFunc={dropDBTables}/></NewWindow>}
            {openCT && <NewWindow><QuriesPage setCloseWindow={setOpenCT} message='Tables Created' getFunc={createDBTables}/></NewWindow>}
            {openPT && <NewWindow><QuriesPage setCloseWindow={setOpenPT} message='Tables Populated' getFunc={populateDBTables}/></NewWindow>}

            <div className='btnContainer'>
                <input onClick={() => setOpenCT(!openCT)} className='queryButton'  type='button' value='Create Tables'/>
                <input onClick={() => setOpenDT(!openDT)} className='queryButton' type='button' value='Drop Tables'/>
                <input onClick={() => setOpenPT(!openPT)} className='queryButton' type='button' value='Populate Tables'/>
                <input onClick={() => setOpenSQ(!openSQ) } className='queryButton' type='button' value='Simple Queries'/>
                <input onClick={() => setOpenAq(!openAQ)} className='queryButton' type='button' value='Advanced Queries'/>
            </div>
            
            <div className='loginContainer'>
                <div className='userInput'>
                    <h5>Input a student # to enroll students into courses</h5>
                    <input className='studentNumInput' type='text' placeholder='Student No.' onChange={(e) => updateStudentNum(e.target.value)}/>
                    <input onClick={() => login(studentNum)} className='signInBtn' value='Sign In' type='button'/>
                </div>
            </div>
        </div>
    )
}

export default Login;