import React, { useState } from 'react';

// the component for each project page link in the 'portfolio' page
// will take props

export default function Project(props) {    // should destructure fields out instead   
  return (
    <div class="project-item" style={`background-image: url("imgSrc prop")`}>
      <p class="project-title">Title Prop</p>
      <p class="project-desc">Description Prop</p>
      <a href="`repo prop`">Repo</a>
      <a href="`livesite prop`">Site/Video</a>
    </div>
  );
}