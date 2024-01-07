import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./_destinationsView.css";
import image1 from "../../assets/images/image.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

const images = [  { src: image1, alt: "Image 1" },  { src: image2, alt: "Image 2" },  { src: image3, alt: "Image 3" },  { src: image4, alt: "Image 4" },  { src: image5, alt: "Image 5" },  { src: image6, alt: "Image 6" },  { src: image1, alt: "Image 1" },  { src: image2, alt: "Image 2" },  { src: image3, alt: "Image 3" },  { src: image4, alt: "Image 4" },  { src: image5, alt: "Image 5" },  { src: image6, alt: "Image 6" },];

const DestinationsView = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const handleClose = () => {
    setActiveImage(null);
  };
  return (
    <div style={{ height: "100%", overflow: "auto", backgroundColor: "#bfdbf7" }}>
    <Container className="container-destinations">
      <Row className="justify-content-center">
        {images.map((image, index) => (
          <Col xs={6} md={4} lg={3} key={index} className="image-col">
            <div
              className="image-container"
              onClick={() => handleImageClick(index)}
            >
              <img src={image.src} alt={image.alt} className="img-fluid" />
            </div>
          </Col>
        ))}
      </Row>
      {activeImage !== null && (
        <div
          className="image-container expanded"
          onClick={() => handleClose()}
        >
          <img
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            className="img-fluid"
          />
        </div>
      )}
    </Container>
    </div>
  );
};

export default DestinationsView;