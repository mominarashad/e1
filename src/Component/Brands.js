import React from 'react';
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Brands.css';

const brands = [
  { name: 'Samsung', logo: '/Images/samsung.png', link: '/products/samsung' },
  { name: 'Apple', logo: '/Images/applelogo.png', link: '/products/apple' },
  { name: 'Huawei', logo: '/Images/huaweilogo.png', link: '/products/huawei' },
  { name: 'Infinix', logo: '/Images/infiniclogo.png', link: '/products/infinix' },
  { name: 'HP', logo: '/Images/hp.png', link: '/products/hp' },
  { name: 'Dell', logo: '/Images/dell.png', link: '/products/dell' },
  { name: 'Vivo', logo: '/Images/vivo.png', link: '/products/vivo' },
  { name: 'Lenovo', logo: '/Images/lenvov.png', link: '/products/lenovo' },
];

const topSellingProducts = [
  { name: 'iPhone 15Pro', brand: 'Apple', price: '$999', image: '/Images/15pro.jpeg' },
  { name: 'Air Tag', brand: 'Apple', price: '$2299', image: '/Images/airtag.jpeg' },
  { name: 'Huawei Nova 11 Pro', brand: 'Huawei', price: '$299', image: '/Images/8.jpeg' },
  { name: 'Dell OptiPlex 3090', brand: 'Dell', price: '$299', image:  '/Images/8....jpeg' },
  { name: 'Samsung Microwave Oven', brand: 'Samsung', price: '$150', image: '/Images/oven.jpeg' },
  { name: 'MacBook Air', brand: 'Apple', price: '$999', image: '/Images/macbook air.jpeg' },
  { name: 'HP Reverb G2 VR Headset', brand: 'HP', price: '$1,199', image: '/Images/9...jpeg' },
  { name: 'Lenovo Ideapad Flex 5', brand: 'Lenovo', price: '$249', image: '/Images/12.......jpeg' }
];

function Brands() {
  return (
    <Container fluid>
      <Row>
        {/* Static Sidebar for Brand Navigation */}
        <Col md={2} className="static-sidebar">
          <ListGroup variant="flush">
            {brands.map((brand, index) => (
              <ListGroup.Item key={index} className="brand-item">
                <Link to={brand.link} className="brand-link">
                  {brand.name}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col md={10} className="main-content">
          <h4>All Brands</h4>
          <Row className="justify-content-center">
            {brands.map((brand, index) => (
              <Col key={index} md={4} lg={3} className="mb-4">
                <Card className="h-100 card-hover">
                  <Card.Img
                    variant="top"
                    src={brand.logo}
                    style={{ height: '180px', paddingTop:'55px', objectFit: 'contain', padding: '2px' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center">{brand.name}</Card.Title>
                    <div className="mt-auto text-center">
                      <Link to={brand.link} className="btn btn-primary">
                        View Products
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Top Selling Products Section */}
          <h2 className="mt-5 mb-4" style={{ textAlign: 'left' }}>Top Selling Products</h2>
          <Row className="justify-content-center">
            {topSellingProducts.map((product, index) => (
              <Col key={index} md={4} lg={3} className="mb-4">
                {/* Remove borders for these cards */}
                <Card className="top-selling-card shadow-sm" style={{ padding: '2px', border: 'none', boxShadow: 'none' }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: '180px', objectFit: 'contain', padding: '5px' }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      <strong>Brand:</strong> {product.brand}
                      <br />
                      <strong>Price:</strong> {product.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Brands;
