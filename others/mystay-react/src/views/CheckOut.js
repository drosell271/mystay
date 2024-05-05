import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const CheckOut = () => {
	const isPremium = localStorage.getItem("isPremium");
	const id = localStorage.getItem("token");

	const [cuenta, setCuenta] = useState(0);

	const handleReservation = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/reservas/${id}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.ok) {
				const responseData = await response.json();
				setCuenta(responseData.cuenta);
			} else {
				throw new Error("Algo salió mal con la petición");
			}
		} catch (error) {
			console.error("Error", error);
			alert("Error");
		}
	};

	const handleSubmit = async () => {
		window.location.href = "http://localhost:8080/login";
	};

	useEffect(() => {
		handleReservation();
	}, []);

	return (
		<div>
			<div id="recibo">
				<h2>
					<u>Recibo</u>
				</h2>
				<h3>Gasto Total: {cuenta}</h3>
			</div>

			<div id="despedida">
				<p>
					¡Muchas gracias por su visita! Esperamos volver a verle
					pronto
				</p>
				{isPremium === "true" ? (
					<Link to="lateCheckout">
						<Button>Late Checkout</Button>{" "}
					</Link>
				) : (
					<div></div>
				)}

				<Button variant="success" onClick={() => handleSubmit()}>
					Confirmar Check-Out
				</Button>
				<Link to="/reservas">
					<Button variant="dark">Volver</Button>
				</Link>
			</div>
		</div>
	);
};
