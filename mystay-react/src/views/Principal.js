import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const Principal = () => {
    return (
        <div>
            <div id='iconosPrincipal'>
                <Link to='/perfil' >
                    <div>
                        <p>Perfil</p>
                    </div>
                </Link>
                <Link to='/reservas' >
                    <div>
                        <p>Reservas</p>
                    </div>
                </Link>
                <Link to='/habitacion' >
                    <div>
                        <p>Habitación</p>
                    </div>
                </Link>
                <Link to='/transporte' >
                    <div>
                        <p>Transporte</p>
                    </div>
                </Link>
            </div>
            <Link to='/login'><Button>Logout</Button></Link>
        </div>
    )
}
