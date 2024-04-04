import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const NuevaReserva = () => {
    const PrecioEstandar = 60;
    const PrecioPremium = 120;

    const [tipoHabitacion, setTipoHabitacion] = useState('estandar');
    const [numPersonas, setNumPersonas] = useState(0);

    // Variables que guardan la fecha de entrada y salida (para el PMD)
    // Se guardan como un String del estilo: '2024-04-25'
    const [fechaEntrada, setFechaEntrada] = useState(0);
    const [fechaSalida, setFechaSalida] = useState(0);

    return (
        <div>
            <div id='checkIn'>
                <div className='filaDe2'>
                    <div className='textoYinput'>
                        <label for='fechaEntrada'>Fecha de Entrada:</label>
                        <input type='date' onChange={e => setFechaEntrada(e.target.value)}></input>
                    </div>
                    <div className='textoYinput'>
                        <label for='fechaSalida'>Fecha de Salida:</label>
                        <input type='date' onChange={e => setFechaSalida(e.target.value)}></input>
                    </div>
                </div>
                <div className='filaDe2'>
                    <Dropdown>
                        <Dropdown.Toggle>
                            Tipo de Habitación
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setTipoHabitacion('estandar')}>Estándar</Dropdown.Item>
                            <Dropdown.Item onClick={() => setTipoHabitacion('premium')}>Premium</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>
                            Número de personas
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setNumPersonas(1)}>1</Dropdown.Item>
                            <Dropdown.Item onClick={() => setNumPersonas(2)}>2</Dropdown.Item>
                            <Dropdown.Item onClick={() => setNumPersonas(3)}>3</Dropdown.Item>
                            <Dropdown.Item onClick={() => setNumPersonas(4)}>4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <h2>Precio: {tipoHabitacion === 'estandar' ? (PrecioEstandar * numPersonas) : (PrecioPremium * numPersonas)} €</h2>
                </div>
                <Link to='/reservas'><Button>Volver</Button></Link>
            </div>
        </div>
    )
}
