package com.isst.mystay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nombre;
    private String funcion;
    private String telefono;
    private String correo;
    private long hotelId;

    // Constructor por defecto
    public Empleado() {
    }

    // Getters
    public long getId() { return id; }
    public String getNombre() { return nombre; }
    public String getFuncion() { return funcion; }
    public String getTelefono() { return telefono; }
    public String getCorreo() { return correo; }
    public long getHotelId() { return hotelId; }

    // Setters
    public void setId(long id) { this.id = id; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public void setFuncion(String funcion) { this.funcion = funcion; }
    public void setTelefono(String telefono) { this.telefono = telefono; }
    public void setCorreo(String correo) { this.correo = correo; }
    public void setHotelId(long hotelId) { this.hotelId = hotelId; }
}
