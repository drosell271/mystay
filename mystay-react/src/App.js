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
          <Route path='/nuevareserva' element={<NuevaReserva />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/cafeteria' element={<Cafeteria />} />
          <Route path='/confort' element={<Confort />} />
          <Route path='/habitacion' element={<Habitacion />} />
          <Route path='/incidencias' element={<Incidencias />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/transporte' element={<Transporte />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
