import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./_grid.css";
import image from "../../assets/images/image.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

const images = [
  { src: image, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
  { src: image6, alt: "Image 6" },
  { src: image, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
  { src: image6, alt: "Image 6" },
];

const Grid = () => {
    console.log("grid view")
  return (
    <Container>
      <Row className="justify-content-center">
        {images.map((image, index) => (
          <Col xs={12} md={4} lg={3} key={index} className="image-col">
            <div className="image-container">
              <img src={image.src} alt={image.alt} className="img-fluid" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Grid;
