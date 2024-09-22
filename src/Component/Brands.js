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
  { name: 'LG', logo: '/Images/lg.png', link: '/products/lg' },
  { name: 'Sony', logo: '/Images/sonyy.png', link: '/products/sony' },
  { name: 'Oppo', logo: '/Images/oppo.png', link: '/products/oppo' },
  { name: 'Redmi', logo: '/Images/redmi.png', link: '/products/redmi' }
];

const topSellingProducts = [
  { name: 'iPhone 13', brand: 'Apple', price: '$999', image: '/Images/z fold.jpeg' },
  { name: 'Galaxy S21', brand: 'Samsung', price: '$899', image: '/Images/speaker.jpeg' },
  { name: 'P40 Pro', brand: 'Huawei', price: '$699', image: '/Images/oven.jpeg' },
  { name: 'XPS 13', brand: 'Dell', price: '$1,199', image: '/Images/monitor.jpeg' },
  { name: 'Vivo X70', brand: 'Vivo', price: '$799', image: '/Images/watchh.jpeg' },
  { name: 'Samsung 1TB SSD', brand: 'Samsung', price: '$129', image: '/Images/ssb.jpeg' },
  { name: 'Samsung Galaxy S21', brand: 'Samsung', price: '$799', image: '/Images/samsunggalaxys21.png' },
  { name: 'Samsung Refrigerator 700L', brand: 'Samsung', price: '$1200', image: '/Images/refr.jpeg' },
];

function Brands() {
  return (
    <Container fluid>
      <Row>
        {/* Static Sidebar */}
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

        {/* Main content */}
        <Col md={10} className="main-content">
          <h4>All Brands</h4>
          <Row className="justify-content-center">
            {brands.map((brand, index) => (
              <Col key={index} md={4} lg={3} className="mb-4">
                <Card className="h-100 card-hover">
                  <Card.Img
                    variant="top"
                    src={brand.logo}
                    style={{ height: '150px', objectFit: 'contain', padding: '2px' }}
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
                <Card className="top-selling-card" style={{ border: '1px solid transparent', padding: '2px' }}>
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
