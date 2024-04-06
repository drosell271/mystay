package com.isst.mystay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Habitacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Integer numero;
    private String tipo;
    private Integer numCamas;
    private Double precio;
    private long hotelId;

    // Constructor por defecto
    public Habitacion() {
    }

    // Getters
    public long getId() { return id; }
    public Integer getNumero() { return numero; }
    public String getTipo() { return tipo; }
    public Integer getNumCamas() { return numCamas; }
    public Double getPrecio() { return precio; }
    public long getHotelId() { return hotelId; }

    // Setters
    public void setId(long id) { this.id = id; }
    public void setNumero(Integer numero) { this.numero = numero; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    public void setNumCamas(Integer numCamas) { this.numCamas = numCamas; }
    public void setPrecio(Double precio) { this.precio = precio; }
    public void setHotelId(long hotelId) { this.hotelId = hotelId; }
}
