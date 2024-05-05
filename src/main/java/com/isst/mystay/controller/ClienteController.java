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
	public ResponseEntity<Cliente> agregarCliente(@RequestBody Cliente cliente) {
		Cliente clienteGuardado = clienteService.guardarCliente(cliente);
		if (clienteGuardado != null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(clienteGuardado);
		}
	}

	@GetMapping
	public List<Cliente> listarTodosLosClientes() {
		return clienteService.obtenerTodosLosClientes();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable Integer id) {
		Cliente cliente = clienteService.obtenerClientePorId(id);
		if (cliente == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(cliente);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Cliente> actualizarCliente(@PathVariable Integer id, @RequestBody Cliente clienteDetalles) {
		Cliente clienteActualizado = clienteService.actualizarCliente(id, clienteDetalles);
		if (clienteActualizado == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(clienteActualizado);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminarCliente(@PathVariable Integer id) {
		if (clienteService.eliminarCliente(id)) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

}
