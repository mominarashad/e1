import React, { useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FoodPandaDetails() {
  // Example data for FoodPanda items
  const initialProducts = [
    // Fast Food
    { title: 'Pizza', description: 'Delicious pizza delivered to your doorstep.', imgSrc: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSVhJ46pOBVylg5_ZnYilSr14xSgJwSZ386f8C6hRKrA0MRiCpn2ozG-Bfcxa3bSdJ-', category: 'Fast Food', price: 15 },
    { title: 'Burger', description: 'Tasty burgers with fresh ingredients.', imgSrc: 'https://www.seriouseats.com/thmb/_c-xbP-tch4dpSTxKE1zY16sHo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg', category: 'Fast Food', price: 10 },
    { title: 'Fish and Chips', description: 'Crispy fish with golden fries.', imgSrc: 'https://www.example.com/fish-and-chips.jpg', category: 'Fast Food', price: 12 },
    { title: 'Sandwiches', description: 'Variety of tasty sandwiches.', imgSrc: 'https://www.example.com/sandwiches.jpg', category: 'Fast Food', price: 8 },
    { title: 'Pitas', description: 'Freshly made pitas with fillings.', imgSrc: 'https://www.example.com/pitas.jpg', category: 'Fast Food', price: 9 },
    { title: 'Hamburgers', description: 'Juicy hamburgers with all the fixings.', imgSrc: 'https://www.example.com/hamburgers.jpg', category: 'Fast Food', price: 11 },
    { title: 'Fried Chicken', description: 'Crispy and delicious fried chicken.', imgSrc: 'https://www.example.com/fried-chicken.jpg', category: 'Fast Food', price: 14 },
    { title: 'French Fries', description: 'Golden, crispy fries.', imgSrc: 'https://www.example.com/french-fries.jpg', category: 'Fast Food', price: 5 },
    { title: 'Onion Rings', description: 'Crispy onion rings.', imgSrc: 'https://www.example.com/onion-rings.jpg', category: 'Fast Food', price: 6 },
    { title: 'Chicken Nuggets', description: 'Tasty chicken nuggets.', imgSrc: 'https://www.example.com/chicken-nuggets.jpg', category: 'Fast Food', price: 7 },
    { title: 'Tacos', description: 'Spicy and flavorful tacos.', imgSrc: 'https://www.example.com/tacos.jpg', category: 'Fast Food', price: 10 },

    // Desi Food
    { title: 'Sajji', description: 'Whole chicken marinated and roasted to perfection.', imgSrc: 'https://www.example.com/sajji.jpg', category: 'Desi Food', price: 25 },
    { title: 'Nihari', description: 'Slow-cooked beef stew with spices.', imgSrc: 'https://www.example.com/nihari.jpg', category: 'Desi Food', price: 20 },
    { title: 'Biryani & Pulao', description: 'Fragrant rice dishes with a variety of meats and spices.', imgSrc: 'https://www.example.com/biryani.jpg', category: 'Desi Food', price: 18 },
    { title: 'Haleem', description: 'A rich and savory stew made with wheat, barley, and meat.', imgSrc: 'https://www.example.com/haleem.jpg', category: 'Desi Food', price: 22 },
    { title: 'Chapli Kebab', description: 'Spicy minced meat kebabs.', imgSrc: 'https://www.example.com/chapli-kebab.jpg', category: 'Desi Food', price: 17 },
    { title: 'Saag', description: 'A spicy spinach curry.', imgSrc: 'https://www.example.com/saag.jpg', category: 'Desi Food', price: 15 },
    { title: 'Chicken Tikka', description: 'Marinated chicken chunks grilled to perfection.', imgSrc: 'https://www.example.com/chicken-tikka.jpg', category: 'Desi Food', price: 20 },
    { title: 'Paaye', description: 'Slow-cooked goat feet stew.', imgSrc: 'https://www.example.com/paaye.jpg', category: 'Desi Food', price: 25 },

    // Drinks
    { title: 'Irish Coffee', description: 'Coffee with whiskey and cream.', imgSrc: 'https://www.example.com/irish-coffee.jpg', category: 'Drinks', price: 12 },
    { title: 'Kir', description: 'A French cocktail made with wine and blackcurrant liqueur.', imgSrc: 'https://www.example.com/kir.jpg', category: 'Drinks', price: 14 },
    { title: 'Long Island Iced Tea', description: 'A cocktail with a mix of various spirits and sour mix.', imgSrc: 'https://www.example.com/long-island-iced-tea.jpg', category: 'Drinks', price: 15 },
    { title: 'Mai Tai', description: 'A tropical cocktail made with rum and fruit juices.', imgSrc: 'https://www.example.com/mai-tai.jpg', category: 'Drinks', price: 13 },
    { title: 'Margarita', description: 'A cocktail with tequila, lime juice, and triple sec.', imgSrc: 'https://www.example.com/margarita.jpg', category: 'Drinks', price: 14 },
    { title: 'Mimosa', description: 'A cocktail with champagne and orange juice.', imgSrc: 'https://www.example.com/mimosa.jpg', category: 'Drinks', price: 12 },
    { title: 'Mint Julep', description: 'A cocktail with bourbon, mint, and sugar.', imgSrc: 'https://www.example.com/mint-julep.jpg', category: 'Drinks', price: 13 },
    { title: 'Mojito', description: 'A cocktail with rum, mint, lime, and soda water.', imgSrc: 'https://www.example.com/mojito.jpg', category: 'Drinks', price: 12 },
  ];

  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({ category: '', priceRange: '' });

  // Filter handler
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    let updatedProducts = initialProducts;
    if (filters.category) {
      updatedProducts = updatedProducts.filter(product => product.category === filters.category);
    }
    if (filters.priceRange) {
      updatedProducts = updatedProducts.filter(product =>
        filters.priceRange === 'low' ? product.price < 15 :
        filters.priceRange === 'medium' ? (product.price >= 15 && product.price < 25) :
        filters.priceRange === 'high' ? product.price >= 25 :
        true
      );
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <Container style={{ marginTop: '80px' }}>
      <Row>
        <Col md={3}>
          <Form>
            <h5>Filters</h5>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="category" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Desi Food">Desi Food</option>
                <option value="Drinks">Drinks</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Price Range</Form.Label>
              <Form.Control as="select" name="priceRange" onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="low">Below $15</option>
                <option value="medium">$15 - $25</option>
                <option value="high">Above $25</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={9}>
          <Row>
            {filteredProducts.map((product, index) => (
              <Col key={index} md={4}>
                <Card>
                  <CardHeader>{product.title}</CardHeader>
                  <Card.Img src={product.imgSrc} className='card-img-custom' />
                  <CardBody>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text style={{ fontWeight: 'medium' }}>
                      {product.description}
                    </Card.Text>
                  </CardBody>
                  <CardFooter className='card-footer-custom'>
                    <Link to={`/products/FoodPanda/${product.title}`}>Shop Now</Link>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FoodPandaDetails;
