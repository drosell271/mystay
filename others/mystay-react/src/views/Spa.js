import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Spa = () => {

    const [servicio, setServicio] = useState("");
    const [precio, setPrecio] = useState(0);
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");

    const handleSubmit = async () => {

    }

    return (
        <div className='ordenados'>
            <div className='enFila'>
                <Dropdown>
                    <Dropdown.Toggle variant='dark'>
                        Elegir servicio:
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { setServicio("spa"); setPrecio(20) }}>Solicitar cita en el SPA</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setServicio("masaje"); setPrecio(30) }}>Solicitar sesión de masaje</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <input type='date' onChange={(e) => { setFecha(e.target.value) }} />
                <input type='time' onChange={(e) => { setHora(e.target.value) }} />
            </div>
            <h4>Ha elegido: <b>{servicio.toUpperCase()}</b></h4>
            <h4>El día: <b>{fecha}</b> , a las: <b>{hora}</b></h4>
            <h4>El precio es de: <b>{precio} €</b></h4>
            <Button onClick={() => handleSubmit()}>Confirmar</Button>
            <Link to='/premium'><Button className='atras' variant="dark">Volver</Button></Link>
        </div>
    )
}
