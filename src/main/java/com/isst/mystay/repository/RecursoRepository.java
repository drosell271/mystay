package com.isst.mystay.repository;

import com.isst.mystay.model.Recurso;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RecursoRepository extends JpaRepository<Recurso, Long> {
    // Encuentra recursos por el nombre
    List<Recurso> findByNombre(String nombre);

    // Encuentra recursos asociados a un hotel específico por hotelId
    List<Recurso> findByHotelId(Long hotelId);
}






