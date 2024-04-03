import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Principal } from './views/Principal';
import { Login } from './views/Login';
import { Reservas } from './views/Reservas';
import { Header } from './views/Header';
import { NuevaReserva } from './views/NuevaReserva';
import { CheckOut } from './views/CheckOut';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
