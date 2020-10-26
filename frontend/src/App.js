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
      <ExamList changeTheme={toggleTheme}/>
    </ThemeContext.Provider>
  );
}

export default App;
