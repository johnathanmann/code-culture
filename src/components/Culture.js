import React, { useState } from 'react';
import Footer from './Footer'
import Home from './pages/Homepage';
import Technology from './pages/Technology';
import techTypes from '../assets/tech.json'

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from "../assets/imgs/cc-logo.png";


import "../styles/styles.css";
import "../styles/navtabs.css";

export default function Culture() {
  document.body.style = 'background: #FCEFE1;';
  const [currentPage, setCurrentPage] = useState('Home');

  const [currentTech, setCurrentTech] = useState({tech:""})
  
    const changeState = (techParamater) => {  
        
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

  const languages = techTypes.filter(function(i) {
    return i.type ===  "Language";
  });
  const frameworks = techTypes.filter(function(i) {
    return i.type ===  "CSS-Framework";
  });
  const libraries = techTypes.filter(function(i) {
    return i.type ===  "JavaScript-Library";
  });



  return (
    <div>
      <Navbar expand="lg" id="navbar">
      <Container>
      <Navbar.Brand><img id="icon" src={icon} alt="Code culture logo which is the letter C inside a larger letter C"/><button className="navbar-btn" onClick={()=> handlePageChange('Home')}><span id="brand">Code Culture</span></button></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="justify-content-end" id="basic-navbar-nav">
          <Nav >
          <NavDropdown title="Languages" id="basic-nav-dropdown">
          {languages.map((language, index)=>{
            return <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange(languages[index].name)}>{languages[index].name}</button></NavDropdown.Item>
            })}
            </NavDropdown>
            <NavDropdown title="CSS Framework" id="basic-nav-dropdown">
            {frameworks.map((framework, index)=>{
            return <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange(frameworks[index].name)}>{frameworks[index].name}</button></NavDropdown.Item>
            })}
            </NavDropdown>
          <NavDropdown title="JavaScript Library" id="basic-nav-dropdown">
          {libraries.map((library, index)=>{
            return <NavDropdown.Item><button className="navbar-btn" onClick={()=> techPageChange(libraries[index].name)}>{libraries[index].name}</button></NavDropdown.Item>
            })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
      {renderPage()}
      <Footer/>
    </div>
  );
}
