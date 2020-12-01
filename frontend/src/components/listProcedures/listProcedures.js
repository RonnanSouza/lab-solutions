import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Alert, Form, Row, Col, Tab} from 'react-bootstrap';
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
  const [pacient, setPacient] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:8080/api/pacients/'+props.pacientId,
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
      },
      err => {
        setLoaded(false)
    })
    
    
  }, [props.pacientId]) 

  if (loaded && procedures.length > 0 ) {
    return(
      <Container>
        <Router>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label>
                <b>{pacient.name}</b>, {pacient.age} anos de idade.<br/>
                RG: {pacient.id} <br/>
                Endereço: {pacient.address} <br/>
              </Form.Label>
            </Form.Group>
          </Form>
          {/* <ListGroup>
            {procedures.map(procedure => (
              <ListGroup.Item action as={Link} to="/detalharResultado">Paciente: {procedure.pacientId}, Data: {procedure.createdAt}</ListGroup.Item>
            ))}
          </ListGroup> */}
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {procedures.map(procedure => (
                    <ListGroup.Item action href={"#link"+procedure.id}>Resultado do dia {procedure.createdAt}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {procedures.map(procedure => (
                    <Tab.Pane eventKey={"#link"+procedure.id}>
                      <DetailProcedure procedureId={procedure.id}/>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
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
