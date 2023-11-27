import React from 'react';
import camping from '../assets/camping_jbc.jpeg';

export default function Inicio() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={camping} alt="not found" style={{ width: '50%', marginLeft: '-10px', marginTop: '200px' }} />
      <div style={{ marginLeft: '20px' }}>
        <h1>Inicio</h1>
        <p>Tu texto aquí</p>
      </div>
    </div>
  );
}
