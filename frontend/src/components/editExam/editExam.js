import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Form, Row, Col, Modal} from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";

function EditExam() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pacient, setPacient] = useState();
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {

    setLoaded(false)
    fetch('http://localhost:8080/api/exams/'+id,
    {
      method: 'GET',
      mode: 'cors',
    }
    )
    .then(res => res.json())
    .then(response => {
      setPacient(response)
      setLoaded(true)
    },  
    err => {
      setLoaded(false)
    })
  }, [])

  const onSubmit = ( data => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
      };
      console.log(data)

      fetch('http://localhost:8080/api/exams/'+id, requestOptions)
        .then(response => {
          if (response.status === 200) {
            history.push("/")
          } else {
            handleShow()
          }

        });
  })
  if (!loaded) {
    return <h1> Not yet</h1>
  }
  return (
    <Container>
      <h2> Editar Exame</h2>
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
                  <Form.Control required type="text" name="name" ref={register} placeholder="Nome do exame" defaultValue={pacient.name}/>
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} controlId="formExamCode">
                <Form.Label column sm={2}>
                  Código
                </Form.Label>
                <Col sm={10}>
                  <Form.Control required type="text" name="code" ref={register} placeholder="Código do exame" defaultValue={pacient.code}/>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group as={Row} controlId="formExamDescription">
            <Form.Label column sm={2}>
              Descrição
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="description" ref={register} placeholder="Descrição do exame" defaultValue={pacient.description}/>
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
                  <Form.Control required type="number" name="ref_value.male_upper" ref={register} placeholder="Máximo" defaultValue={pacient.ref_value.male_upper}/>
                </Col>
                <Col sm={6}>
                  <Form.Control required type="number" name="ref_value.male_lower" ref={register} placeholder="Mínimo" defaultValue={pacient.ref_value.male_lower}/>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Row} controlId="formExamDescription">
              <Form.Label column sm={2}>
                Mulher
              </Form.Label>
              <Row>
                <Col sm={6}>
                  <Form.Control required type="number" name="ref_value.female_upper" ref={register} placeholder="Máximo" defaultValue={pacient.ref_value.female_upper}/>
                </Col>
                <Col sm={6}>
                  <Form.Control required type="number" name="ref_value.female_lower" ref={register} placeholder="Mínimo" defaultValue={pacient.ref_value.female_lower}/>
                </Col>
              </Row>
            </Form.Group>
              
          <Button variant="secondary" type="submit">Editar</Button>
        </Form>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Exame inválido</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor, verifique se os dados do exame estão corretos</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
}

export default EditExam;
