import React, { Fragment, useState } from 'react'
import Error from './Error';

function Pregunta(props) {

    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad)) return guardarError(true);
        
        error && guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);

        console.log('cantidad: ', cantidad, typeof cantidad)
        console.log('error: ', error)
    }

    return (
        <Fragment>
            <h2>
                Coloca tu Presupuesto
            </h2>

            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    className="u-full-width"
                    onChange={ e => guardarCantidad( parseInt(e.target.value) ) }
                    placeholder="Agrega tu Presupuesto"
                    type="number"
                    />
                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
            </form>

        </Fragment>
    )
}

export default Pregunta;
