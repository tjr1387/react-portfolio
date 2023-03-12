import React from 'react';

export default function Project(props) {
  return (
    <div key={props.key} className="project-item" style={{ backgroundImage: `url(${props.imgSrc})` }}>
      <a className="project-title" href={props.liveSiteUrl} target="_blank" rel="noopener noreferrer">{props.title}</a>
      <p className="project-desc">{props.description}</p>
      <a className="project-github" href={props.gitHubUrl} target="_blank" rel="noopener noreferrer">REPO</a>
    </div>
  );
}