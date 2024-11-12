import React from 'react';
import ListaDeContatos from './components/ListaDeContatos';

function App() {
  const contatos = [
    { nome: 'Alice', email: 'alice@example.com', telefone: '123-456-7890' },
    { nome: 'Bob', email: 'bob@example.com', telefone: '987-654-3210' },
    { nome: 'Carlos', email: 'carlos@example.com', telefone: '456-789-0123' },
    { nome: 'Joao', email: 'joao@example.com', telefone: '333-123-0123' },
  ];

  return (
    <div className="App">
      <ListaDeContatos contatos={contatos} />
    </div>
  );
}

export default App;
