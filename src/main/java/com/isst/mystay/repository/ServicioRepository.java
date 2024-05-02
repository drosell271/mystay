package com.isst.mystay.repository;

import com.isst.mystay.model.Servicio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServicioRepository extends JpaRepository<Servicio, Integer> {
	List<Servicio> findByReservaId(Integer reservaId);
}