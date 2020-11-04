import React, { useState } from 'react';
import './App.css';
import './components/exam/Exam';
import ExamList from './components/examList/ExamList';
import { ThemeContext, themes } from './ThemeContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewPacient from './components/newPacient/newPacient';


function App() {

  const [theme, setTheme] = useState( {
    theme: themes.light,
  });

  function toggleTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark) 
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/novoProcedimento">Novo procedimento</Link>
            </li>
            <li>
              <Link to="/novoPaciente">Novo Paciente</Link>
            </li>
            <li>
              <Link to="/resultados">Inserir Resultados</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <h1> Página Inicial</h1>
          </Route>
          <Route path="/novoPaciente" exact>
            <NewPacient></NewPacient>
          </Route>

        </Switch>

      </div>
      {/* <ThemeContext.Provider value={theme}>
        <h2> Exam List</h2>
        <ExamList changeTheme={toggleTheme}/>
      </ThemeContext.Provider> */}

        
    </Router>
   
  );
}

export default App;
