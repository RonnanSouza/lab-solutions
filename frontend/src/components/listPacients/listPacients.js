
import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Alert } from 'react-bootstrap';


function ListPacients() {
  const [pacients, setPacients] = useState([]);
  const [loaded, setLoaded] = useState(false);

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

  if (loaded && pacients.length > 0 ) {
    return(
      <Container>
        <ListGroup>
          {pacients.map(pacient => (
            <ListGroup.Item>
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
