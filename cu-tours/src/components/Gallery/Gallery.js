import React from 'react';
import { Carousel } from 'react-bootstrap';

import './_gallery.css';
import slide1 from '../../assets/images/image2.jpg'
import slide2 from '../../assets/images/image4.jpg'
import slide3 from '../../assets/images/image6.jpg'



const Gallery = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
          style={{ height: "800px" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Description for first slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
          style={{ height: "800px" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Description for second slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
          style={{ height: "800px" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Description for third slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Gallery;
