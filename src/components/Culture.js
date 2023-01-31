import React, { useState } from 'react';
import Footer from './Footer'
import Home from './pages/Homepage';
import Technology from './pages/Technology';
import { Nav, Navbar} from 'react-bootstrap';
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
    changeState(tech)
  }

  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect  expand="lg">
            <a className="navbar-brand"><h1>Code Culture</h1></a>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto d-block">
              <ul>
                <li>
                <Nav.Item>
                <a onClick={()=> techPageChange('react')}>React Page</a>
              </Nav.Item>
              </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      {renderPage()}
    </div>
  );
}
