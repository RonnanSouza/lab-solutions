import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

function DetailProcedure(props) {
  const [procedures, setProcedures] = useState([]);
  const [loaded, setLoaded] = useState(false);

  return(
    <Container>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default DetailProcedure