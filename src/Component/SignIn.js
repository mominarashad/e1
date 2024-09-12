import { Field, Form as FormikForm, Formik } from 'formik';
import React from 'react';
import { Form, Button, Container, Row,Col } from 'react-bootstrap'; // Import Bootstrap components

function SignIn() {
  return (
    <div style={{ marginTop: '100px'  }}>
    <Container className='mt-5'>
    <Row className='justify-content-center'>
    <Col md='6' lg='4'>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <FormikForm className='border p-2 '>
            <h2 style={{color:'black' , fontWeight:'bold'}}>Login to your account</h2>
            <br></br>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="form-control" // Use className instead of classname
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="form-control"
              />
            </Form.Group>
            <br></br>
            <div className='text-center'>
            <Button variant="primary" type="submit"  >
              Sign In
            </Button>
            </div>
            
          </FormikForm>
        )}
      </Formik>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default SignIn;
