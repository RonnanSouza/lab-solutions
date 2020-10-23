import React from 'react';

function ExamForm() {
  return (
    <form>
        <label>
            Nome: <input type="text" name="Nome"/>
        </label>
        <label>
            Descrição: <input type="text" name="Descrição"/>
        </label>
        <input type="text" name="Criar Exame"/>
    </form>
  );
}

export default ExamForm;
