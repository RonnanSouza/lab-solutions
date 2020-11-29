import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Form, Row, Col} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function NewExam() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();


  const onSubmit = ( data => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
      };

      console.log(requestOptions.body)
      fetch('http://localhost:8080/api/exams', requestOptions)
        .then(response => {
          if (response.status === 200) {
            history.push("/")
          } else {
            // TODO
          }

        });
  })

  return (
    <Container>
      <h2> Adicionar Exame</h2>
      <br/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <Row>
            <Col>
              <Form.Group as={Row} controlId="formExamName">
                <Form.Label column sm={2}>
                  Nome
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" name="name" ref={register} placeholder="Nome do exame" />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} controlId="formExamCode">
                <Form.Label column sm={2}>
                  Código
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" name="code" ref={register} placeholder="Código do exame" />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group as={Row} controlId="formExamDescription">
            <Form.Label column sm={2}>
              Código
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="description" ref={register} placeholder="Descrição do exame" />
            </Col>
          </Form.Group>
            <h4>
              Valores de Referência
            </h4>
            <Form.Group as={Row} controlId="formExamDescription">
              <Form.Label column sm={2}>
                Homem
              </Form.Label>
              <Row>
                <Col sm={6}>
                  <Form.Control type="number" name="ref_value.male_upper" ref={register} placeholder="Máximo" />
                </Col>
                <Col sm={6}>
                  <Form.Control type="number" name="ref_value.male_lower" ref={register} placeholder="Mínimo" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Row} controlId="formExamDescription">
              <Form.Label column sm={2}>
                Mulher
              </Form.Label>
              <Row>
                <Col sm={6}>
                  <Form.Control type="number" name="ref_value.female_upper" ref={register} placeholder="Máximo" />
                </Col>
                <Col sm={6}>
                  <Form.Control type="number" name="ref_value.female_lower" ref={register} placeholder="Mínimo" />
                </Col>
              </Row>
            </Form.Group>
              
          <Button type="submit">Adicionar</Button>
        </Form>
      </form>

    </Container>
  );
}

export default NewExam;
