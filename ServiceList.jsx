import React from 'react';

function ServicesList() {
  return (
    <div className="services-section">
      <div className="services-list">
        <div className="service">
          <h3>01. Elegant / unique design</h3>
          <p>Maecenas pharetra convallis posuere aliquam ut porttitor a sollicitudin.</p>
        </div>
        <div className="service">
          <h3>02. True responsiveness</h3>
          <p>At risus viverra adipiscing at in tellus. Nulla nunc scelerisque viverra.</p>
        </div>
        <div className="service">
          <h3>03. Different layout type</h3>
          <p>Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.</p>
        </div>
        <div className="service">
          <h3>04. Make it simple</h3>
          <p>Imperdiet proin fermentum justo vel facilisis. Duis convallis.</p>
        </div>
      </div>
      <div className="services-description">
        <h2>We provide high quality and cost-effective services.</h2>
        <p>
          Massa ultricies mi quis hendrerit dolor magna eget est lorem. Proin fermentum elementum massa ultricies.
        </p>
      </div>
    </div>
  );
}

export default ServicesList;
