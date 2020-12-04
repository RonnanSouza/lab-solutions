import React, { useState, useEffect } from 'react';
import { Container, Alert, ListGroup } from 'react-bootstrap';

function DetailProcedure(props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/treatments/'+props.procedureId+'/details',
    {
      method: 'GET',
      mode: 'cors',
    }
    )
    .then(res => res.json())
    .then(response => {
      setResults(response)
    })
  }, [])

  const getVariant = (result => {
    if ((props.pacientGender === "male") && (result.value > result.ref_value.male_upper || result.value < result.ref_value.male_lower)) {
      return "danger"
    }
    if ((props.pacientGender === "female") && (result.value > result.ref_value.female_upper || result.value < result.ref_value.female_lower)) {
      return "danger"
    }
    return "success"
  })

  return(
    <Container>
      <ListGroup variant="flush">
        {results.map((result, idx) => (
          <Alert key={idx} variant={getVariant(result)}>
            {result.name}: {result.value}
          </Alert>
        ))}
      </ListGroup>
    </Container>
  )
}

export default DetailProcedure