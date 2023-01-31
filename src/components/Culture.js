import React, { useState } from 'react';
import Footer from './Footer'
import Home from './pages/Homepage';
import Technology from './pages/Technology';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "../styles/navtabs.css";

export default function Culture() {
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

  return (
    <div>
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item><button onClick={()=> techPageChange('HTML')}>React Page</button></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {renderPage()}
    </div>
  );
}
