import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer'
import Home from './pages/Homepage';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Technology') {
      return <Technology />;
    }
  };

  const handlePageChange = (page, technology) => setCurrentPage(page, technology);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}
