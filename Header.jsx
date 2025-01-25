import React from 'react';
import Navbar from './components/Navbar';

function Header() {
  return (
    <header>
      <Navbar />
      <h1>Helping Business And Companies</h1>
      <h1>Innovate Transform And Lead</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum orci, 
        sit amet elementum lorem.
      </p>
      <a href="#" className="btn">Start now</a>
      <a href="#" className="btn" id="services-btn">Our Services</a>
    </header>
  );
}

export default Header;
