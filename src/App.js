import React, { useState } from 'react';
import './App.css';
import logo from './ufra.png'; // Substitua pelo logo relacionado à agronomia, se disponível.

function App() {
  const [valueAA, setValueAA] = useState('');
  const [valueAa, setValueAa] = useState('');
  const [valueaa, setValueaa] = useState('');

  const [showResult, setShowResult] = useState(false);

  const [Suffer_AmbAA, setSufferAmbAA] = useState(false);
  const [Suffer_AmbAa, setSufferAmbAa] = useState(false);
  const [Suffer_Ambaa, setSufferAmbaa] = useState(false);


  const [EstimativaAA, setEstimativaAA] = useState(null);
  const [EstimativaAa, setEstimativaAa] = useState(null);
  const [Estimativaaa, setEstimativaaa] = useState(null);

  const [TotalPop, setTotalPop] = useState(null);

  //FREQUENCIA AA
  const [P, setP] = useState(null);
  //FREQUENCIA Aa
  const [H, setH] = useState(null);
  //FREQUENCIA aa
  const [Q, setQ] = useState(null);
  //FREQUENCIA A
  const [FA, setFA] = useState(null);
  //FREQUENCIA a
  const [Fa, setFa] = useState(null);






  const handleCalculate = () => {
    //POPULACAO
    const totPop = parseFloat(valueAA) + parseFloat(valueAa) + parseFloat(valueaa)
    setTotalPop(totPop)

    //valor A
    const A = Math.sqrt((parseFloat(valueAA) || 0))
    //valor a
    const a = Math.sqrt((parseFloat(valueaa) || 0))

    //Frequencia AA
    const _P = (A * A) / totPop
    setP(_P.toFixed(8))

    //Frequencia aa
    const _Q = (a * a / totPop)
    setQ(_Q.toFixed(8))

    //Frequencia Aa
    const _H = 1 - _P - _Q
    setH(_H.toFixed(8))


    //Frequencia do A
    const _p = _P + (_H / 2)
    setFA(parseFloat(_p).toFixed(8))

    //Frequencia do a
    const _q = _Q + (_H / 2)
    setFa(parseFloat(_q).toFixed(8))


    //MUTAÇÕES
    const mutAA = (_p + _q) != 1
    const mutAa = (_p + _q) != 1
    const mutaa = (_p + _q) != 1

    setSufferAmbAA(mutAA)
    setSufferAmbAa(mutAa)
    setSufferAmbaa(mutaa)

    //DESCEDENCIAS
    const _EstimativaDescendenciaAA = _p * _p
    const _EstimativaDescendenciaAa = 2 * _p * _q
    const _EstimativaDescendenciaaa = _q * _q
    setEstimativaAA(parseFloat(_EstimativaDescendenciaAA).toFixed(8))
    setEstimativaAa(parseFloat(_EstimativaDescendenciaAa).toFixed(8))
    setEstimativaaa(parseFloat(_EstimativaDescendenciaaa).toFixed(8))
    setShowResult(true);
  };



  //CALCULO 2
  const [P_2, setP_2] = useState(null);
  const [p_2, setp_2] = useState(null);
  const [q_2, setq_2] = useState(null);
  const [Q_2, setQ_2] = useState(null);
  const handleCalculate2 = () => {

    //POPULACAO
    const totPop = parseFloat(valueAA) + parseFloat(valueAa) + parseFloat(valueaa)
    setTotalPop(totPop)

    if (P_2 != 0 || P_2 != undefined) {
      setP(parseFloat(P_2).toFixed(8))
    }

    if (Q_2 != 0 || Q_2 != undefined) {
      setQ(parseFloat(Q_2).toFixed(8))
    }

    //Frequencia Aa
    const _H = 1 - P - Q
    setH(_H.toFixed(8))

    //Frequencia do A
    const _FA = P + (H / 2)
    setFA(parseFloat(_FA).toFixed(8))

    //Frequencia do a
    const _Fa = Q + (H / 2)
    setFa(parseFloat(_Fa).toFixed(8))


    //MUTAÇÕES
    const mutAA = (_FA + _Fa) != 1
    const mutAa = (_FA + _Fa) != 1
    const mutaa = (_FA + _Fa) != 1

    setSufferAmbAA(mutAA)
    setSufferAmbAa(mutAa)
    setSufferAmbaa(mutaa)

    //DESCEDENCIAS
    const _EstimativaDescendenciaAA = 1 - H - Q
    const _EstimativaDescendenciaAa = 1 - P - Q
    const _EstimativaDescendenciaaa = 1 - P - H
    setEstimativaAA(parseFloat(_EstimativaDescendenciaAA).toFixed(8))
    setEstimativaAa(parseFloat(_EstimativaDescendenciaAa).toFixed(8))
    setEstimativaaa(parseFloat(_EstimativaDescendenciaaa).toFixed(8))
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
                <label style={{ color: "#000" }}>AA</label>
                <input
                  type="number"
                  value={valueAA}
                  onChange={(e) => setValueAA(e.target.value)}
                  placeholder="Valor 1"
                />
              </div>

              <div className="input-group">
                <label style={{ color: "#000" }}>Aa</label>
                <input
                  type="number"
                  value={valueAa}
                  onChange={(e) => {
                    setValueAa(e.target.value)
                  }}
                  placeholder="Valor 2"
                />
              </div>

              <div className='input-group-row'>
                <div className="input-group">
                  <label style={{ color: "#000" }}>aa</label>
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


            {/* outo */}

            {/* 
            <div className="input-section">
              <h1>Cálculo de Valores</h1>
              <p>Insira os valores para o cálculo:</p>



              <div className="input-group">
                <label style={{ color: "#000" }}>p</label>
                <input
                  type="number"
                  value={p_2}
                  onChange={(e) => {
                    setp_2(e.target.value)
                    setValueAA(e.target.value * e.target.value)
                  }}
                  placeholder="Valor 2"
                />
              </div>

              <div className='input-group-row'>
                <div className="input-group">
                  <label style={{ color: "#000" }}>q</label>
                  <input
                    type="number"
                    value={q_2}
                    onChange={(e) => {
                      setQ_2(e.target.value * e.target.value)
                      setq_2(e.target.value)
                    }}
                    placeholder="Valor 3"
                  />
                </div>
              </div>
            </div> */}
          </div>
        ) : (
          <div>
            <button onClick={() => setShowResult(false)}>Voltar</button>

            <h1>Total População: {TotalPop}</h1>
            <h3>Frequência P: {P}</h3>
            <h3>Frequência H: {H}</h3>
            <h3>Frequência Q: {Q}</h3>
            <h3>-------------------------</h3>
            <h3>p: {FA}</h3>
            <h3>q: {Fa}</h3>
            <h3>-------------------------</h3>
            <h3>Estimativa para descendência AA: {EstimativaAA}</h3>
            <h3>Estimativa para descendência Aa: {EstimativaAa}</h3>
            <h3>Estimativa para descendência aa: {Estimativaaa}</h3>


            {/* Acordeão para mostrar valores de AA, Aa e aa */}
            <div>
              <details>
                <summary>Ver Valores de AA, Aa e aa</summary>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <p>Valor de AA:</p>
                    <p>{valueAA}</p>
                  </div>
                  <div>
                    <p>Valor de Aa:</p>
                    <p>{valueAa}</p>
                  </div>
                  <div>
                    <p>Valor de aa:</p>
                    <p>{valueaa}</p>
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
