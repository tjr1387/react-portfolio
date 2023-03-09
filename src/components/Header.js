import React, { useState } from 'react';

import Navigation from './Navigation';

// will contain name on one side, and a navbar on these rest which holds the Navigation component iterations
export default function Header({ currentPage, handlePageChange}) {
  return (
    <header>
      Tyler Reimer
      <nav>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
    </header>
  );
}