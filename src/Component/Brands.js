import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; 

const brands = [
  { logo: '/Images/samsung.png', link: '/products/samsung' },
  { logo: '/Images/applelogo.png', link: '/products/apple' },
  { logo: '/Images/huaweilogo.png', link: '/products/huawei' },
  { logo: '/Images/infiniclogo.png', link: '/products/infinix' },
  { logo: '/Images/hp.png', link: '/products/hp' },
  { logo: '/Images/dell.png', link: '/products/dell' },
  { logo: '/Images/vivo.png', link: '/products/vivo' },
  { logo: '/Images/lenvov.png', link: '/products/lenovo' },
  { logo: '/Images/lg.png', link: '/products/lg' },
  { logo: '/Images/sonyy.png', link: '/products/sony' },
  { logo: '/Images/oppo.png', link: '/products/oppo' },
  { logo: '/Images/redmi.png', link: '/products/redmi' }
];

function Brands() {
  return (
    <Container style={{ marginTop: '80px' }}>
      <Row className="justify-content-center">
        {brands.map((brand, index) => (
          <Col key={index} md={4} lg={3} className="mb-4">
            <Card className="h-100 card-hover">  {}
              <Card.Img
                variant="top"
                src={brand.logo}
                style={{ height: '200px', objectFit: 'contain', padding: '2px' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{brand.name}</Card.Title>
                <div className="mt-auto text-center">
                  <Link to="/products/productList" className="btn btn-primary">
                    View Products
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Brands;
