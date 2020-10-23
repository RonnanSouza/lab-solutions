import React, { useState, useEffect } from 'react';

function Exam(props) {

  const [exam, setExam] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/exams/${props.id}`,
    {
      method: 'GET',
      mode: 'cors',
    }
    )
    .then(res => res.json())
    .then(response => {
      setIsLoaded(true);
      setExam(response);
    }, (err) => {
      setIsLoaded(true);
      setError(err);
    })
  }, [props.id])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h3>
          {exam.name}
        </h3>
        <h4>
          {exam.description}
        </h4>
      </div>
    );
  }
}

export default Exam;
