import React from 'react';
import { Header } from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export const Principal = () => {
    return (
        <div>
            <Header />
            <div id='iconosPrincipal'>
                <div>
                    <p>Perfil</p>
                </div>
                <div>
                    <p>Reservas</p>
                </div>
                <div>
                    <p>Habitación</p>
                </div>
                <div>
                    <p>Transporte</p>
                </div>
            </div>
            <Button>Logout</Button>
        </div>
    )
}
