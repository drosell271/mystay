package com.isst.mystay.repository;

import com.isst.mystay.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	Cliente findByDocumento(String documento);

	List<Cliente> findByEsPremium(boolean esPremium);
}
