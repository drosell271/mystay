import React from 'react'
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Incidencias = () => {
  return (
    <div>
        <h5>Categoría:</h5>
        <Form.Select aria-label="Default select example">
            <option>Selecciona</option>
            <option value="1">Categoría 1</option>
            <option value="2">Categoría 2</option>
            <option value="3">Categoría 3</option>
        </Form.Select>
        <h5>Incidencia:</h5>
        <input
          type="text"
          id="incidencias"
          placeholder="Escriba aquí la incidencia"
        /> 
        <Button className='enviar' variant="dark">Enviar</Button>
        <Button className='atras' variant="dark">Atrás</Button>
    </div>
  )
}

export default Incidencias
