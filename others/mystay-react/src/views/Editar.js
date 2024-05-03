import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Editar = () => {

    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [metodoPago, setMetodoPago] = useState("");


    const handleSubmit = async (e) => {
        const id = localStorage.getItem("id");
        const url = `http://localhost:8080/perfil/${id}`;

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    documento: documento,
                    correo: correo,
                    telefono: telefono,
                    metodoPago: metodoPago,
                }),
            });

            if (response.ok) {
                const msgConfirmacion = document.getElementById("confirmacion");
                msgConfirmacion.textContent("Datos modificados correctamente");
                msgConfirmacion.style.display = "block";
                msgConfirmacion.style.color = "green";

            } else {
                console.log("Error en los datos");
            }
        } catch (error) {
            console.log("Error al conectar con el servidor");
        }
    };

    return (

        <div>
            <div id='inputsEditar' className='ordenados'>
                <div className='textoYinput'>
                    <label for='editaNombre'>Nombre:</label>
                    <input id='editaNombre' onChange={(e) => { setNombre(e.target.value) }} type='text' ></input>
                </div>
                <div className='textoYinput'>
                    <label for='editaDocumento'>Documento:</label>
                    <input id='editaDocumento' onChange={(e) => { setDocumento(e.target.value) }} type='text'></input>
                </div>
                <div className='textoYinput'>
                    <label for='editaCorreo'>Correo:</label>
                    <input id='editaCorreo' onChange={(e) => { setCorreo(e.target.value) }} type='text'></input>
                </div>
                <div className='textoYinput'>
                    <label for='editaTelefono'>Teléfono:</label>
                    <input id='editaTelefono' onChange={(e) => { setTelefono(e.target.value) }} type='text'></input>
                </div>
                <div className='textoYinput'>
                    <label for='editaMPago'>Método de Pago:</label>
                    <input id='editaMPago' onChange={(e) => { setMetodoPago(e.target.value) }} type='text'></input>
                </div>
                <div id='confirmacion'></div>
                <Button variant='success' onClick={handleSubmit()}>Confirmar</Button>
            </div>
            <Link to='/perfil'><Button variant='dark'>Volver</Button></Link>
        </div>
    )
}
