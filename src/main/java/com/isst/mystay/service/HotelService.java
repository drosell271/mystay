package com.isst.mystay.service;

import com.isst.mystay.model.Hotel;
import com.isst.mystay.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.lang.Nullable;

@Service
public class HotelService {

	@Autowired
	private HotelRepository HotelRepository;

	public Hotel guardarHotel(@Nullable Hotel Hotel) {
		if (Hotel != null) {
			return HotelRepository.save(Hotel);
		}
		return null;
	}

	public List<Hotel> obtenerTodosLosHotels() {
		return HotelRepository.findAll();
	}

	public Hotel obtenerHotelPorId(@Nullable Integer id) {
		if (id != null) {
			if (HotelRepository.existsById(id)) {
				return HotelRepository.findById(id).orElse(null);
			} else {
				return null;
			}
		}
		return null;
	}

	public Hotel actualizarHotel(Integer id, Hotel HotelDetalles) {
		if (id == null || HotelDetalles == null) {
			return null;
		}

		Optional<Hotel> HotelExistente = HotelRepository.findById(id);

		if (HotelExistente.isPresent()) {
			Hotel HotelActualizado = HotelExistente.get();

			HotelActualizado.setDireccion(HotelDetalles.getDireccion());
			HotelActualizado.setCiudad(HotelDetalles.getCiudad());
			return HotelRepository.save(HotelActualizado);
		}
		return null;
	}

	public boolean eliminarHotel(@Nullable Integer id) {
		if (id != null) {
			if (HotelRepository.existsById(id)) {
				HotelRepository.deleteById(id);
				return true;
			} else {
				return false;
			}
		}
		return false;
	}
}
