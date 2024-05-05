import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Perfil = () => {
	const estadoInicial = {
		nombre: "nombre",
		documento: "documento",
		correo: "correo@correo.com",
		telefono: 123456789,
		metodoPago: "metodoPago",
		esPremium: false,
	};

	// HABRÍA QUE OBTENER LOS DATOS DE LA BDD Y HACER: setDatosPerfil() con los datos reales!!
	const [datosPerfil, setDatosPerfil] = useState(estadoInicial);

	// Peticion GET
	const id = localStorage.getItem("clienteId");

	const handleSubmit = async (e) => {
		const url = `http://localhost:8080/clientes/${id}`;

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();

			if (response.ok) {
				let datosCliente = {
					nombre: data.nombre,
					documento: data.documento,
					correo: data.correo,
					telefono: data.telefono,
					metodoPago: data.metodoPago,
					esPremium: data.esPremium,
				};
				setDatosPerfil(datosCliente);
			} else {
				console.log("Error en los datos");
			}
		} catch (error) {
			console.log("Error al conectar con el servidor");
		}
	};

	// Se ejecuta al cargar la página
	useEffect(() => {
		// Llama a la función al cargar la página
		handleSubmit();
	}, []);

	return (
		<div>
			<div className="ordenados">
				<h2>Su perfil:</h2>
				<div>
					<h5 id="holi">Nombre:</h5>
					<p>{datosPerfil.nombre}</p>
				</div>
				<div>
					<h5>Documento:</h5>
					<p>{datosPerfil.documento}</p>
				</div>
				<div>
					<h5>Correo:</h5>
					<p>{datosPerfil.correo}</p>
				</div>
				<div>
					<h5>Teléfono:</h5>
					<p>{datosPerfil.telefono}</p>
				</div>
				<div>
					<h5>Método de pago:</h5>
					<p>{datosPerfil.metodoPago}</p>
				</div>
				<div>
					<h5>Premium:</h5>
					<p>{datosPerfil.esPremium ? "Sí" : "No"}</p>
				</div>
			</div>
			<Link to="./editar">
				<Button id="botonEditar" variant="dark">
					Editar datos
				</Button>
			</Link>
			<div>
				<Link to="/principal">
					<Button className="atras" variant="dark">
						Volver
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Perfil;
