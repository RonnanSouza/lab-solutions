import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

function DetailProcedure(props) {
  // const [procedure, setProcedure] = useState;

  useEffect(() => {

  }, [])
  return(
    <Container>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            // TODO
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="fetch data for the result"/>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default DetailProcedure