import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Login = () => {

    // VARIABLES DE ESTADO
    const [loginCorrecto, setLoginCorrecto] = useState(true); // PONERLO A FALSE CUANDO ESTÉ LISTO PARA COMPROBAR USUARIOS
    const [NumHabitacion, setNumHabitacion] = useState(0);
    const [dni, setDni] = useState(0);

    //Habra que tener una funcion que compruebe si NumHabitacion está asociada al dni y en ese caso: setLoginCorrecto(true)

    const manejaLogin = () => {
        setNumHabitacion(document.getElementById('numHabitacion').value);
        setDni(document.getElementById('dni-pp').value);
    }

    return (
        <div>
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
            <Link to={loginCorrecto ? '/principal' : '/login'}><Button onClick={() => manejaLogin()}>Login</Button ></Link>
        </div >
    )
}
