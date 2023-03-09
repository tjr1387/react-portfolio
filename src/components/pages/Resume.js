import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      {/* Will need to make this a link to DL a resume file */}
      <a href="/assets/fake-resume.txt" download>
         <button className="download-btn">Download Resume</button>
      </a>
      
      <h2>Front-end Proficencies</h2>
      <ul>
        <li>Impossible</li>
        <li>to</li>
        <li>tell</li>
      </ul>
      <h2>Back-end Proficencies</h2>
      <ul>
        <li>Absolutely</li>
        <li>no</li>
        <li>idea</li>
      </ul>
    </div>
  );
}