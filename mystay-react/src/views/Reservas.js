import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const Reservas = () => {
    return (
        <div>
            <div id='botonesReserva'>
                <Link to='./nuevareserva'><Button>Nueva Reserva</Button></Link>
                <Link to='./checkout'><Button>Check-Out</Button></Link>
            </div>
            <Link to='/principal'><Button>Volver</Button></Link>
        </div>
    )
}
