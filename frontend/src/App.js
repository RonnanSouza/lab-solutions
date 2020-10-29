import React, { useState } from 'react';
import './App.css';
import './components/exam/Exam';
import ExamList from './components/examList/ExamList';
import { ThemeContext, themes } from './ThemeContext'

function App() {

  const [theme, setTheme] = useState( {
    theme: themes.light,
  });

  function toggleTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark) 
  }

  return (
    <ThemeContext.Provider value={theme}>
      <h2> Exam List</h2>
      <ExamList changeTheme={toggleTheme}/>
    </ThemeContext.Provider>
  );
}

export default App;
