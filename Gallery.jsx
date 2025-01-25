import React from 'react';


import img1 from "./assets/images/img1.jpeg";
import img2 from "./assets/images/img2.jpeg";
import img3 from "./assets/images/img3.jpeg";
import img4 from "./assets/images/img4.avif";
import img5 from "./assets/images/img5.avif";
import img6 from "./assets/images/img6.jpeg";
import img7 from "./assets/images/img7.jpeg";
import img8 from "./assets/images/img8.webp";

function Gallery() {
  return (
    <section className="gallery">
      <img src={img1} alt="Gallery Image 1" />
      <img src={img2} alt="Gallery Image 2" />
      <img src={img3} alt="Gallery Image 3" />
      <img src={img4} alt="Gallery Image 4" />
      <img src={img5} alt="Gallery Image 5" />
      <img src={img6} alt="Gallery Image 6" />
      <img src={img7} alt="Gallery Image 7" />
      <img src={img8} alt="Gallery Image 8" />
    </section>
  );
}

export default Gallery;