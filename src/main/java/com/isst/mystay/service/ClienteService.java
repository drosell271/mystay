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
		return null;
	}

	public List<Cliente> obtenerTodosLosClientes() {
		return clienteRepository.findAll();
	}

	public Cliente obtenerClientePorId(@Nullable Integer id) {
		if (id != null) {
			if (clienteRepository.existsById(id)) {
				return clienteRepository.findById(id).orElse(null);
			} else {
				return null;
			}
		}
		return null;
	}

	public Cliente actualizarCliente(Integer id, Cliente clienteDetalles) {
		if (id == null || clienteDetalles == null) {
			return null;
		}

		Optional<Cliente> clienteExistente = clienteRepository.findById(id);

		if (clienteExistente.isPresent()) {
			Cliente clienteActualizado = clienteExistente.get();
			clienteActualizado.setNombre(clienteDetalles.getNombre());
			clienteActualizado.setDocumento(clienteDetalles.getDocumento());
			clienteActualizado.setCorreo(clienteDetalles.getCorreo());
			clienteActualizado.setTelefono(clienteDetalles.getTelefono());
			clienteActualizado.setMetodoPago(clienteDetalles.getMetodoPago());
			clienteActualizado.setEsPremium(clienteDetalles.getEsPremium());
			return clienteRepository.save(clienteActualizado);
		}
		return null;
	}

	public boolean eliminarCliente(@Nullable Integer id) {
		if (id != null) {
			if (clienteRepository.existsById(id)) {
				clienteRepository.deleteById(id);
				return true;
			} else {
				return false;
			}
		}
		return false;
	}
}
