import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <div>
     <Container style={{marginTop:'80px'}}>
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        FoodPanda
                    </CardHeader>
                    <Card.Img src='Images/FoodPanda.jpeg' className='card-img-custom' />
                    <CardBody>
                    <Card.Title>Food Panda</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Order you favourite food at your doorstep.
                </Card.Text>
                    </CardBody>
                    <CardFooter className='card-footer-custom' style={{hover:'blue'}}>
              <Link to='/products/vegetables'>Shop Now</Link>
              </CardFooter>

                </Card>
            </Col>
            <Col>
                <Card>
                    <CardHeader>
                        Your Favourite Attire
                    </CardHeader>
                    <Card.Img src='Images/dress.jpeg' className='card-img-custom' />
                    <CardBody>
                    <Card.Title>All Brand Wear</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Order you favourite Brand dresses  at your doorstep with free delivery over 2500rs.
                </Card.Text>
                    </CardBody>
                    <CardFooter className='card-footer-custom' style={{hover:'blue'}}>
              <Link to='/products/vegetables'>Shop Now</Link>
              </CardFooter>

                </Card>
            </Col>
            <Col>
                <Card>
                    <CardHeader>
                        Mobiles Laptops Ipad
                    </CardHeader>
                    <Card.Img src='Images/Phone.jpeg' className='card-img-custom' />
                    <CardBody>
                    <Card.Title>Ready to explore with Smartness</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Order you favourite smart technology of your favourite brand at your doorstep.
                </Card.Text>
                    </CardBody>
                    <CardFooter className='card-footer-custom' style={{hover:'blue'}}>
              <Link to='/products/vegetables'>Shop Now</Link>
              </CardFooter>

                </Card>
            </Col>
            
        </Row>
        <Row style={{ marginTop: '50px' }}>
        <Col>
                <Card>
                    <CardHeader>
                        FoodPanda
                    </CardHeader>
                    <Card.Img src='Images/Electronics].jpeg' className='card-img-custom' />
                    <CardBody>
                    <Card.Title>Food Panda</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Order you favourite food at your doorstep.
                </Card.Text>
                    </CardBody>
                    <CardFooter className='card-footer-custom' style={{hover:'blue'}}>
              <Link to='/products/vegetables'>Shop Now</Link>
              </CardFooter>

                </Card>
            </Col><Col>
                <Card>
                    <CardHeader>
                        FoodPanda
                    </CardHeader>
                    <Card.Img src='Images/Grocery.jpeg' className='card-img-custom' />
                    <CardBody>
                    <Card.Title>Food Panda</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Order you favourite food at your doorstep.
                </Card.Text>
                    </CardBody>
                    <CardFooter className='card-footer-custom' style={{hover:'blue'}}>
              <Link to='/products/vegetables'>Shop Now</Link>
              </CardFooter>

                </Card>
            </Col><Col>
                <Card>
                    <CardHeader>
                        FoodPanda
                    </CardHeader>
                    <Card.Img src='Images/.jpeg' className='card-img-custom' />
                    <CardBody>
                    <Card.Title>Food Panda</Card.Title>
                <Card.Text style={{ fontWeight:'medium' }}>
                  Order you favourite food at your doorstep.
                </Card.Text>
                    </CardBody>
                    <CardFooter className='card-footer-custom' style={{hover:'blue'}}>
              <Link to='/products/vegetables'>Shop Now</Link>
              </CardFooter>

                </Card>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default Products
