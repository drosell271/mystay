import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const CheckOut = () => {
    return (
        <div>
            <div id='recibo'>
                <h2>Recibo:</h2>
                <p>Coste de la habitación:</p>
                <p>Servicios contratados:</p>
            </div>

            <div id='despedida'>
                <p>IMPORTANTE: Devolver tarjetas de la habitación en recepción</p>
                <p>¡Muchas gracias por su visita! Esperamos volver a verle pronto</p>
                <Button>Confirmar Check-Out</Button>
                <Link to='/principal'><Button>Volver</Button></Link>
            </div>
        </div>
    )
}
