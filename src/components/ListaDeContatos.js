import React from 'react';
import Contato from './Contato';

function ListaDeContatos({ contatos }) {
  return (
    <div>
      <h2>Agenda de Contatos</h2>
      {contatos.map((contato, index) => (
        <Contato key={index} contato={contato} />
      ))}
    </div>
  );
}

export default ListaDeContatos;
