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


  const [p, setPzinho] = useState(null);
  const [q, setQzinho] = useState(null);



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


    setPzinho(_p)
    setQzinho(_q)

    //DESCEDENCIAS
    const _EstimativaDescendenciaAA = _p * _p
    const _EstimativaDescendenciaAa = 2 * _p * _q
    const _EstimativaDescendenciaaa = _q * _q
    setEstimativaAA(parseFloat(_EstimativaDescendenciaAA).toFixed(8))
    setEstimativaAa(parseFloat(_EstimativaDescendenciaAa).toFixed(8))
    setEstimativaaa(parseFloat(_EstimativaDescendenciaaa).toFixed(8))



    //MUTAÇÕES
    const mutAA = P == _EstimativaDescendenciaAA
    const mutAa = H == _EstimativaDescendenciaAa
    const mutaa = Q == _EstimativaDescendenciaaa

    setSufferAmbAA(mutAA)
    setSufferAmbAa(mutAa)
    setSufferAmbaa(mutaa)


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
              <details>
                <summary>Frequência Gênica (Alélica)</summary>
                <p style={{ color: "#000" }}>Proporção
                  dos diferentes alelos de um determinado gene na
                  população.</p>
              </details>
              <details>
                <summary>Frequência Genotípica</summary>
                <p style={{ color: "#000" }}>Proporção dos diferentes genótipos na população.</p>
              </details>

              <details>
                <summary>Equilíbrio de Hardy-Weinberg</summary>
                <p style={{ color: "#000" }}>Numa população, sob acasalamento ao acaso, na ausência de migração, mutação e seleção, tanto as frequências gênicas como as genotípicas são constantes de geração em geração, e as frequências genotípicas são determinadas pelas frequências gênicas.</p>
              </details>

              <details>
                <summary>Dominância Incompleta</summary>
                <p style={{ color: "#000" }}>É aquela em que os alelos se expressam em heterozigose, no entanto, produzem fenótipo intermediário, haja vista que nenhum é "dominante".</p>
              </details>
            </div>

          </div>
        ) : (
          <div style={{ display: 'flex', gap: '100px' }}>
            <div style={{ flex: 1 }}>
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
                      ) : (
                        <p>População NÃO sofre com fatores ambientais</p>
                      )}
                    </div>
                    <div>
                      <p>Aa</p>
                      {Suffer_AmbAa ? (
                        <p>População sofre com fatores ambientais</p>
                      ) : (
                        <p>População NÃO sofre com fatores ambientais</p>
                      )}
                    </div>
                    <div>
                      <p>aa</p>
                      {Suffer_Ambaa ? (
                        <p>População sofre com fatores ambientais</p>
                      ) : (
                        <p>População NÃO sofre com fatores ambientais</p>
                      )}
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Seção de Histórico de Cálculo ao lado */}
            <div style={{ flex: 1, padding: '15px', fontFamily: 'Arial, sans-serif' }}>
              <details>
                <summary style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Histórico de Cálculo</summary>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px', padding: '15px', fontFamily: 'Arial, sans-serif' }}>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    <li><strong>Genótipos (número de indivíduos)</strong></li>
                    <li>AA - {valueAA}</li>
                    <li>Aa - {valueAa}</li>
                    <li>aa - {valueaa}</li>
                    <li>Total - {TotalPop}</li>

                    <li><strong>Frequência genotípica:</strong></li>
                    <li>P = {valueAA}/{TotalPop} = {P}</li>
                    <li>H = {valueAa}/{TotalPop} = {H}</li>
                    <li>Q = {valueaa}/{TotalPop} = {Q}</li>
                    <li>P + H + Q = {P} + {H} + {Q} = {(parseFloat(Q) + parseFloat(P) + parseFloat(H)).toFixed(4)}</li>

                    <li><strong>Frequência gênica:</strong></li>
                    <li>F(A) = {P} + ½ {H} = {FA}</li>
                    <li>F(a) = {Q} + ½ {H} = {Fa}</li>
                    <li>p + q = {(parseFloat(p) + parseFloat(q)).toFixed(4)}</li>
                    <li>{FA} + {Fa} = {(parseFloat(FA) + parseFloat(Fa)).toFixed(4)}</li>

                    <li><strong>Estimativas para descendência em equilíbrio de Hardy-Weinberg:</strong></li>
                    <li>p = f(A) = {FA}</li>
                    <li>q = f(a) = {Fa}</li>
                    <li>f(AA) = p² = ({parseFloat(FA).toFixed(5)})² = {(parseFloat(FA) * parseFloat(FA)).toFixed(5)}</li>
                    <li>f(Aa) = 2pq = 2 × {parseFloat(FA).toFixed(5)} × {parseFloat(Fa).toFixed(5)} = {(2 * parseFloat(FA) * parseFloat(Fa)).toFixed(5)}</li>
                    <li>f(aa) = q² = ({parseFloat(Fa).toFixed(5)})² = {(parseFloat(Fa) * parseFloat(Fa)).toFixed(5)}</li>
                    <li>p² + 2pq + q² = {(parseFloat(FA) * parseFloat(FA)).toFixed(5)} + {(2 * parseFloat(FA) * parseFloat(Fa)).toFixed(5)} + {(parseFloat(Fa) * parseFloat(Fa)).toFixed(5)} = 1.00000</li>
                  </ul>
                </div>
              </details>

              {/* Exemplo de dados do histórico */}
            </div>
          </div>

        )}
      </header>
    </div>
  );
}

export default App;
