package com.isst.mystay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String nombre;
	private String documento;
	private String correo;
	private String telefono;
	private String metodoPago;
	private boolean esPremium;

	public Cliente() {
	}

	// Getters
	public Integer getId() {
		return id;
	}

	public String getNombre() {
		return nombre;
	}

	public String getDocumento() {
		return documento;
	}

	public String getCorreo() {
		return correo;
	}

	public String getTelefono() {
		return telefono;
	}

	public String getMetodoPago() {
		return metodoPago;
	}

	public boolean getEsPremium() {
		return esPremium;
	}

	// Setters
	public void setId(Integer id) {
		this.id = id;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public void setMetodoPago(String metodoPago) {
		this.metodoPago = metodoPago;
	}

	public void setEsPremium(boolean esPremium) {
		this.esPremium = esPremium;
	}
}
