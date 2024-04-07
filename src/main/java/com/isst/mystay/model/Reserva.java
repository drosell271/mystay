package com.isst.mystay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Reserva {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Date fechaEntrada;
	private Date fechaSalida;
	private Double cuenta;

	private Long clienteId;
	private Long habitacionId;

	public Reserva() {
	}

	// Getters
	public Long getId() {
		return id;
	}

	public Date getFechaEntrada() {
		return fechaEntrada;
	}

	public Date getFechaSalida() {
		return fechaSalida;
	}

	public Double getCuenta() {
		return cuenta;
	}

	public Long getClienteId() {
		return clienteId;
	}

	public Long getHabitacionId() {
		return habitacionId;
	}

	// Setters
	public void setId(Long id) {
		this.id = id;
	}

	public void setFechaEntrada(Date fechaEntrada) {
		this.fechaEntrada = fechaEntrada;
	}

	public void setFechaSalida(Date fechaSalida) {
		this.fechaSalida = fechaSalida;
	}

	public void setCuenta(Double cuenta) {
		this.cuenta = cuenta;
	}

	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
	}

	public void setHabitacionId(Long habitacionId) {
		this.habitacionId = habitacionId;
	}

}
