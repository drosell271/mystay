package com.isst.mystay.repository;

import com.isst.mystay.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	Cliente findByDocumento(String documento);
}
