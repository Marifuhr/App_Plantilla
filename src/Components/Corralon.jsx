import React from 'react';

export default function Corralón() {
  return (
    <div>
      <h1 style={{ marginLeft: '550px' }}>Título Central</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="imagen1.jpg" alt="Imagen 1" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="imagen2.jpg" alt="Imagen 2" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="imagen3.jpg" alt="Imagen 3" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="imagen4.jpg" alt="Imagen 4" />
        </div>
      </div>
    </div>
  );
}