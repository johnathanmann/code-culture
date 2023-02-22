import React, { useState } from 'react';
import jQuery from 'jquery';
import Footer from './Footer'
import Home from './pages/Homepage';
import Technology from './pages/Technology';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import "../styles/styles.css";
import "../styles/navtabs.css";

export default function Culture() {
  document.body.style = 'background: #FCEFE1;';
  const [currentPage, setCurrentPage] = useState('Home');

  const [currentTech, setCurrentTech] = useState({tech:""})
  
    const changeState = (techParamater) => {  
        // handlePageChange('Technology');
        setCurrentTech({tech:techParamater}); 
       }; 

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Technology') {
      return <Technology tech={currentTech.tech}/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const techPageChange  = (tech) => {
    handlePageChange('Technology');
    changeState(tech);
  }
  
  (function ($) {
    $(document).ready(function(){
      
    // hide .navbar first
    $(".navbar").hide();
    
    // fade in .navbar
    $(function () {
      $(window).scroll(function () {
              // set distance user needs to scroll before we fadeIn navbar
        if ($(this).scrollTop() > 100) {
          $('.navbar').fadeIn();
        } else {
          $('.navbar').fadeOut();
        }
      });
  
    
    });
  
  });
    }(jQuery));

  return (
    <div>
      <Navbar id="navbar" className='fixed-top'>
      <Container>
        <Navbar.Brand><button className="navbar-btn" onClick={()=> handlePageChange('Home')}>Code Culture</button></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Languages" id="basic-nav-dropdown">
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('HTML')}>HTML</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('CSS')}>CSS</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('JavaScript')}>JavaScript</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('PHP')}>PHP</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('TypeScript')}>TypeScript</button></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CSS Framework" id="basic-nav-dropdown">
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('Bootstrap')}>Bootstrap</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('Tailwind')}>Tailwind</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('Materialize')}>Materialize</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('Bulma')}>Bulma</button></NavDropdown.Item>
            </NavDropdown>
          <NavDropdown title="JavaScript Library" id="basic-nav-dropdown">
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('React')}>React</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('Angular')}>Angular</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('Vue')}>Vue</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('Ruby on Rails')}>Ruby on Rails</button></NavDropdown.Item>
              <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange('JQuery')}>JQuery</button></NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {renderPage()}
      <Footer/>
    </div>
  );
}
