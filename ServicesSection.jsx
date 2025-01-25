import React from 'react';
import marketingImage from './assets/images/marketing.web'; // Adjust the path as needed
import designImage from './assets/images/design.png'; // Adjust the path as needed
import ecommerceImage from './assets/images/ecommerce.png'; // Adjust the path as needed

function ServicesSection() {
  return (
    <section className="services">
      <div className="cards">
        <div className="card">
          <img src={marketingImage} width="50px" height="auto" alt="Content Concept" />
          <h3>Content Concept & Strategy</h3>
          <p>Vestibulum rhoncus tincidunt erat. consectetur adipiscing elit. Nunc aliquam risus mollis.</p>
        </div>
        <div className="card">
          <img src={designImage} width="50px" height="auto" alt="Design & Concepts" />
          <h3>Design & Concepts</h3>
          <p>Maecenas vestibulum neque ac urna viverra vulputate. consectetur adipiscing elit. Nunc aliquam risus mollis.</p>
        </div>
        <div className="card">
          <img src={ecommerceImage} width="50px" height="auto" alt="SEO & Marketing Solutions" />
          <h3>SEO & Marketing Solutions</h3>
          <p>Praesent quis lorem vel justo convallis pharetra non quis elit. consectetur adipiscing elit. Nunc.</p>
        </div>
      </div>
      <h6>Services</h6>
      <h2>Best Services for Visual Perfection</h2>
      <h6>
        Sed viverra tellus convallis laoreet viverra. Donec commodo auctor erat vel sodales. 
        Suspendisse et tincidunt nibh, eget sagittis neque.
      </h6>
    </section>
  );
}

export default ServicesSection;
