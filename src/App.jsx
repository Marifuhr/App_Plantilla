import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servicios from './Components/Servicios';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import whatsappLogo from './assets/logo_what.png';
import { useState, useEffect } from 'react';
import Corralon from './Components/Corralon';
import Ferreteria from './Components/Ferreteria';
import Ofertas from './Components/Ofertas';
import Acopio from './Components/Acopio';
import Pagos from './Components/Pagos';

function App() {
  const [showButton, setShowButton] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsAppChat = () => {
    var phoneNumber = '+5493492671315';
    var url = 'https://wa.me/' + phoneNumber;
    window.open(url);
  };

  return (
    <>
 
      <Router>
        <NavBar />
        <Routes>
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/corralon" element={<Corralon />} />
          <Route path="/ferreteria" element={<Ferreteria />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/acopio" element={<Acopio />} />
          <Route path="/pagos" element={<Pagos />} />
        </Routes>
      </Router>
      {showButton && (
        <button id="openWhatsAppButton" className="whatsapp-button" onClick={openWhatsAppChat}>
          <img src={whatsappLogo} alt="WhatsApp" />
        </button>
      )}
    </>
  );
}




export default App;