import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer'
import Home from './pages/Homepage';
import Technology from './pages/Technology';
export default function Culture() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'Technology') {
      return <Technology handlePageChange={handlePageChange}/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
      {renderPage()}
    </div>
  );
}
