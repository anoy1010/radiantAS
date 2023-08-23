import React from 'react'
import './App.css';

import {Route, Links, Router, Routes} from 'react-router-dom'

import Home from './Home';
import Pages from './Pages'
import Contacts from './Contacts'
import Services from './Services';
import Login from './loginForm/Login';

function App() {
  return (
    <div>

      <Login />
      
    </div>
  );
}

export default App;
