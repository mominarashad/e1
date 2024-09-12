import { Field, Formik } from 'formik'
import React from 'react'
import { Container, Form ,Row,Col} from 'react-bootstrap'

function Contact() {
  return (
    <div>
      <Container className='border p-4 '  style={{marginTop:'100px'}}>
        <Row>
          <Col>
            <Formik>
              <Form>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Field name='email' type='email' placeholder='Enter your email' className='form-control' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Comments:</Form.Label>
                  <Field name='comment' type='text-area' placeholder='Enter your feedback' className='form-control' />
                </Form.Group>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
