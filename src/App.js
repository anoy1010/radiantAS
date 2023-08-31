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
import About from './About';
import ServiceE from './ServiceE';
import ServicesP from './ServicesP';



function PrimaryPage() {
  return(
    <div>
      
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Services' element={<Services />}/>
          <Route path='/loginForm/Login' element={<Login />}  />
          <Route path='/loginForm/Register' element={<Register/>}/> 
          <Route path='/Contacts' element={<Contacts/>}/> 
          <Route path='/About' element={<About/>}/> 
          <Route path='/ServicesP' element={<ServicesP/>}/> 
          <Route path='/ServiceE' element={<ServiceE/>}/> 




      </Routes>
     
    </div>
  )
  
}

function App() {
  return (
    <div>
      <PrimaryPage/>  
    </div>
  );
}


export default App;
