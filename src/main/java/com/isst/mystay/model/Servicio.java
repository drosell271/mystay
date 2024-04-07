package com.isst.mystay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Servicio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nombre;
	private String descripcion;
	private String recursoNecesario;
	private String tipoEmpleado;
	private Double duracion;
	private Double precio;
	private Boolean esPremium;
	private Boolean satisfecho;

	private Long reservaId;
	private Long recursoId;
	private Long empleadoId;

	public Servicio() {
	}

	// Getters
	public Long getId() {
		return id;
	}

	public String getNombre() {
		return nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public String getRecursoNecesario() {
		return recursoNecesario;
	}

	public String getTipoEmpleado() {
		return tipoEmpleado;
	}

	public Double getDuracion() {
		return duracion;
	}

	public Double getPrecio() {
		return precio;
	}

	public Boolean getEsPremium() {
		return esPremium;
	}

	public Boolean getSatisfecho() {
		return satisfecho;
	}

	public Long getIdReserva() {
		return reservaId;
	}

	public Long getIdRecurso() {
		return recursoId;
	}

	public Long getIdEmpleado() {
		return empleadoId;
	}

	// Setters
	public void setId(Long id) {
		this.id = id;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public void setRecursoNecesario(String recursoNecesario) {
		this.recursoNecesario = recursoNecesario;
	}

	public void setTipoEmpleado(String tipoEmpleado) {
		this.tipoEmpleado = tipoEmpleado;
	}

	public void setDuracion(Double duracion) {
		this.duracion = duracion;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public void setEsPremium(Boolean esPremium) {
		this.esPremium = esPremium;
	}

	public void setSatisfecho(Boolean satisfecho) {
		this.satisfecho = satisfecho;
	}

	public void setIdReserva(Long reservaId) {
		this.reservaId = reservaId;
	}

	public void setIdRecurso(Long recursoId) {
		this.recursoId = recursoId;
	}

	public void setIdEmpleado(Long empleadoId) {
		this.empleadoId = empleadoId;
	}

}
