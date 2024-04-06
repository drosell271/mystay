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
    const [hayError, setHayError] = useState(false);


    const manejaLogin = () => {
        setNumHabitacion(document.getElementById('numHabitacion').value);
        setDocumento(document.getElementById('dni-pp').value);

        // llamada a la API
        handleSubmit();
    }

    // Habra que tener una funcion que compruebe si NumHabitacion está asociada al dni y en ese caso: setLoginCorrecto(true)


    // CONSULTA A LA API
    const handleSubmit = async (e) => {
        const url = "http://localhost:8080/login";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ documento, numHabitacion }),

            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                navigate('/principal');

            } else {
                setError(data.detail || "Error de autenticación");
                setHayError(true);
            }
        } catch (error) {
            setError("Error de login");
            setHayError(true);
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
            <div>{hayError ? () => { setTimeout(error, 4000) } : ""}</div>
            <Button variant='dark' onClick={() => manejaLogin()}>Login</Button>
        </div>
    )
}