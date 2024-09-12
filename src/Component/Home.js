import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div style={{marginTop:'150px'}} className='p-5'>
       <Container fluid>
        <Row className="align-items-center mt-30">
          <Col md={6} className="text-center text-md-start ml-2">
            <h1 > {/* Use `style` for custom styles */}
              <Typewriter
                options={{
                  strings: ['Welcome to the official website of Mega Mart Store,Discover Unmatched Quality and Style – Shop the Best Deals Today!'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h1>
          </Col>
          <Col  >
              <img src='https://up.yimg.com/ib/th?id=OIP.fdqzSt6B1RpaoI7d1Fe_uAHaHa&pid=Api&rs=1&c=1&qlt=95&w=106&h=106'  style={{width:'500px' , height:'250px'}}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
