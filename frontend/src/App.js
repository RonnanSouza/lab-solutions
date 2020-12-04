import React, { useState } from 'react';
import './App.css';
import NewExam from './components/newExam/newExam';
import ThemeContext, { themes } from './ThemeContext';
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
import ListProcedures from './components/listProcedures/listProcedures';
import ListExams from './components/listExams/listExams';
import ListPacients from './components/listPacients/listPacients';
import EditExam from './components/editExam/editExam';

function App() {

  const [ localPacientId, setLocalPacientId] = useState();
  const [theme, setTheme] = useState( {
    theme: themes.light,
  });

  const toggleTheme = () =>  {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark) 
  }

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <Navbar bg={theme} expand="lg">
          <Navbar.Brand href="#home">Lab Solutions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Pacientes" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/novoPaciente">Adicionar</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/listarPacientes">Listar</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Exames" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/novoExame">Adicionar</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/listarExames">Listar</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resultados" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/novoResultado">Adicionar</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="number" placeholder="Identidade do Paciente" name="value" onChange={e => setLocalPacientId(e.target.value)} className="mr-sm-4" />
              <Button as={Link} to={"/resultado/"+localPacientId} variant="success">Buscar Resultados</Button>
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
          <Route path="/editarExame/:id" exact>
            <EditExam></EditExam>
          </Route>
          <Route path="/novoResultado" exact>
            <NewProcedure></NewProcedure>
          </Route>
          <Route path="/resultado/:id" exact>
            <ListProcedures></ListProcedures>
          </Route>
          <Route path="/listarExames" exact>
            <ListExams></ListExams>
          </Route>
          <Route path="/listarPacientes" exact>
            <ListPacients></ListPacients>
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </Router>

   
  );
}

export default App;
