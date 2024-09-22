import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './ProductDetail.css'; 

const samsungProducts = [
  { id: 1, name: 'Samsung Galaxy S21', image: '/Images/samsunggalaxys21.png', price: '$799', rating: 4.5 , stock: 3 },
  { id: 2, name: 'Samsung Galaxy Note 20', image: '/Images/samnote20.jpeg', price: '$999', rating: 4.4 , stock: 33 },
  { id: 3, name: 'Samsung Galaxy Z Fold 3', image: '/Images/z fold.jpeg', price: '$1799', rating: 4.7 , stock: 22 },
  { id: 4, name: 'Samsung Galaxy A52', image: '/Images/a52.jpeg', price: '$499', rating: 4.2 , stock: 10 },
  { id: 5, name: 'Samsung Galaxy A72', image: '/Images/a72sma.jpeg', price: '$599', rating: 4.3 , stock: 5 },
  { id: 6, name: 'Samsung Galaxy Watch 4', image: '/Images/watchh.jpeg', price: '$249', rating: 4.1 , stock: 3 },
  { id: 7, name: 'Samsung 1TB SSD', image: '/Images/ssb.jpeg', price: '$129', rating: 4.6 , stock: 32 },
  { id: 8, name: 'Samsung 27" Monitor', image: '/Images/monitor.jpeg', price: '$319', rating: 4.4 , stock: 36 },
  { id: 9, name: 'Samsung AC 1.5 Ton', image: '/Images/ac.png', price: '$1000', rating: 4.0 , stock: 90 },
  { id: 10, name: 'Samsung Refrigerator 700L', image: '/Images/refr.jpeg', price: '$1200', rating: 4.5 , stock: 54 },
  { id: 11, name: 'Samsung Microwave Oven', image: '/Images/oven.jpeg', price: '$150', rating: 4.3 , stock: 12 },
  { id: 12, name: 'Samsung Bluetooth Speaker', image: '/Images/speaker.jpeg', price: '$80', rating: 4.2 , stock: 78 }
];

function ProductDetail() {
  const { id } = useParams(); // Get product id from URL
  const product = samsungProducts.find(p => p.id === parseInt(id));

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
