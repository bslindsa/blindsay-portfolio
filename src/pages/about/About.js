import React from 'react';
import profilePic from './brad-profile.jpg';
import './About.css';

export default function About() {
  return (
    <div id='about'>
      <img className='pic square' src={profilePic} alt='Brad being brutally attacked by his small infant' />
      <p id="about-text">
        Hey there! My name is Brad Lindsay, creator of &copy;Dont_Judge content! I've had quite the journey to get where I am today.
        After a childhood of excitement and a solid athletic carreer that brought me into the world of collegiate wresting,
         I found my way out with a B.S.E in Chemical Engineering from Arizona State University and a beautiful wife 
         who has been an amazing support and inspiration. After years of frustration feeling unfulfilled in my field, 
         I felt the inspiration to change my carreer course into something that will challenge me mentally and provide for my growing family.
        <br/><br/>
        Today, I am an aspiring software engineer from Mesa, Arizona with a knack for process design, troubleshooting, and a creative mind. 
        When I'm not busy at work, spending time with my family, or playing D&D with my friends, I am usually hard at work creating software 
        to improve my skills and share my products with my friends and family. 
        My goal and ultimate desire is to create your best applications to make your processes more efficient and free up your time.       
      </p>
    </div>
  );
}
