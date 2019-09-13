import React, { useEffect, useState } from 'react';
import { revisarPresupuesto } from '../helpers/helper';

function ControlPresupuesto({presupuesto, restante}) {

    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </>
    )
}

export default ControlPresupuesto;
