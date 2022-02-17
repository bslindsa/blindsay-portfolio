import React from 'react';
import './Work.css';

export default function Work(props) {

  return (
    <div className='work-page'>
      <div className='d-flex flex-wrap justify-content-around'>
        {props.projects.map(project => (
          <div key={project.title} className="project col-5 mb-5">
            <div className="card">
              <a href={project.link}>
                <div>
                  <img className='image' src={project.image}
                    alt={project.alt} />
                </div>
                <div className="proj-head">
                  <header>{project.title}</header>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
