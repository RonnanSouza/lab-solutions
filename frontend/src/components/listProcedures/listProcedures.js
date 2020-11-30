import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Alert } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import DetailProcedure from '../detailProcedure/detailProcedure';


function ListProcedures(props) {
  const [procedures, setProcedures] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8080/api/treatments?pacient_id='+props.pacientId,
    {
      method: 'GET',
      mode: 'cors',
    }
    )
    .then(res => res.json())
    .then(response => {
      setProcedures(response)
      setLoaded(true)
    }, (err) => {
      setLoaded(false)
    })
  }, [props.pacientId]) 

  if (loaded && procedures.length > 0 ) {
    return(
      <Container>
        <Router>
          <ListGroup>
            {procedures.map(procedure => (
              <ListGroup.Item action as={Link} to="/detalharResultado">Paciente: {procedure.pacientId}, Data: {procedure.createdAt}</ListGroup.Item>
            ))}
          </ListGroup>
          <Route path="/detalharResultado" exact render={props => <DetailProcedure {...props}/>}/>
        </Router>
      </Container>
      
    )
  } else {
    return (
      <Alert variant='warning'>
        Sem resultados disponíveis
      </Alert>
    )
    
  }
 
}

export default ListProcedures;
