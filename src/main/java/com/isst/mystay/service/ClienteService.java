package com.isst.mystay.service;

import com.isst.mystay.model.Cliente;
import com.isst.mystay.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.lang.Nullable;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;

	public Cliente guardarCliente(@Nullable Cliente cliente) {
		if (cliente != null) {
			return clienteRepository.save(cliente);
		}
		throw new IllegalArgumentException("El cliente no puede ser null");
	}

	public List<Cliente> obtenerTodosLosClientes() {
		return clienteRepository.findAll();
	}

	public Cliente obtenerClientePorId(@Nullable Long id) {
		if (id != null) {
			if (clienteRepository.existsById(id)) {
				return clienteRepository.findById(id).orElse(null);
			} else {
				throw new IllegalArgumentException("El cliente no existe");
			}
		}
		throw new IllegalArgumentException("El ID no puede ser null");
	}

	public Cliente actualizarCliente(Long id, Cliente clienteDetalles) {
		if (id == null || clienteDetalles == null) {
			throw new IllegalArgumentException("El ID y los detalles del cliente no pueden ser null");
		}

		Optional<Cliente> clienteExistente = clienteRepository.findById(id);

		if (clienteExistente.isPresent()) {
			Cliente clienteActualizado = clienteExistente.get();
			clienteActualizado.setNombre(clienteDetalles.getNombre());
			clienteActualizado.setDocumento(clienteDetalles.getDocumento());
			clienteActualizado.setCorreo(clienteDetalles.getCorreo());
			clienteActualizado.setTelefono(clienteDetalles.getTelefono());
			clienteActualizado.setMetodoPago(clienteDetalles.getMetodoPago());
			clienteActualizado.setEsPremium(clienteDetalles.isEsPremium());
			return clienteRepository.save(clienteActualizado);
		}
		throw new IllegalArgumentException("El cliente no existe");
	}

	public boolean eliminarCliente(@Nullable Long id) {
		if (id != null) {
			if (clienteRepository.existsById(id)) {
				clienteRepository.deleteById(id);
				return true;
			} else {
				throw new IllegalArgumentException("El cliente no existe");
			}
		}
		throw new IllegalArgumentException("El ID no puede ser null");
	}
}
