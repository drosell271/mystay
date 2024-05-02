import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const CheckOut = () => {

    const isPremium = localStorage.getItem("isPremium");

    return (
        <div>
            <div id='recibo'>
                <h2><u>Recibo</u></h2>
                <p>Coste de la habitación:</p>
                <p>Servicios contratados:</p>
                <h3>Total:</h3>
            </div>

            <div id='despedida'>
                <p>¡Muchas gracias por su visita! Esperamos volver a verle pronto</p>
                <Link to='/lateCheckout'><Button>Late Checkout</Button> </Link>
                <Button variant='success'>Confirmar Check-Out</Button>
                <Link to='/reservas'><Button variant='dark'>Volver</Button></Link>
            </div>
        </div>
    )
}
