import './App.css';
import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dados, setDados] = useState([]);

  const EnviarDados = (e) => {
    e.preventDefault();
    const novoDado = {
      nome,
      sobrenome,
    };
    setDados([...dados, novoDado]);
    setNome('');
    setSobrenome('');
  };

  return (
    <div className="App">
      
      <h1>Formulário de Nome e Sobrenome</h1>
      <form onSubmit={EnviarDados}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          Sobrenome:
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>

      <h2>Tabela de Dados:</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.sobrenome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
