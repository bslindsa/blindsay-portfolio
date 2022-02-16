import React from 'react';
import email from './gmail-icon.jpg';
import linkedin from './linkedin-icon.jpg';
import github from './github-icon.jpg';


export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div class="contactInfo col-md-9">
        <div class="row">
          <div class="icons col">
            <a href="mailto:dont.judge712@gmail.com"><img src={email}
              alt="Brad Lindsay Email" /></a>
          </div>
          <div class="icons col">
            <a href="https://www.linkedin.com/in/brad-lindsay-473576152"><img id="linkedin"
              src={linkedin} alt="Brad Lindsay Linkedin." /></a>
          </div>
          <div class="icons col">
            <a href="https://github.com/bslindsa"><img id="github" src={github}
              alt="Brad Lindsay Github" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
