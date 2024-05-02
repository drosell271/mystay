package com.isst.mystay.repository;

import com.isst.mystay.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
	// Ya incluye findById(Integer id) automáticamente
}