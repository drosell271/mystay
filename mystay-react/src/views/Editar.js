import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export const Editar = () => {
    return (

        //ENVIAR DATOS A LA BASE DE DATOS PARA ACTUALIZARLOS!!
        // boton Confirmar: onClick () => {variableParaEnviarALaBDD = Document.getElementById('inputID').value}

        <div>
            <div id='inputsEditar' className='ordenados'>
                <div className='textoYinput'>
                    <label for='editaNombre'>Nombre:</label>
                    <input id='editaNombre' type='text'></input>
                    <Button variant='dark'>Confirmar</Button>
                </div>
                <div className='textoYinput'>
                    <label for='editaApellidos'>Apellidos:</label>
                    <input id='editaApellidos' type='text'></input>
                    <Button variant='dark'>Confirmar</Button>
                </div>
                <div className='textoYinput'>
                    <label for='editaTlf'>Teléfono:</label>
                    <input id='editaTlf' type='text'></input>
                    <Button variant='dark'>Confirmar</Button>
                </div>
                <div className='textoYinput'>
                    <label for='editaEmail'>Email:</label>
                    <input id='editaEmail' type='text'></input>
                    <Button variant='dark'>Confirmar</Button>
                </div>
                <div className='textoYinput'>
                    <label for='editaDni'>DNI/pasaporte:</label>
                    <input id='editaDni' type='text'></input>
                    <Button variant='dark'>Confirmar</Button>
                </div>
            </div>
            <Link to='/perfil'><Button variant='dark'>Volver</Button></Link>
        </div>
    )
}
