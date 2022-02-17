import React from 'react';
import './Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <div className='header'>
      <div>
        <header>
          <img id='avatar' src='./knight.jpg' alt="knight helmet avatar" />
          <h1 className='title'> Brad Lindsay</h1>
        </header>
      </div>
      <div>
        <ul className="custom-nav nav nav-tabs">
          <li className="custom-nav-item nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#work"
              onClick={() => handlePageChange('Work')}

              className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
            >
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}

              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"

              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
