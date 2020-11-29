import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Form, Row, Col, InputGroup } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



function NewPacient() {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();


  const onSubmit = ( data => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
      };

      fetch('http://localhost:8080/api/pacients', requestOptions)
        .then(response => {
          if (response.status == 200) {
            response.json()
            history.push("/")
          } else {
            // TODO
          }

        });
  })
  
  return (
    <Container>
      <h2>Adicionar Paciente</h2>
      <br/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <Form.Group as={Row} controlId="formPacientName">
            <Form.Label column sm={2}>
              Nome
            </Form.Label>
            <Col sm={10}>
              <InputGroup>
                <Form.Control required type="text" name="name" ref={register} placeholder="Nome" />
                <Form.Control.Feedback type="invalid">
                  Por favor, adicione o nome do paciente
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            
          </Form.Group>
          <Row>
            <Col>
              <Form.Group as={Row} controlId="formPacientID">
                <Form.Label column sm={2}>
                  Identidade
                </Form.Label>
                <Col sm={10}>
                  <Form.Control required type="number" name="id" ref={register} placeholder="Documento de Identidade" />
                </Col>
                <Form.Control.Feedback type="invalid">
                  Por favor, adicione o documento de identidade
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} controlId="formPacientAge">
                <Form.Label column sm={2}>
                  Idade
                </Form.Label>
                <Col sm={10}>
                  <Form.Control required type="number" name="age" ref={register} placeholder="Idade" required />
                </Col>
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                  Por favor, adicione a idade do paciente
                </Form.Control.Feedback>
            </Col>
          </Row>

          <Form.Group as={Row} controlId="formPacientAddr">
            <Form.Label column sm={2}>
              Endereço
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="address" ref={register} placeholder="Endereço" required/>
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Sexo
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Feminino"
                  name="gender"
                  id="genderFemale"
                  value="female" ref={register}
                />
                <Form.Check
                  type="radio"
                  label="Masculino"
                  name="gender"
                  id="genderMale"
                  value="male" ref={register}
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Button type="submit">Adicionar</Button>
        </Form>
      </form>

    </Container>
  )
  
}

export default NewPacient;