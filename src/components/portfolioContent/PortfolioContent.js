import React, { useState } from 'react';
import './PortfolioContent.css'
import Header from '../header/Header';
import About from '../pages/about/About';
import Work from '../pages/work/Work';
import Contact from '../pages/contact/Contact';
import Footer from '../footer/Footer';
import Resume from '../pages/resume/Resume';
import stoxster from '../images/stox-ster.png';


const projects = [
  {
    title: "Stoxster",
    link: "https://wissamk08.github.io/BootCampProject-01",
    image: stoxster,
    alt: "Stoxster homepage"
  },
  {
    title: "Stoxster1",
    link: "https://wissamk08.github.io/BootCampProject-01",
    image: stoxster,
    alt: "Stoxster homepage"
  },
  {
    title: "Stoxster2",
    link: "https://wissamk08.github.io/BootCampProject-01",
    image: stoxster,
    alt: "Stoxster homepage"
  },
  {
    title: "Stoxster3",
    link: "https://wissamk08.github.io/BootCampProject-01",
    image: stoxster,
    alt: "Stoxster homepage"
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
