import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CheckOut = () => {
	const isPremium = localStorage.getItem("isPremium");

	const handleSubmit = async () => {
		const idReserva = localStorage.getItem("token");

		const url = `http://localhost:8080/reservas/${idReserva}/checkout`;

		try {
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();

			if (response.ok) {
				alert(`Ha realizado el CheckOut correctamente.`);
			} else {
				alert("No se ha podido realizar el CheckOut");
			}
		} catch (error) {
			console.log("Error al conectar con el servidor");
		}
	};

	return (
		<div>
			<div id="recibo">
				<h2>
					<u>Recibo</u>
				</h2>
				<p>Coste de la habitación:</p>
				<p>Servicios contratados:</p>
				<h3>Total:</h3>
			</div>

			<div id="despedida">
				<p>
					¡Muchas gracias por su visita! Esperamos volver a verle
					pronto
				</p>
				{isPremium ? (
					<Link to="lateCheckout">
						<Button>Late Checkout</Button>{" "}
					</Link>
				) : (
					<div></div>
				)}

				<Button variant="success">Confirmar Check-Out</Button>
				<Link to="/reservas">
					<Button variant="dark">Volver</Button>
				</Link>
			</div>
		</div>
	);
};
