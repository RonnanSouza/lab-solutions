import React, { useEffect, useState } from 'react';
import { Form, Row, Col} from 'react-bootstrap';

function NewResult(props) {
  // const { examId, setExamId } = useState(-1);
  let examId = -1;

  const handleChange = ((e) => {
    examId = e.target.value
  })

  useEffect(() => {
    if (props.procedureId > 0) {
      const data = {
        exam_id: examId,
        treatment_id: props.procedureId,
        value: 0
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        };
  
        
      fetch('http://localhost:8080/api/results', requestOptions)
      .then(response => {
        if (response.status === 200) {
          console.log(response.json())
          // history.push("/")
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
          <Form.Control as="select" onChange={handleChange} custom>
            <option>Selecione um Exame</option>
            {props.exams.map(exam => (
              <option value={exam.id}>{exam.name}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
        <Form.Control type="number" name="value" placeholder="Resultado" />
        </Col>
      </Row>
    
    </Form.Group>  
  );
}

export default NewResult;
