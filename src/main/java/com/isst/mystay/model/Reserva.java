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
	private Integer id;

	private Date fechaEntrada;
	private Date fechaSalida;
	private Double cuenta;

	private Integer clienteId;
	private Integer habitacionId;

	public Reserva() {
	}

	// Getters
	public Integer getId() {
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

	public Integer getClienteId() {
		return clienteId;
	}

	public Integer getHabitacionId() {
		return habitacionId;
	}

	// Setters
	public void setId(Integer id) {
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

	public void setClienteId(Integer clienteId) {
		this.clienteId = clienteId;
	}

	public void setHabitacionId(Integer habitacionId) {
		this.habitacionId = habitacionId;
	}

}
