import React from 'react';

function Contato({ contato }) {
  return (
    <div>
      <h3>{contato.nome}</h3>
      <p>Email: {contato.email}</p>
      <p>Telefone: {contato.telefone}</p>
    </div>
  );
}

export default Contato;
