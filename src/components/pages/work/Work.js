import React from 'react';
import './Work.css';

export default function Work(props) {

  return (
    <div className='work-page'>
      <h1>Work Page</h1>
      <div className='d-flex flex-wrap justify-content-around'>
        {props.projects.map(project => (
          <div key={project.title} className="project col-5 mb-5">
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
