import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Editar = () => {
	const [nombre, setNombre] = useState("");
	const [documento, setDocumento] = useState("");
	const [correo, setCorreo] = useState("");
	const [telefono, setTelefono] = useState("");
	const [metodoPago, setMetodoPago] = useState("");

	const id = localStorage.getItem("clienteId");

	const handleSubmit = async (e) => {
		const url = `http://localhost:8080/clientes/${id}`;

		try {
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: id,
					nombre: nombre,
					documento: documento,
					correo: correo,
					telefono: telefono,
					metodoPago: metodoPago,
				}),
			});

			if (response.ok) {
				window.location.href = "http://localhost:3000/perfil";
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

	const handleGet = async (e) => {
		const url = `http://localhost:8080/clientes/${id}`;

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const data = await response.json();
				setCorreo(data.correo);
				setDocumento(data.documento);
				setMetodoPago(data.metodoPago);
				setNombre(data.nombre);
				setTelefono(data.telefono);
			} else {
				console.log("Error en los datos");
			}
		} catch (error) {
			console.log("Error al conectar con el servidor");
		}
	};

	useEffect(() => {
		handleGet();
	}, []);

	return (
		<div>
			<div id="inputsEditar" className="ordenados">
				<div className="textoYinput">
					<label form="editaNombre">Nombre:</label>
					<input
						id="editaNombre"
						onChange={(e) => {
							setNombre(e.target.value);
						}}
						type="text"
						value={nombre}
					></input>
				</div>
				<div className="textoYinput">
					<label form="editaDocumento">Documento:</label>
					<input
						id="editaDocumento"
						onChange={(e) => {
							setDocumento(e.target.value);
						}}
						type="text"
						value={documento}
					></input>
				</div>
				<div className="textoYinput">
					<label form="editaCorreo">Correo:</label>
					<input
						id="editaCorreo"
						onChange={(e) => {
							setCorreo(e.target.value);
						}}
						type="text"
						value={correo}
					></input>
				</div>
				<div className="textoYinput">
					<label form="editaTelefono">Teléfono:</label>
					<input
						id="editaTelefono"
						onChange={(e) => {
							setTelefono(e.target.value);
						}}
						type="text"
						value={telefono}
					></input>
				</div>
				<div className="textoYinput">
					<label form="editaMPago">Método de Pago:</label>
					<input
						id="editaMPago"
						onChange={(e) => {
							setMetodoPago(e.target.value);
						}}
						type="text"
						value={metodoPago}
					></input>
				</div>
				<div id="confirmacion"></div>
				<Button variant="success" onClick={handleSubmit}>
					Confirmar
				</Button>
			</div>
			<Link to="/perfil">
				<Button variant="dark">Volver</Button>
			</Link>
		</div>
	);
};
