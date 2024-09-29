import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { brandProducts } from './Brandproducts'; // Assuming you import the brandProducts array from another file.

function ProductList() {
  const { brand } = useParams(); 
  const products = brandProducts[brand.toLowerCase()] || []; 

  return (
    <Container style={{ marginTop: '80px' }}>
      <h2>{brand} Products</h2>
      <Row>
        {products.length === 0 ? (
          <p>No products available for this brand.</p>
        ) : (
          products.map(product => (
            <Col key={product.id} md={6} lg={3} className="mb-4">
              <Card className="card-hover shadow-sm h-100">
                <div className="card-img-container">
                  <Card.Img variant="top" src={product.image} className="card-img" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mb-2">{product.name}</Card.Title>
                  <Card.Text className="mb-2">Price: {product.price}</Card.Text>
                  <Card.Text className="mb-3">Rating: {'⭐'.repeat(Math.round(product.rating))}</Card.Text>
                  {/* Update Link to include the brand */}
                  <Link to={`/product/${brand}/${product.id}`} className="btn btn-primary mt-auto">
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default ProductList;
