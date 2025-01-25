import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-menu">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
