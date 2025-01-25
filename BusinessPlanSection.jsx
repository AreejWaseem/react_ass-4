import React from 'react';
import laptop from './assets/images/laptop.jpeg'; // Adjust the path based on your project structure

function BusinessPlanSection() {
  return (
    <section className="business-plan-section">
      <div className="content">
        <h1>Detailed business plans & the most effective results</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et. 
          Accumsan lacus vel facilisis volutpat est velit egestas.
        </p>
        <button>Start Now</button>
      </div>
      <div className="images">
        <img src={laptop} className="image-office" alt="Business Plan" />
        <div className="red-block"></div>
      </div>
    </section>
  );
}

export default BusinessPlanSection;
