package com.isst.mystay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Recurso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    
    private Long hotelId; // Asumiendo que el hotelId es de tipo Long

    // Constructor por defecto
    public Recurso() {
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public Long getHotelId() {
        return hotelId;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setHotelId(Long hotelId) {
        this.hotelId = hotelId;
    }

    // Aquí puedes añadir cualquier otro método necesario
}
