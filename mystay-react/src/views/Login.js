import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const Login = () => {

    const navigate = useNavigate();

    // VARIABLES DE ESTADO
    const [numHabitacion, setNumHabitacion] = useState(0);
    const [documento, setDocumento] = useState(0);
    const [error, setError] = useState("");


    // FUNCIONES
    const manejaLogin = () => {
        setNumHabitacion(document.getElementById('numHabitacion').value);
        setDocumento(document.getElementById('dni-pp').value);

        // llamada a la API
        handleSubmit();
    }


    function mostrarError(error) {
        const divError = document.getElementById('msgError');
        divError.textContent = error;
        divError.style.display = 'block';

        // Oculta el mensaje de error después de 2 segundos
        setTimeout(() => {
            divError.style.display = 'none';
        }, 2000);
    }



    // CONSULTA A LA API
    const handleSubmit = async (e) => {
        const url = "http://localhost:8080/login";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "documento": documento,
                    "numHabitaciones": numHabitacion
                }),

            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                navigate('/principal');

            } else {
                setError(data.detail || "Error de autenticación");
                mostrarError(error);

            }
        } catch (error) {
            setError("Error al conectar con el servidor");
            mostrarError(error);
        }
    };


    // VISTA
    return (
        <div>
            <div id='datosHabitacion'>
                <div className='textoYinput'>
                    <b><label for="numHabitacion">Nº de Habitación:</label></b>
                    <input type="text" id="numHabitacion" placeholder='Ej: 120'></input>
                </div>
                <div className='textoYinput'>
                    <b><label for="dni-pp">DNI o Pasaporte:</label></b>
                    <input type="text" id="dni-pp" placeholder='Ej: 12345678E'></input>
                </div>
            </div>
            {/* mostrar el error en pantalla */}
            <div id="msgError"></div>

            <Button variant='dark' onClick={() => manejaLogin()}>Login</Button>
        </div>
    )
}