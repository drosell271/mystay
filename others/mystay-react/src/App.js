import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Principal } from './views/Principal';
import { Login } from './views/Login';
import { Reservas } from './views/Reservas';
import { Header } from './views/Header';
import { NuevaReserva } from './views/NuevaReserva';
import { CheckOut } from './views/CheckOut';
import Cafeteria from './views/Cafeteria';
import Confort from './views/Confort';
import Habitacion from './views/Habitacion';
import Incidencias from './views/Incidencias';
import Perfil from './views/Perfil';
import Transporte from './views/Transporte';
import { Editar } from './views/Editar';
import { Premium } from './views/Premium';
import { Concierge } from './views/Concierge';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/principal' element={<Principal />} />
          <Route path='/reservas' element={<Reservas />} />
          <Route path='/reservas/nuevareserva' element={<NuevaReserva />} />
          <Route path='/reservas/checkout' element={<CheckOut />} />
          <Route path='/habitacion/cafeteria' element={<Cafeteria />} />
          <Route path='/habitacion/confort' element={<Confort />} />
          <Route path='/habitacion' element={<Habitacion />} />
          <Route path='/habitacion/incidencias' element={<Incidencias />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/transporte' element={<Transporte />} />
          <Route path='/perfil/editar' element={<Editar />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/concierge' element={<Concierge />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
