import React from 'react';
import fastLogo from './assets/images/FAST.png'; // Update path as needed
import southernCompLogo from './assets/images/southernCOMP.png'; // Update path
import c33Logo from './assets/images/c33.png'; // Update path
import seoLogo from './assets/images/seo.png'; // Update path

function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="content-wrapper">
        <div className="logos">
          <img src={fastLogo} alt="Client Logo 1" />
          <img src={southernCompLogo} alt="Client Logo 2" />
          <br />
          <img src={c33Logo} alt="Client Logo 3" />
          <img src={seoLogo} alt="Client Logo 4" />
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
