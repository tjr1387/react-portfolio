import React from 'react';

export default function Footer() {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-item">
          <a href="https://github.com/tjr1387" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            Other
          </a>
        </li>
      </ul>
    </footer>
  );
}