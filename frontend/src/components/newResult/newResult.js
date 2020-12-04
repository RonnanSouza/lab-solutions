import React, { useEffect, useState } from 'react';
import { Form, Row, Col} from 'react-bootstrap';

function NewResult(props) {
  const [result, setResult] = useState();
  const [examId, setExamId] = useState();

  useEffect(() => {
    if (props.procedureId > 0) {
      const data = {
        exam_id: examId,
        treatment_id: props.procedureId,
        value: result
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        };
  
        
      fetch('http://localhost:8080/api/results', requestOptions)
      .then(response => {
        if (response.status === 200) {
          
        } else {
          // TODO
        }
      });
    }
  }, [props.procedureId])

  return (
    <Form.Group as={Row} controlId="exampleForm.SelectCustom">
      <Form.Label column sm={2}>
        Exame
      </Form.Label>
      <Row>
        <Col>
          <Form.Control as="select" onChange={(e) => setExamId(e.target.value)} custom>
            <option>Selecione um Exame</option>
            {props.exams.map((exam, idx) => (
              <option key={idx} value={exam.id}>{exam.name}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
        <Form.Control type="number" name="value" onChange={(e) => setResult(e.target.value)} placeholder="Resultado" />
        </Col>
      </Row>
    
    </Form.Group>  
  );
}

export default NewResult;
