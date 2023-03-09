import './App.css';
import React, { useState } from 'react';
// components (the other two are nested inside other components/pages):
import Header from './components/Header';
import Footer from './components/Footer';
// pages:
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolio-app">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
      {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
