import React from 'react';
import { useState } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { fetchStudent } from '../../features/studentSlice';

const Login = () => {
    const [studentNum, updateStudentNum] = useState('');
    const dispatch = useDispatch();

    const login = (studentNum) => {
        dispatch(fetchStudent(studentNum))
    }

    return(
        <div className='login'>
            <div className='loginContainer'>
                <div className='userInput'>
                    <h2>Sign In</h2>
                    <input className='studentNumInput' type='text' placeholder='Student No.' onChange={(e) => updateStudentNum(e.target.value)}/>
                    <input onClick={() => login(studentNum)} className='signInBtn' value='Sign In' type='button'/>
                </div>
            </div>
        </div>
    )
}

export default Login;