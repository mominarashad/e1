import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Assuming your CSS file is correctly imported

const samsungProducts = [
  { id: 1, name: 'Samsung Galaxy S21', image: '/Images/samsunggalaxys21.png', price: '$799', rating: 4.5 },
  { id: 2, name: 'Samsung Galaxy Note 20', image: '/Images/samnote20.jpeg', price: '$999', rating: 4.4 },
  { id: 3, name: 'Samsung Galaxy Z Fold 3', image: '/Images/z fold.jpeg', price: '$1799', rating: 4.7 },
  { id: 4, name: 'Samsung Galaxy A52', image: '/Images/a52.jpeg', price: '$499', rating: 4.2 },
  { id: 5, name: 'Samsung Galaxy A72', image: '/Images/a72sma.jpeg', price: '$599', rating: 4.3 },
  { id: 6, name: 'Samsung Galaxy Watch 4', image: '/Images/watchh.jpeg', price: '$249', rating: 4.1 },
  { id: 7, name: 'Samsung 1TB SSD', image: '/Images/ssb.jpeg', price: '$129', rating: 4.6 },
  { id: 8, name: 'Samsung 27" Monitor', image: '/Images/monitor.jpeg', price: '$319', rating: 4.4 },
  { id: 9, name: 'Samsung AC 1.5 Ton', image: '/Images/ac.png', price: '$1000', rating: 4.0 },
  { id: 10, name: 'Samsung Refrigerator 700L', image: '/Images/refr.jpeg', price: '$1200', rating: 4.5 },
  { id: 11, name: 'Samsung Microwave Oven', image: '/Images/oven.jpeg', price: '$150', rating: 4.3 },
  { id: 12, name: 'Samsung Bluetooth Speaker', image: '/Images/speaker.jpeg', price: '$80', rating: 4.2 }
];

function ProductList() {
  return (
    <Container style={{ marginTop: '80px' }}>
      <Row>
        {samsungProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="card-hover shadow-sm">
              <div className="card-img-container">
                <Card.Img variant="top" src={product.image} className="card-img" />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-2">{product.name}</Card.Title>
                <Card.Text className="mb-2">Price: {product.price}</Card.Text>
                <Card.Text className="mb-3">Rating: {'⭐'.repeat(Math.round(product.rating))}</Card.Text>
                <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
