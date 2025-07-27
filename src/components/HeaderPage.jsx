import react from 'react';
import {Link} from 'react-router-dom'
import './cssfile/HeaderPage.css';

const headerPage=()=>
    {
return(
     <div className="landing-page">
      {/* Header */}
   
     <header className="header">
        <div>   
      <span className="logo">Idmate</span>
      <div className="slogan">Say Hello with a Tap.</div>
        </div>
  <div className="nav-buttons">
    <Link to="/FeaturesPage">
          <button className="nav-btn features-btn">Features</button>
         </Link>
          <Link to="/PricingPage">
          <button className="nav-btn pricing-btn">Pricing</button>
          </Link>
          <Link to="/AboutPage">
          <button className="nav-btn about-btn">About Us</button>
        </Link>
        </div>
      </header>
</div>
)
}
export default headerPage;