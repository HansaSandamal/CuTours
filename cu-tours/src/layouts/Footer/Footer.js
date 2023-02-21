import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './_footer.css';

function Footer() {
  return (
    <footer className="bg-dark">
      <Container>
        <Row className='pt-3'>
          <Col md={4} className="text-center text-md-left">
            <h5 className="text-light">About Us</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col md={3} className="text-center">
            <h5 className="text-light">Contact Us</h5>
            <p className="text-muted">123 Main Street<br />Anytown, USA 12345<br />Phone: 555-555-1212<br />Email: info@example.com</p>
          </Col>
          <Col md={3} className="text-center text-md-right">
            <h5 className="text-light">Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="text-muted"></a></li>
              <li className="list-inline-item"><a href="#" className="text-muted"></a></li>
              <li className="list-inline-item"><a href="#" className="text-muted"></a></li>
            </ul>
          </Col>
          <Col  md={12} sm={12}  className="text-center text-muted">
          <hr className="w-100 animated" />
            <p>&copy; 2023 Tourist Transport. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
