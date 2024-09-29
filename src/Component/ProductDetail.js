import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { brandProducts } from './Brandproducts'; 
import './ProductDetail.css';

function ProductDetail() {
  const { brand, id } = useParams(); // Fetch both brand and id from the URL
  const product = brandProducts[brand.toLowerCase()].find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={5}>
          <Card className="product-card h-100" style={{ border: '1px solid #ddd' }}>
            <Card.Img variant="top" src={product.image} style={{ height: '100%', objectFit: 'contain' }} />
          </Card>
        </Col>

        <Col md={7}>
          <div className="product-details">
            <h2>{product.name}</h2>
            <p className="mt-3"><strong>Price: </strong>{product.price}</p>
            <p><strong>In Stock: </strong>{product.stock} items</p>
            <p><strong>Rating: </strong>{'⭐'.repeat(Math.round(product.rating))}</p>

            <div className="d-flex align-items-center mb-4 mt-4 gap-3">
              <strong>Quantity: </strong>
              <Button variant="secondary" size="sm" onClick={decreaseQuantity}>-</Button>
              <span>{quantity}</span>
              <Button variant="secondary" size="sm" onClick={increaseQuantity}>+</Button>
            </div>

            <Button variant="primary" className="mt-3">
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
