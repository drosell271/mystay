import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Turismo = () => {

    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");

    const handleSubmit = async () => {

    }

    return (
        <div className='ordenados'>
            <h3>Elija cuándo desea recorrer la ciudad con uno de nuestros guías turísticos:</h3>
            <input type='date' onChange={(e) => { setFecha(e.target.value) }} />
            <input type='time' onChange={(e) => { setHora(e.target.value) }} />
            <h4>Solicitará un guía turístico el día: <b>{fecha}</b> , a las: <b>{hora}</b></h4>
            <Button onClick={() => handleSubmit()}>Confirmar</Button>
            <Link to='/premium'><Button className='atras' variant="dark">Volver</Button></Link>
        </div>
    )
}
