import React, { useState } from 'react';
import './PortfolioContent.css'
import Header from '../header/Header';
import About from '../../pages/about/About';
import Work from '../../pages/work/Work';
import Contact from '../../pages/contact/Contact';
import Footer from '../footer/Footer';
import Resume from '../../pages/resume/Resume';
import stoxster from './images/stox-ster.png';
import superStatz from './images/super-statz.png';
import geekGathering from './images/tech-blog.gif';
import weatherDashboard from './images/weather-dashboard.JPG';
import passwordGenerator from './images/password-generator.gif';
import codeQuiz from './images/code-quiz.gif';
import employeeTracker from './images/employee-tracker.png';
import teamProfileGenerator from './images/team-profile-gen.gif';




const projects = [
  {
    title: "Stoxster",
    link: "https://wissamk08.github.io/BootCampProject-01",
    image: stoxster,
    alt: "Stoxster stock ticker tracker site homepage"
  },
  {
    title: "Super Statz",
    link: "https://super-statz.herokuapp.com/",
    image: superStatz,
    alt: "Super Statz game stats tracking site"
  },
  {
    title: "Tech Blog",
    link: "https://geek-gathering.herokuapp.com/",
    image: geekGathering,
    alt: "Geek Gathering tech blog site"
  },
  {
    title: "Weather Dashboard",
    link: "https://bslindsa.github.io/weather-dashboard/",
    image: weatherDashboard,
    alt: "Weather dashboard site"
  },
  {
    title: "Team Profile Generator",
    link: "https://github.com/bslindsa/team-profile-generator",
    image: teamProfileGenerator,
    alt: "Team Profile Generator Application"
  },
  {
    title: "Employee Tracker",
    link: "https://github.com/bslindsa/employee-tracker",
    image: employeeTracker,
    alt: "Employee Tracker Application"
  },
  {
    title: "Password Generator",
    link: "https://bslindsa.github.io/password-generator/",
    image: passwordGenerator,
    alt: "Random password generator"
  },
  {
    title: "Coding Quiz",
    link: "https://bslindsa.github.io/basic-coding-quiz/",
    image: codeQuiz,
    alt: "Fun coding quiz"
  },  
]

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work projects={projects} className="row" />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='main'>
      {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
