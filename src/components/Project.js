import React from 'react';

export default function Project(props) {
  return (
    <div key={props.key} className="project-item" style={{ backgroundImage: `url(${props.imgSrc})` }}>
      <a className="project-title" href={props.liveSiteUrl}>{props.title}</a>
      <p className="project-desc">{props.description}</p>
      <a href={props.gitHubUrl}>Repo</a>
    </div>
  );
}