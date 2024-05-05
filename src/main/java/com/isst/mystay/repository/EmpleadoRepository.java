package com.isst.mystay.repository;

import com.isst.mystay.model.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EmpleadoRepository extends JpaRepository<Empleado, Integer> {
    List<Empleado> findByHotelId(Integer hotelId);

    Empleado findByFuncion(String funcion);
}
