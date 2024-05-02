import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const LateCheckout = () => {

    const [horaOut, setHoraOut] = useState("");


    const handleSubmit = async (e) => {
        const id = localStorage.getItem("id");
        const url = `http://localhost:8080/reservas/${id}/late-checkout/{checkoutTime}`;

        const fechaActual = new Date();

        const año = fechaActual.getFullYear();
        const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11
        const dia = fechaActual.getDate();
        const segundos = fechaActual.getSeconds();
        // horaOut: HH:MM


        const checkoutTime = `${año}-${mes}-${dia}T${horaOut}:${segundos}.000`;

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    checkoutTime: checkoutTime
                }),
            });

            if (response.ok) {
                alert("Se ha modificado su hora de salida correctamente.");

            } else {
                console.log("Error");
            }
        } catch (error) {
            console.log("Error al conectar con el servidor");
        }
    };


    return (
        <div className='ordenados'>
            <h4>¿A qué hora desea abandonar la habitación?</h4>
            <input type='time' onChange={(e) => setHoraOut(e.target.value)} />
            <Button onClick={() => handleSubmit()}>Confirmar</Button>
            <Link to='/reservas/checkout'><Button variant='dark'>Volver</Button></Link>
        </div>
    )
}
