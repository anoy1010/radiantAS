import React from 'react'
import './App.css';



import Home from './Home';
import Pages from './Pages'
import Contacts from './Contacts'
import Services from './Services';
import Login from './loginForm/Login';
import Clientlogin from './loginForm/Clientlogin';
import Personallogin from './loginForm/Personallogin';
import Register from './loginForm/Register';
import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Services' element={<Services />}/>
        
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
