import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
//import CardBs from './CardBs';

function Footer() {
  return (
    <>
      {/* <CardBs /> */}
      <footer className="bg-dark text-light py-4 " style={{ marginTop: '130px' , fixed:'bottom' }} >
        <Container>
          <Row>
            <Col md={4}>
              <h5>Company</h5>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/about" className="text-light">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="text-light">Contact Us</Nav.Link> {/* Updated */}
                <Nav.Link as={Link} to="/careers" className="text-light">Careers</Nav.Link>
              </Nav>
            </Col>
            <Col md={4}>
              <h5>Customer Service</h5>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/faq" className="text-light">FAQs</Nav.Link>
                <Nav.Link as={Link} to="/shipping" className="text-light">Shipping & Returns</Nav.Link>
                <Nav.Link as={Link} to="/terms" className="text-light">Terms of Service</Nav.Link>
              </Nav>
            </Col>
            <Col md={4} style={{ justifyContent: 'center' }}>
              <h5>Follow Us</h5>
              <Nav className="justify-content-center">
                <Nav.Link href="https://www.facebook.com" target="_blank" className="text-light">
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </Nav.Link> <br></br>
                <Nav.Link href="https://www.instagram.com" target="_blank" className="text-light">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Nav.Link> <br></br>
                <Nav.Link href="https://www.twitter.com" target="_blank" className="text-light">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col className="text-center">
              <p>© 2024 Your Company Name. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;

