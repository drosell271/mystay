import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Premium = () => {
    return (
        <div>
            <div id='iconosPremium'>
                <div>
                    <Link to="concierge" className='botontr'><img className="fotos" src="../uber.png" alt="imagenuber" /></Link>
                    <h2>Concierge</h2>
                </div>
                <div>
                    <Link to="espectaculos" className='botontr'><img className="fotos" src="../cabify.png" alt="imagencabify" /></Link>
                    <h2>Espectáculos</h2>
                </div>
                <div>
                    <Link to="spa" className='botontr'><img className="fotos" src="../taxi.png" alt="imagentaxi" /></Link>
                    <h2>SPA</h2>
                </div>
                <div>
                    <Link to="turismo" className='botontr'><img className="fotos" src="../taxi.png" alt="imagentaxi" /></Link>
                    <h2>Guía Turístico</h2>
                </div>

            </div>
            <Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link>
        </div>

    )
}
