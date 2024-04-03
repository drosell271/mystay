package com.isst.mystay.controller;

import com.isst.mystay.model.Cliente;
import com.isst.mystay.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
	@Autowired
	private ClienteService clienteService;

	@PostMapping
	public Cliente agregarCliente(@RequestBody Cliente cliente) {
		return clienteService.guardarCliente(cliente);
	}

	@GetMapping
	public List<Cliente> listarTodosLosClientes() {
		return clienteService.obtenerTodosLosClientes();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable Long id) {
		Cliente cliente = clienteService.obtenerClientePorId(id);
		return ResponseEntity.ok(cliente);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Cliente> actualizarCliente(@PathVariable Long id, @RequestBody Cliente clienteDetalles) {
		Cliente clienteActualizado = clienteService.actualizarCliente(id, clienteDetalles);
		return ResponseEntity.ok(clienteActualizado);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminarCliente(@PathVariable Long id) {
		if (clienteService.eliminarCliente(id)) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
