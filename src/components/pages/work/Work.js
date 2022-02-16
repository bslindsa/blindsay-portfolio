import React from 'react';
import './Work.js';

export default function Work(props) {

  return (
    <div>
      <h1>Work Page</h1>
      <div className='d-flex flex-wrap justify-content-around'>
        {props.projects.map(project => (
          <div className="project">
            <div className="card">
              <a href={project.link}>
                <img src={project.image}
                  alt={project.alt} />
                <header className="proj-head">{project.title}</header>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
