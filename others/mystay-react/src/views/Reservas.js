import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const Reservas = () => {
    return (
        <div className='ordenados'>
            <div id='iconosReserva' className='ordenados'>
                <Link to='./nuevareserva' className='botontr' ><img className="fotos" src="../nuevareserva.png" alt="imagennuevareserva" /></Link>
                <h2>Nueva Reserva</h2>
                <Link to='./checkout' className='botontr'><img className="fotos" src="../checkout.png" alt="imagencheckout" /></Link>
                <h2>Check-Out</h2>
            </div>
            <Link to='/principal'><Button variant='dark'>Volver</Button></Link>
        </div>
    )
}
