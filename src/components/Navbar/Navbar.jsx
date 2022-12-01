import React from 'react';
import './navbar.css';
import image from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="app__navbar">
     <div className="app_nav">
        <div className="app__navbar-logo">
             <img src={image} alt="app__logo" />
        </div>
        <div className="app_nav-name">
            <h1>P&R Engineering School</h1>
        </div>

    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="https://ics.ac.ke/vision-and-mission/">About Us </a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Admissions</a></li>
      <li className="p__opensans"><a href="#contact">Courses</a></li>
      <li className="p__opensans"><a href="#contact">Apply Online</a></li>
      <li className="p__opensans"><a href="#contact">Our Branches</a></li>
      <li className="p__opensans"><a href="#contact">Portal</a></li>
      <li className="p__opensans"><a href="#contact">Student Support</a></li>
      <li className="p__opensans"><a href="#contact">Newsletters</a></li>
    </ul>
  </nav>
  )
}

export default Navbar