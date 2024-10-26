import React, { useState } from 'react';
import './App.css';
import logo from './ufra.png'; // Substitua pelo logo relacionado à agronomia, se disponível.

function App() {
  const [valueAA, setValueAA] = useState('');
  const [valueAa, setValueAa] = useState('');
  const [valueaa, setValueaa] = useState('');

  const [showResult, setShowResult] = useState(false);

  const [valueP, setValueP] = useState(null);
  const [valueQ, setValueQ] = useState(null);
  const [resultAa, setResultAa] = useState(null);

  const [Suffer_AmbAA, setSufferAmbAA] = useState(false);
  const [Suffer_AmbAa, setSufferAmbAa] = useState(false);
  const [Suffer_Ambaa, setSufferAmbaa] = useState(false);

  const [EstimativaAA, setEstimativaAA] = useState(null);
  const [EstimativaAa, setEstimativaAa] = useState(null);
  const [Estimativaaa, setEstimativaaa] = useState(null);

  const [TotalPop, setTotalPop] = useState(null);

  //FREQUENCIA AA
  const [FAA, setFAA] = useState(null);
  //FREQUENCIA Aa
  const [FAa, setFAa] = useState(null);
  //FREQUENCIA aa
  const [Faa, setFaa] = useState(null);
  //FREQUENCIA A
  const [FA, setFA] = useState(null);
  //FREQUENCIA a
  const [Fa, setFa] = useState(null);

  const handleCalculate = () => {


    //POPULACAO
    const totPop = parseFloat(valueAA) + parseFloat(valueAa) + parseFloat(valueaa)
    setTotalPop(totPop)

    //valor A
    const p = Math.sqrt((parseFloat(valueAA) || 0))
    //valor a
    const q = Math.sqrt((parseFloat(valueaa) || 0))

    //Frequencia AA
    const _FAA = (p * p) / totPop
    setFAA(_FAA)

    //Frequencia Aa
    const _FAa = (2 * p * q)
    setFAa(_FAa)

    //Frequencia aa
    const _Faa = (q * q / totPop)
    setFaa(_Faa)


    //Frequencia do A
    const _FA = _FAA + (_FAa / 2)
    setFA(_FA)

    //Frequencia do a
    const _Fa = _Faa + (_FAa / 2)
    setFa(_Fa)

    //valor Aa
    const valueOfAa = 2 * p * q

    //MUTAÇÕES
    const mutAA = _FAA != 1
    const mutAa = _FAa != 1
    const mutaa = _Faa != 1
    setSufferAmbAA(mutAA)
    setSufferAmbAa(mutAa)
    setSufferAmbaa(mutaa)

    //DESCEDENCIAS
    const _EstimativaDescendenciaAA = 1 - _FAa - _Faa
    const _EstimativaDescendenciaAa = 1 - _FAA - _Faa
    const _EstimativaDescendenciaaa = 1 - _FAA - _FAa
    setEstimativaAA(_EstimativaDescendenciaAA)
    setEstimativaAa(_EstimativaDescendenciaAa)
    setEstimativaaa(_EstimativaDescendenciaaa)




    setValueP(p);
    setValueQ(q);
    setResultAa(valueOfAa);

    setShowResult(true);
  };



  const handleCalculateVolta = () => {

    //valor AA
    const inputValueOfAA = Math.sqrt((parseFloat(FAA) || 0))
    //valor Aa
    const inputValueOfAa = Math.sqrt((parseFloat(FAa) || 0))
    //valor aa
    const inputValueOfaa = Math.sqrt((parseFloat(Faa) || 0))

    setValueAA(inputValueOfAA)
    setValueAa(inputValueOfAa)
    setValueaa(inputValueOfaa)

    setShowResult(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!showResult ? (

          <div>
            <div className="input-section">
              <h1>Cálculo de Valores</h1>
              <p>Insira os valores para o cálculo:</p>

              <div className="input-group">
                <label>AA</label>
                <input
                  type="number"
                  value={valueAA}
                  onChange={(e) => setValueAA(e.target.value)}
                  placeholder="Valor 1"
                />
              </div>

              <div className="input-group">
                <label>Aa</label>
                <input
                  type="number"
                  value={valueAa}
                  onChange={(e) => setValueAa(e.target.value)}
                  placeholder="Valor 2"
                />
              </div>

              <div className='input-group-row'>
                <div className="input-group">
                  <label>aa</label>
                  <input
                    type="number"
                    value={valueaa}
                    onChange={(e) => setValueaa(e.target.value)}
                    placeholder="Valor 3"
                  />
                </div>
              </div>

              <button onClick={handleCalculate}>Calcular</button>
            </div>

            {/* //VOLTA */}
            {/*  <div className="input-section">
              <h1>FAZER A VOLTA</h1>
              <p>Insira os valores para o cálculo:</p>

              <div className="input-group">
                <label>Frequência AA</label>
                <input
                  type="number"
                  value={FAA}
                  onChange={(e) => setFAA(e.target.value)}
                  placeholder="Valor 1"
                />
              </div>

              <div className="input-group">
                <label>Frequência Aa</label>
                <input
                  type="number"
                  value={FAa}
                  onChange={(e) => setFa(e.target.value)}
                  placeholder="Valor 2"
                />
              </div>

              <div className='input-group-row'>
                <div className="input-group">
                  <label>Frequência aa</label>
                  <input
                    type="number"
                    value={Faa}
                    onChange={(e) => setFaa(e.target.value)}
                    placeholder="Valor 3"
                  />
                </div>
              </div>

              <button onClick={handleCalculateVolta}>Calcular Volta</button>
            </div> */}
          </div>


        ) : (
          <div>
            <button onClick={() => setShowResult(false)}>Voltar</button>

            <h1>Total População: {TotalPop}</h1>
            <h3>Frequência AA: {FAA}</h3>
            <h3>Frequência Aa: {FAa}</h3>
            <h3>Frequência aa: {Faa}</h3>
            <h3>Frequência A: {FA}</h3>
            <h3>Frequência a: {Fa}</h3>
            <h3>VALOR P: {Math.sqrt((parseFloat(valueAA) || 0))}</h3>
            <h3>VALOR Q: {Math.sqrt((parseFloat(valueaa) || 0))}</h3>

            <h3>Estimativa para descendência AA: {EstimativaAA}</h3>
            <h3>Estimativa para descendência Aa: {EstimativaAa}</h3>
            <h3>Estimativa para descendência aa: {Estimativaaa}</h3>

            {/* Acordeão para mostrar valores de AA, Aa e aa */}
            <div>
              <details>
                <summary>Ver Valores de AA, Aa e aa</summary>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <p>Valor de A:</p>
                    <p>{valueP}</p>
                  </div>
                  <div>
                    <p>Valor de a:</p>
                    <p>{valueQ}</p>
                  </div>
                  <div>
                    <p>Valor de Aa:</p>
                    <p>{resultAa}</p>
                  </div>
                </div>
              </details>
            </div>

            <div>
              <details>
                <summary>Fatores Ambientais</summary>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <p>AA</p>
                    {Suffer_AmbAA ? (
                      <p>População sofre com fatores ambientais</p>
                    ) : <p>População NÃO com fatores ambientais</p>}
                  </div>
                  <div>
                    <p>Aa</p>
                    {Suffer_AmbAa ? (
                      <p>População sofre com fatores ambientais</p>
                    ) : <p>População NÃO com fatores ambientais</p>}
                  </div>
                  <div>
                    <p>aa</p>
                    {Suffer_Ambaa ? (
                      <p>População sofre com fatores ambientais</p>
                    ) : <p>População NÃO com fatores ambientais</p>}
                  </div>
                </div>
              </details>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
