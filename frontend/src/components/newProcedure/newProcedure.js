import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, Form, Row, Col} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import NewResult from "../newResult/newResult"

function NewProcedure() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const [exams, setExams] = useState([]);
  const [results, setResults] = useState([true]);
  const [procedureId, setProcedureId] = useState(-1);


  useEffect(() => {
    fetch('http://localhost:8080/api/treatments',
    {
      method: 'GET',
      mode: 'cors',
    }
    )
    .then(res => res.json())
    .then(response => {
      setExams(response)
    }, (err) => {
      setLoaded(true)
    })
  }, [loaded])

  const onSubmit = ( data => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
      };

      
    fetch('http://localhost:8080/api/exams', requestOptions)
    .then(response => {
      if (response.status === 200) {
        console.log(response.json())
        history.push("/")
      } else {
        // TODO
      }
    });
  })
  return (
    <Container>
      <h2> Adicionar Resultados</h2>
      <br/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <Form.Group as={Row} controlId="formExamName">
            <Form.Label column sm={2}>
              Paciente
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" name="pacientId" ref={register} placeholder="Documento de Identidade" />
            </Col>
          </Form.Group>
          <fieldset>
            {results.map(() => (
              <NewResult exams={exams} procedureId={procedureId}></NewResult>
            ))}
            <Button onClick={() => (setResults(results => [...results, true]))} >Adicionar exame</Button>
          </fieldset>
          <br/><br/>
          <Button variant="success" size="lg" type="submit" block>Salvar</Button>
        </Form>
      </form>

    </Container>
  );
}

export default NewProcedure;
