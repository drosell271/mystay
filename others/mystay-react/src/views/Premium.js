import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Premium = () => {
    return (
        <div>
            <div id='iconosPremium'>
                <div>
                    <button className='botontr' ><img className="fotos" src="../uber.png" alt="imagenuber" /></button>
                    <h2>Concierge</h2>
                </div>
                <div>
                    <button className='botontr'><img className="fotos" src="../cabify.png" alt="imagencabify" /></button>
                    <h2>Espectáculos</h2>
                </div>
                <div>
                    <button className='botontr' ><img className="fotos" src="../taxi.png" alt="imagentaxi" /></button>
                    <h2>SPA</h2>
                </div>
                <div>
                    <button className='botontr' ><img className="fotos" src="../taxi.png" alt="imagentaxi" /></button>
                    <h2>Turismo</h2>
                </div>

            </div>
            <Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link>
        </div>

    )
}
