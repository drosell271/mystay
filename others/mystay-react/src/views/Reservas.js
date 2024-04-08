import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const Reservas = () => {
    return (
        <div>
            <div id='botonesReserva'>
                <Link to='./nuevareserva'><Button variant='dark'>Nueva Reserva</Button></Link>
                <Link to='./checkout'><Button variant='dark'>Check-Out</Button></Link>
            </div>
            <Link to='/principal'><Button variant='dark'>Volver</Button></Link>
        </div>
    )
}
