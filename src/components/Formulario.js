import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props) {

    const { guardarGasto, guardarCrearGasto } = props;

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    console.log('nombreGasto :', nombreGasto);
    console.log('cantidadGasto :', cantidadGasto);

    const agregarGasto = e => {
        e.preventDefault();
        console.log('e :', e);
        if(nombreGasto === '' || cantidadGasto < 1 || isNaN(cantidadGasto) ) return guardarError(true);

        error && guardarError(false);

        const gastoObj = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        console.log('gasto ----- :', gastoObj);

        guardarGasto(gastoObj);
        guardarCrearGasto(true);
        
        guardarNombreGasto('');
        guardarCantidadGasto(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Verifica tus datos"/> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={ e => guardarNombreGasto(e.target.value) }
                    value={nombreGasto}
                    />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={ e => guardarCantidadGasto( parseInt(e.target.value) ) }
                    value={cantidadGasto}
                    />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
            
        </form>
    )
}

export default Formulario;
