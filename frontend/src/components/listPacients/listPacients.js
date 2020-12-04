
import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Alert } from 'react-bootstrap';
import { 
  useHistory, 
   } from 'react-router-dom';



function ListPacients() {
  const [pacients, setPacients] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [pId, setPId] = useState();
  let history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8080/api/pacients',
    {
      method: 'GET',
      mode: 'cors',
    }
    )
    .then(res => res.json())
    .then(response => {
      setPacients(response)
      setLoaded(true)
    }, (err) => {
      setLoaded(false)
    })
  }, []) 

  const goToProcedures = ((p) => {
    history.push("/resultado/"+p)
  })

  if (loaded && pacients.length > 0 ) {
    return(
      <Container>
        <h2>Pacientes</h2>
        <br/>
        <ListGroup>
          {pacients.map((pacient, idx) => (
            <ListGroup.Item action key={idx} onClick={() => goToProcedures(pacient.id)}>
              <b>{pacient.name}</b>, RG: {pacient.id}<br/>
              Idade: {pacient.age} <br/>
              Endereço: {pacient.address} <br/>
              </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      
      
    )
  } else {
    return (
      <Alert variant='warning'>
        Erro ao carregar Pacientes
      </Alert>
    )
    
  }
 
}

export default ListPacients;
