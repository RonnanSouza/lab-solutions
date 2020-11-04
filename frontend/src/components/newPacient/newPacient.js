import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';

function NewPacient() {
  const { register, handleSubmit, watch, errors } = useForm();


  const onSubmit = ( data => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
      };

      fetch('http://localhost:8080/api/pacients', requestOptions)
        .then(response => response.json());
  })
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label>
          Nome: <input type="text" name="name" ref={register}/>
        </label>
      </div>
      <div>
        <label>
          Documento de identidade: <input type="text" name="id" ref={register}/>
        </label>
      </div>
      <div>
        <label>
          Idade: <input type="number" name="age" ref={register}/>
        </label>
      </div>
      <div>
        <label>
          Endereço: <input type="text" name="address" ref={register}/>
        </label>
      </div>
      <div>
        <label> Sexo</label><br/>
        <input type="radio" name="gender" value="male" ref={register}/> Masculino<br/>
        <input type="radio" name="gender" value="female" ref={register}/> Feminino<br/>
      </div>
      <div>
        <button> Novo Paciente</button>
      </div>
    </form>
  )
  
}

export default NewPacient;