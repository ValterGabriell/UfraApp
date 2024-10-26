import React, { useState } from 'react';
import './App.css';
import logo from './ufra.png'; // Substitua pelo logo relacionado à agronomia, se disponível.

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    // Exemplo simples de cálculo: somar os quatro inputs
    const sum = parseFloat(input1) + parseFloat(input2) + parseFloat(input3) + parseFloat(input4);
    setResult(sum);
    setShowResult(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Cálculo de Valores</h1>
        {!showResult ? (
          <div className="input-section">
            <p>Insira os valores para o cálculo:</p>
            <div className="input-group">
              <label>Valor 1:</label>
              <input
                type="number"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Valor 1"
              />
            </div>
            <div className="input-group">
              <label>Valor 2:</label>
              <input
                type="number"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="Valor 2"
              />
            </div>
            <div className="input-group">
              <label>Valor 3:</label>
              <input
                type="number"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                placeholder="Valor 3"
              />
            </div>
            <div className="input-group">
              <label>Valor 4:</label>
              <input
                type="number"
                value={input4}
                onChange={(e) => setInput4(e.target.value)}
                placeholder="Valor 4"
              />
            </div>
            <button onClick={handleCalculate}>Calcular</button>
          </div>
        ) : (
          <div>
            <h2>Resultado do cálculo: {result}</h2>
            <button onClick={() => setShowResult(false)}>Voltar</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
