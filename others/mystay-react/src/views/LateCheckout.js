import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const LateCheckout = () => {
	const [horaOut, setHoraOut] = useState("");

	const handleTimeChange = (e) => {
		const horaSeleccionada = e.target.value; // Formato "HH:mm"
		const fechaActual = new Date();
		const [hora, minutos] = horaSeleccionada.split(":").map(Number);

		fechaActual.setHours(hora, minutos, 0, 0); // Establece hora, minutos, segundos y milisegundos

		// Se actualiza el estado con la fecha y hora completa en formato ISO
		setHoraOut(fechaActual.toISOString());
	};

	const id = localStorage.getItem("clienteId");

	const handleSubmit = async () => {
		// Extraemos la fecha, hora, y timezone de horaOut
		const fechaISO = new Date(horaOut);
		const año = fechaISO.getFullYear();
		const mes = ("0" + (fechaISO.getMonth() + 1)).slice(-2); // Asegura dos dígitos
		const dia = ("0" + fechaISO.getDate()).slice(-2); // Asegura dos dígitos
		const hora = ("0" + fechaISO.getHours()).slice(-2);
		const minutos = ("0" + fechaISO.getMinutes()).slice(-2);

		// Construye la fecha y hora para la URL en formato ISO
		const checkoutTime = `${año}-${mes}-${dia}T${hora}:${minutos}:00.000Z`;

		const url = `http://localhost:8080/reservas/${id}/late-checkout/${checkoutTime}`;

		try {
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					checkoutTime: checkoutTime,
				}),
			});

			if (response.ok) {
				alert("Se ha modificado su hora de salida correctamente.");
				window.location.href = "http://localhost:8080/principal";
			} else {
				console.log("Error");
				window.location.href = "http://localhost:8080/principal";
			}
		} catch (error) {
			console.log("Error al conectar con el servidor");
		}
	};

	return (
		<div className="ordenados">
			<h4>¿A qué hora desea abandonar la habitación?</h4>
			<input id="horaCheckout" type="time" onChange={handleTimeChange} />
			<Button onClick={handleSubmit}>Confirmar</Button>
			<Link to="/reservas/checkout">
				<Button variant="dark">Volver</Button>
			</Link>
		</div>
	);
};
