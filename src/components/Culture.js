import React, { useState } from 'react';
import Footer from './Footer'
import Home from './pages/Homepage';
import Technology from './pages/Technology';
import techTypes from '../assets/tech.json'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import jQuery from 'jquery';


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
    return i.type ===  "CSS Framework";
  });
  const libraries = techTypes.filter(function(i) {
    return i.type ===  "JavaScript Library";
  });



  return (
    <div>
      <Navbar id="navbar" className='fixed-top'>
      <Container>
        <Navbar.Brand><button className="navbar-btn" onClick={()=> handlePageChange('Home')}>Code Culture</button></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {renderPage()}
      <Footer/>
    </div>
  );
}
