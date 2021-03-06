
import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Alert } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


function ListExams() {
  const [exams, setExams] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8080/api/exams',
    {
      method: 'GET',
      mode: 'cors',
    }
    )
    .then(res => res.json())
    .then(response => {
      setExams(response)
      setLoaded(true)
    }, (err) => {
      setLoaded(false)
    })
  }, []) 

  if (loaded && exams.length > 0 ) {
    return(
      <Container>
        <h2>Exames</h2>
        <br/>
        <ListGroup>
          {exams.map((exam, idx) => (
            <ListGroup.Item key={idx} action onClick={() => history.push("editarExame/"+exam.id)}>
              <b>{exam.name}</b> ({exam.code}) <br/>
              {exam.description} <br/>
              Valores de referência: <br/>
                Homem: {exam.ref_value.male_lower}-{exam.ref_value.male_upper}<br/>
                Mulher: {exam.ref_value.female_lower}-{exam.ref_value.female_upper}
              </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      
    )
  } else {
    return (
      <Alert variant='warning'>
        Sem Exames Cadastrados
      </Alert>
    )
    
  }
 
}

export default ListExams;
