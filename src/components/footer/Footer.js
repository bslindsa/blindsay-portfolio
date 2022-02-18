import React from 'react';
import email from './gmail-icon.jpg';
import linkedin from './linkedin-icon.jpg';
import github from './github-icon.jpg';
import './Footer.css';


export default function Footer() {
  return (
    <div className='footer-all'>
      <footer>
        <p className='copyright'>&copy;2021 Don't_Judge Content</p>
      </footer>
      <div className="contactInfo col-sm-12">
        <div className="row">
          <div className="icons col">
            <a href="mailto:dont.judge712@gmail.com"><img src={email}
              alt="Brad Lindsay Email" /></a>
          </div>
          <div className="icons col">
            <a href="https://www.linkedin.com/in/brad-lindsay-473576152"><img id="linkedin"
              src={linkedin} alt="Brad Lindsay Linkedin." /></a>
          </div>
          <div className="icons col">
            <a href="https://github.com/bslindsa"><img id="github" src={github}
              alt="Brad Lindsay Github" /></a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
