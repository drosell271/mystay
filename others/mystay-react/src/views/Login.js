import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
	const navigate = useNavigate();

	// VARIABLES DE ESTADO
	const [numHabitacion, setNumHabitacion] = useState(0);
	const [documento, setDocumento] = useState("");
	const [error, setError] = useState("");

	// FUNCIONES
	const manejaLogin = () => {
		// llamada a la API
		handleSubmit();
	};

	function mostrarError(error) {
		const divError = document.getElementById("msgError");
		divError.textContent = error;
		divError.style.display = "block";

		// Oculta el mensaje de error después de 2 segundos
		setTimeout(() => {
			divError.style.display = "none";
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
					documento: documento,
					numHabitacion: numHabitacion,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				console.log(data);
				localStorage.setItem("token", data.idReserva);
				localStorage.setItem("isPremium", data.esPremium);
				navigate("/principal");
			} else {
				setError("Error de autenticación");
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
			<div id="datosHabitacion">
				<div className="textoYinput">
					<b>
						<label for="numHabitacion">Nº de Habitación:</label>
					</b>
					<input
						type="text"
						id="numHabitacion"
						placeholder="Ej: 120"
						onChange={(e) => {
							setNumHabitacion(e.target.value);
						}}
					></input>
				</div>
				<div className="textoYinput">
					<b>
						<label for="dni-pp">DNI o Pasaporte:</label>
					</b>
					<input
						type="text"
						id="dni-pp"
						placeholder="Ej: 12345678E"
						onChange={(e) => {
							setDocumento(e.target.value);
						}}
					></input>
				</div>
			</div>
			{/* mostrar el error en pantalla */}
			<div id="msgError"></div>

			<Button variant="dark" onClick={() => manejaLogin()}>
				Login
			</Button>
		</div>
	);
};
