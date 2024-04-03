import React from 'react';
import { Header } from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export const Login = () => {
    return (
        <div>
            <Header />
            <div id='datosHabitacion'>
                <div className='textoYinput'>
                    <label for="numHabitacion">Nº de Habitación:</label>
                    <input type="text" id="numHabitacion" placeholder='Ej: 120'></input>
                </div>
                <div className='textoYinput'>
                    <label for="dni-pp">DNI o Pasaporte:</label>
                    <input type="text" id="dni-pp" placeholder='Ej: 12345678E'></input>
                </div>
            </div>
            <Button>Login</Button>

        </div>
    )
}
