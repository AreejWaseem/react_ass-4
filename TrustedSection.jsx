import React from 'react';

function TrustedSection() {
  return (
    <section className="trusted-section">
      <div className="content-360">
        <h1>
          We are trusted by more than <br />
          <span>3600+ clients.</span>
        </h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et. 
          Accumsan lacus vel facilisis volutpat est velit egestas.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="image-container">
        <div className="image-overlay">
          <img src="laptop.webp" alt="Laptop" />
          <div className="play-button">
            <span>&#9658;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
