import React from 'react'
import logo from '../assets/logo_corralon.jpg'

export default function NavBar() {
  return (
    <div>
      <img src={logo} alt="Not found" style={{ marginRight: '80rem', marginTop: '-60px' }} />
      <button style={{ marginRight:'10px'}}>Nosotros</button>
      <button style={{ marginRight:'10px'}}>Servicios</button>
      <button style={{ marginRight:'10px'}}>Contacto</button>
    </div>
  

  )
}
