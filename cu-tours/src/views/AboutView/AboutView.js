import React from "react";
import { Row, Col } from 'react-bootstrap';
import adress from "../../assets/images/adress.png"
import "./_aboutView.css"

function AboutView() {
  function handleViewOnLargeMapClick() {
    window.open("https://www.google.com/maps/place/6%C2%B005'15.1%22N+80%C2%B008'46.5%22E/@6.087536,80.1456938,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x3b2e9b79e96afd1!8m2!3d6.087536!4d80.146241");
  }
  return (
    <Row className="no-gutters">
      <Col md={6} className="map-col">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3198827378183!2d80.14405231447486!3d6.08753599559182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b2e9b79e96afd1!2zNsKwMDUnMTUuMSJOIDgwwrAwOCc0Ni41IkU!5e0!3m2!1sen!2slk!4v1676705993442!5m2!1sen!2slk"
          width="100%"
          height="450"
        />
      </Col>
      <Col md={6} className="address-col">
      <div className="container">
          <img src={adress} alt="Address" className="address-img" />
          <a href="#" onClick={handleViewOnLargeMapClick}>Add address here-View on Large Map</a>
        </div>
      </Col>
    </Row>
  )
}

export default AboutView;
