import React from 'react';
import Navigation from './Navigation';

// will contain name on one side, and a navbar on these rest which holds the Navigation component iterations
export default function Header({ currentPage, handlePageChange}) {
  return (
    <header>
      <span className="header-name">Tyler Reimer (@tjr1387)</span>
      <nav className="nav-bar">
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
    </header>
  );
}