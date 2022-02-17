import React from 'react';
import profilePic from './brad-profile.jpg';
import './About.css';

export default function About() {
  return (
    <div id='about'>
      <img className='pic square' src={profilePic} alt='Brad being brutally attacked by his small infant' />
      <p id="about-text">
        Aspiring software developer from Mesa, Arizona with a B.S.E. in
        Chemical Engineering. I have a knack for process design, troubleshooting, and creative design.
        My goal here is to create
        your best applications to make your processes more
        efficient and free up your time.
      </p>
    </div>
  );
}
