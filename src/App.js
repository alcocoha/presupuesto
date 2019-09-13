import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import Error from './components/Error';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [crearGasto, guardarCrearGasto] = useState(false);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);
  const [error, guardarError] = useState(false);

  useEffect(()=>{
    if(crearGasto){

      console.log('restante :', restante);
      console.log('gasto :', gasto);

      const listadoGastos = [...gastos, gasto];
      const presupuestoRestante = parseInt(restante - gasto.cantidadGasto);
      if(presupuestoRestante >= 0){
        guardarRestante(presupuestoRestante);
        guardarGastos(listadoGastos);
        guardarCrearGasto(false);
      } else {
        guardarError(true);
      }
    }

    console.log('gasto :', gasto);
    console.log('gastos :', gastos);

  }, [crearGasto]);

  return (
    <div className="App container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {error ? <Error mensaje="Cuidado! Intentas gastar más del presupuesto"/> : null }
          {
            preguntaPresupuesto
            ?
              <Pregunta
                guardarPresupuesto={ guardarPresupuesto }
                guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
                guardarRestante={guardarRestante}
              />
            :
              <div className="row">
                <div className="one-half column">
                  <Formulario guardarGasto={guardarGasto} guardarCrearGasto={guardarCrearGasto}/>
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto presupuesto={presupuesto} restante={restante}/>
                </div>
              </div>

          }
        </div>
      </header>
    </div>
  );
}

export default App;
