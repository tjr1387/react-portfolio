import React from 'react';
import Navigation from './Navigation';

// will contain name on one side, and a navbar on these rest which holds the Navigation component iterations
export default function Header({ currentPage, handlePageChange}) {
  return (
    <header>
      <span id="header-name">Tyler Reimer (@tjr1387)</span>
      <nav id="nav-bar">
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
    </header>
  );
}