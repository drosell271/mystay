package com.isst.mystay.repository;

import com.isst.mystay.model.Habitacion;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HabitacionRepository extends JpaRepository<Habitacion, Long> {
    List<Habitacion> findByHotelId(long hotelId);
}


