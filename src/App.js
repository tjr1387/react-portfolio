import './App.css'; //stylesheet
import React, { useState } from 'react';
// components:
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
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
      //* The components will be arranged in here */}
      //* Probably just Header, Project component loop, and Footer */}
      //* Navigation is nested inside Header, so it doesn't need to go here */}
    <div className="portfolio-app">
      <Header />
      <main>
      {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// will want access to this functionality, but nav component should be plopped into the Header component
// <div> 
//   <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//   {renderPage()}
// </div>


export default App;
