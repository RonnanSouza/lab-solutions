import React from 'react';
import './App.css';
import './components/exam/Exam';
import ExamList from './components/examList/ExamList';
import ThemeContext from './ThemeContext'

function App() {
  return (
    <ThemeContext.Provider value={"dark"}>
      <ExamList/>
    </ThemeContext.Provider>
  );
}

export default App;
