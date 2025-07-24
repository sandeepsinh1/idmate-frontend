import React from 'react';import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import FrontPage from './components/FrontPage'; // ✅ NO curly braces

import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import FirstPage from './components/FirstPage';
import Dashboard from './components/DashBoard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>
        <Route path="/FirstPage" element={<FirstPage/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        
        
      </Routes>
    </Router>
      );
}

export default App;
