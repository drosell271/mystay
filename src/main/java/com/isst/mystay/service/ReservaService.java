package com.isst.mystay.service;

import com.isst.mystay.model.Reserva;
import com.isst.mystay.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.lang.Nullable;

@Service
public class ReservaService {

	@Autowired
	private ReservaRepository ReservaRepository;

	public Reserva guardarReserva(@Nullable Reserva Reserva) {
		if (Reserva != null) {
			return ReservaRepository.save(Reserva);
		}
		return null;
	}

	public List<Reserva> obtenerTodosLosReservas() {
		return ReservaRepository.findAll();
	}

	public Reserva obtenerReservaPorId(@Nullable Long id) {
		if (id != null) {
			if (ReservaRepository.existsById(id)) {
				return ReservaRepository.findById(id).orElse(null);
			} else {
				return null;
			}
		}
		return null;
	}

	public Reserva actualizarReserva(Long id, Reserva ReservaDetalles) {
		if (id == null || ReservaDetalles == null) {
			return null;
		}

		Optional<Reserva> ReservaExistente = ReservaRepository.findById(id);

		if (ReservaExistente.isPresent()) {
			Reserva ReservaActualizado = ReservaExistente.get();

			ReservaActualizado.setFechaEntrada(ReservaDetalles.getFechaEntrada());
			ReservaActualizado.setFechaSalida(ReservaDetalles.getFechaSalida());
			ReservaActualizado.setCuenta(ReservaDetalles.getCuenta());
			ReservaActualizado.setClienteId(ReservaDetalles.getClienteId());
			ReservaActualizado.setHabitacionId(ReservaDetalles.getHabitacionId());

			return ReservaRepository.save(ReservaActualizado);
		}
		return null;
	}

	public boolean eliminarReserva(@Nullable Long id) {
		if (id != null) {
			if (ReservaRepository.existsById(id)) {
				ReservaRepository.deleteById(id);
				return true;
			} else {
				return false;
			}
		}
		return false;
	}
}
