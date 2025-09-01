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
import DigitalCardDisplay from './components/DigitalCardDisplay';
import FormPage from './cardoption/FormPage';
import CardGenerator from './cardoption/CardGenerator';
import CardSelectionPage from './cardoption/CardSelectionPage';
import CardTemplate2 from './cardoption/CardTemplate2';
import CardTemplate1 from './cardoption/CardTemplate1';
import CardTemplate3 from './cardoption/CardTemplate3';
import CardTemplate4 from './cardoption/CardTemplate4';
import CardTemplate5 from './cardoption/CardTemplate5';
import CardTemplate6 from './cardoption/CardTemplate6';
import CardTemplate7 from './cardoption/CardTemplate7';
import CardTemplate8 from './cardoption/CardTemplate8';


function AppWrapper()
{
const location =useLocation();
  const hideHeaderPaths=['/RegisterPage','/LoginPage','/SampleCardPage','/FeaturesPage','/CardView'];
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
        <Route path="/DigitalCardDisplay" element={<DigitalCardDisplay/>}/>
        <Route path="/FormPage" element={<FormPage/>}/>
        <Route path="/CardSelectionPage" element={<CardSelectionPage/>}/>
        <Route path="/CardGenerator" element={<CardGenerator/>}/>
        <Route path="/CardTemplate1" element={<CardTemplate1/>}/>
        <Route path="/CardTemplate2" element={<CardTemplate2/>}/>
        <Route path="/CardTemplate3" element={<CardTemplate3/>}/>
        <Route path="/CardTemplate4" element={<CardTemplate4/>}/>
        <Route path="/CardTemplate5" element={<CardTemplate5/>}/>
        <Route path="/CardTemplate6" element={<CardTemplate6/>}/>
        <Route path="/CardTemplate8" element={<CardTemplate8/>}/>
        <Route path="/CardTemplate7" element={<CardTemplate7/>}/>
        
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
