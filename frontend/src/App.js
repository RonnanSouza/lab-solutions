import React, { useState } from 'react';
import './App.css';
import './components/exam/Exam';
import ExamList from './components/examList/ExamList';
import { ThemeContext, themes } from './ThemeContext';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewPacient from './components/newPacient/newPacient';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [theme, setTheme] = useState( {
    theme: themes.light,
  });

  function toggleTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark) 
  }

  return (
    // <Router>
    //   <Button> Ronan</Button>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/novoProcedimento">Novo procedimento</Link>
    //         </li>
    //         <li>
    //           <Link to="/novoPaciente">Novo Paciente</Link>
    //         </li>
    //         <li>
    //           <Link to="/resultados">Visualizar Resultado</Link>
    //         </li>
    //       </ul>
    //     </nav>

        // <Switch>
        //   <Route path="/" exact>
        //     <h1> Página Inicial</h1>
        //   </Route>
        //   <Route path="/novoPaciente" exact>
        //     <NewPacient></NewPacient>
        //   </Route>

    //     </Switch>

    //   </div>
    //   {/* <ThemeContext.Provider value={theme}>
    //     <h2> Exam List</h2>
    //     <ExamList changeTheme={toggleTheme}/>
    //   </ThemeContext.Provider> */}

        
    // </Router>
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Lab Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/novoPaciente">Paciente</Nav.Link>
            <NavDropdown title="Paciente" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Adicionar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
      </Switch>
      
    </Router>

   
  );
}

export default App;
