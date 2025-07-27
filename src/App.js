import React from 'react';import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/DashBoard';
import LandingPage from './components/LandingPage';
import CardCreationFreePage from './components/CardCreationFreePage';
import CardCreationPaidPage from './components/CardCreationPaidPage';
import CardViewPage from './components/CardViewPage';
import HeaderPage from './components/HeaderPage'
import PricingPage from './staticpage/PricingPage';
import ResourcesPage from './staticpage/ResourcesPage'
import FeaturesPage from './staticpage/FeaturesPage'
import AboutPage from './staticpage/AboutPage'
import SampleCardPage from './components/SampleCardPage';
import FirstPage from './components/FirstPage';
function AppWrapper()
{
const location =useLocation();
  const hideHeaderPaths=['/RegisterPage','/LoginPage','/SampleCardPage'];
  return(
    <>
        {!hideHeaderPaths.includes(location.pathname)&&<HeaderPage/>}
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/PricingPage" element={<PricingPage/>}/>
        <Route path="/ResourcesPage" element={<ResourcesPage/>}/>
        <Route path="/FeaturesPage" element={<FeaturesPage/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>
        <Route path="/DashBoard" element={<Dashboard/>}/>
        <Route path="/AboutPage" element={<AboutPage/>}/>
        <Route path="/SampleCardPage" element={<SampleCardPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/CardCreationFreePage" element={<CardCreationFreePage/>}/>
        <Route path="/CardCreationPaidPage" element={<CardCreationPaidPage/>}/>
        <Route path="/CardViewPage" element={<CardViewPage/>}/>
        <Route path="/FirstPage" element={<FirstPage/>}/>
        </Routes>
  
    </>
  )
}

function App() {
  return (
    <Router>
      <AppWrapper/>
    </Router>
      );
}

export default App;
