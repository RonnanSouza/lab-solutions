import React, { useState } from 'react';
import './App.css';
import NewExam from './components/newExam/newExam';
import { themes } from './ThemeContext';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewPacient from './components/newPacient/newPacient';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewProcedure from './components/newProcedure/newProcedure';



function App() {

  const [theme, setTheme] = useState( {
    theme: themes.light,
  });

  function toggleTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark) 
  }

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Lab Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Pacientes" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/novoPaciente">Adicionar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Exames" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/novoExame">Adicionar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resultados" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/novoResultado">Adicionar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <br/><br/>
      <Switch>
        <Route path="/" exact>
          <h1> Página Inicial</h1>
        </Route>
        <Route path="/novoPaciente" exact>
          <NewPacient></NewPacient>
        </Route>
        <Route path="/novoExame" exact>
          <NewExam></NewExam>
        </Route>
        <Route path="/novoResultado" exact>
          <NewProcedure></NewProcedure>
        </Route>
      </Switch>
      
    </Router>

   
  );
}

export default App;
