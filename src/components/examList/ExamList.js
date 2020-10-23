import React, { useState, useEffect } from 'react';



function ExamList() {

  const [list, setList] = useState([]);
  const [loadErr, setLoadErr] = useState(null);

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

  return (
    <ul>
      {list.map(exam => (
        <li key={exam.name}>
          <div>
            {exam.name}
          </div>
          <div>
            <button> Detalhes</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ExamList;

