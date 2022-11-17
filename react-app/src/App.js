import React from 'react';
import './App.css';
import Login from './app/pages/login';
import Mainpage from './app/pages/mainpage';
import {useSelector} from 'react-redux';
import {selectStudent} from './features/studentSlice';

function App() {
  const state = useSelector(selectStudent)
  
  return (
    <div className="App">
      {state === null ? <Login/> : <Mainpage/>}
    </div>
  );
}

export default App;
