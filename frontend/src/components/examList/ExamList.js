import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from '../../ThemeContext'

function ExamList(props) {

  const [list, setList] = useState([]);
  const [loadErr, setLoadErr] = useState(null);

  const theme = useContext(ThemeContext)
  console.log(theme)
  useEffect(() => {
    fetch('http://localhost:8080/api/exams',
    {
      method: 'GET',
      mode: 'cors',
    }
    )
    .then(res => res.json())
    .then(response => {
      setList(response)
    }, (err) => {
      setLoadErr(err)
    })
  }, [loadErr])

  if (loadErr != null ) {
    return <p> { loadErr.message } </p>
  }

  function examDetails(exam) {
    console.log("NOT IMPLEMENTED YET")
  }

  return (
    <div>
      <button onClick={props.changeTheme}> Change Theme</button>
      <ul>
        {list.map(exam => (
          <li key={exam.name}>
            <div>
              {exam.name}
            </div>
            <div>
              <button onClick={(exam) => {examDetails(exam)}}> Detalhes</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExamList;

