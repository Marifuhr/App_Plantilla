import './App.css'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servicios from './Components/Servicios';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </>
  )
}

export default App