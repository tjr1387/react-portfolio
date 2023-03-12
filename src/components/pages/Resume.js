import React from 'react';

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <a href="./assets/fake-resume.txt" download="fake-resume.txt">
         <button className="download-btn">Download Resume</button>
      </a>
      <div id="profic-list">
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>FEP one</li>
          <li>FEP two</li>
          <li>FEP three</li>
        </ul>
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>BEP one</li>
          <li>BEP two</li>
          <li>BEP three</li>
        </ul>
      </div>
    </>
  );
}