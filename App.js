import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <header>
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

        <h1>Helping Business And Companies</h1>
        <h1>Innovate transform And Lead</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum orci, sit amet elementum lorem. sed pharetra dui volutpat ac. Etiam sollicitudin ullamcorper eros ut tincidunt. Integer ut ligula volutpat, pharetra lectus ac, pretium lorem. congue eget pellentesque fringilla. Pellentesque laoreet urna mauris, et viverra dolor ornare ac. Sed consequat erat id dolor elementum condimentum.</p>
        <a href="#" className="btn">Start now</a>
        <a href="#" className="btn" id="services-btn">Our Services</a>
      </header>

      <section className="services">
        <div className="cards">
          <div className="card">
            <img src="content.webp" width="50px" height="auto" alt="Content Concept"/>
            <h3>Content concept & Strategy</h3>
            <p>Vestibulum rhoncus tincidunt erat. consectetur adipiscing elit. Nunc aliquam risus mollis.</p>
          </div>
          <div className="card" id="-cards">
            <img src="design.png" width="50px" height="auto" alt="Design & Concepts"/>
            <h3>Design & Concepts</h3>
            <p> Maecenas vestibulum neque ac urna viverra vulputate. consectetur adipiscing elit. Nunc aliquam risus mollis.</p>
          </div>
          <div className="card" id="-cards">
            <img src="seo.png" width="50px" height="auto" alt="SEO & Marketing Solutions"/>
            <h3>SEO & Marketing Solutions</h3>
            <p>Praesent quis lorem vel justo convallis pharetra non quis elit. consectetur adipiscing elit. Nunc.</p>
          </div>
        </div>
        <h6>Services</h6>
        <h2>Best Services for Visual Perfection</h2>
        <h6>Sed viverra tellus convallis laoreet viverra. Donec commodo auctor erat vel sodales. Suspendisse et tincidunt nibh, eget sagittis neque</h6>
      </section>

      <section className="Services2">
        <div className="CARDS">
          <div className="card2">
            <img src="strategy.png" width="50px" height="auto" alt="Strategy"/>
            <h3>Strategy</h3>
            <p>Vestibulum rhoncus tincidunt erat. Morbi a enim et sem porttitor volutpat. Donec nulla augue, rutrum eget felis vitae.</p>
          </div>
          <div className="card2">
            <img src="marketing.png" width="50px" height="auto" alt="Marketing"/>
            <h3>Marketing</h3>
            <p> Maecenas vestibulum neque ac urna viverra vulputate. Morbi a enim et sem porttitor volutpat. Donec nulla augue, rutrum eget felis vitae.</p>
          </div>
          <div className="card2">
            <img src="technology.png" width="50px" height="auto" alt="Technology"/>
            <h3>Technology</h3>
            <p>Praesent quis lorem vel justo convallis pharetra non quis elit. Morbi a enim et sem porttitor volutpat. Donec nulla augu.</p>
          </div>
          <div className="card2">
            <img src="ecommerce.png" width="50px" height="auto" alt="Ecommerce"/>
            <h3>Ecommerce</h3>
            <p>Vestibulum rhoncus tincidunt erat. Morbi a enim et sem porttitor volutpat. Donec nulla augue, rutrum eget felis.</p>
          </div>
          <div className="card2">
            <img src="branding.png" width="50px" height="auto" alt="Branding"/>
            <h3>Branding</h3>
            <p>Vestibulum rhoncus tincidunt erat. Morbi a enim et sem porttitor volutpat. Donec nulla augue, hendrerit iaculis nisi.</p>
          </div>
          <div className="card2">
            <img src="identity.png" width="50px" height="auto" alt="SEO Identity"/>
            <h3>SEO Identity</h3>
            <p>Vestibulum rhoncus tincidunt erat. Morbi aMorbi enim et sem porttitor volutpat. Donec nulla augue, hendrerit iaculis nisi.</p>
          </div>
        </div>
      </section>

      <section className="business-plan-section">
        <div className="content">
          <h1>Detailed business plans & the most effective results</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et. Accumsan lacus vel
            facilisis volutpat est velit egestas. Aliquet lectus proin nibh nisl condimentum
            id venenatis a condimentum. At varius vel pharetra vel turpis nunc eget.
          </p>
          <button>Start Now</button>
        </div>
        <div className="images">
          <img src="plans.jpeg" className="image-office" alt="Business Plan"/>
          <div className="red-block"></div>
        </div>
      </section>

      <div className="services-section">
        <div className="services-list">
          <div className="service">
            <h3>01. Elegant / unique design</h3>
            <p>
              Maecenas pharetra convallis posuere aliquam ut porttitor a sollicitudin.
            </p>
          </div>
          <div className="service">
            <h3>02. True responsiveness</h3>
            <p>
              At risus viverra adipiscing at in tellus. Nulla nunc scelerisque viverra.
            </p>
          </div>
          <div className="service">
            <h3>03. Different layout type</h3>
            <p>
              Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.
            </p>
          </div>
          <div className="service">
            <h3>04. Make it simple</h3>
            <p>
              Imperdiet proin fermentum justo vel facilisis. Duis convallis.
            </p>
          </div>
        </div>
        <div className="services-description">
          <h2>We provide high quality and cost-effective services.</h2>
          <p>
            Massa ultricies mi quis hendrerit dolor magna eget est lorem. Proin fermentum elementum massa ultricies mi quis hendrerit dolor magna eget.
          </p>
        </div>
      </div>

      <section className="gallery">
        <img src="1.jpeg" alt="Gallery Image 1"/>
        <img src="2.jpeg" alt="Gallery Image 2"/>
        <img src="3.jpeg" alt="Gallery Image 3"/>
        <img src="4.avif" alt="Gallery Image 4"/>
        <img src="5.avif" alt="Gallery Image 5"/>
        <img src="6.jpeg" alt="Gallery Image 6"/>
        <img src="7.jpeg" alt="Gallery Image 7"/>
        <img src="8.webp" alt="Gallery Image 8"/>
      </section>

      <section className="trusted-section">
        <div className="content-360">
          <h1>We are trusted by more than <br /> <span>3600+ clients.</span></h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et. 
            Accumsan lacus vel facilisis volutpat est velit egestas. Aliquet lectus proin 
            nibh nisl condimentum id venenatis a condimentum. At varius vel pharetra vel turpis nunc eget.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="image-container">
          <div className="image-overlay">
            <img src="laptop.webp" alt="Laptop"/>
            <div className="play-button">
              <span>&#9658;</span>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="content-wrapper">
          <div className="logos">
            <img src="FAST.png" alt="Client Logo 1"/>
            <img src="southernCOMP.png" alt="Client Logo 2"/>
            <br />
            <img src="panther.png" alt="Client Logo 3"/>
            <img src="mcwin.png" alt="Client Logo 4"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
