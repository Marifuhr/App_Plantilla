import React from 'react';
import camping from '../assets/camping_jbc.jpeg';
import red from '../assets/redPunt.png';

export default function Nosotros() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={camping} alt="not found" style={{ width: '50%', marginLeft: '-10px', marginTop: '200px' }} />
      <div style={{ marginLeft: '30px', marginTop: '200px', backgroundImage: `url(${red})`, backgroundRepeat: 'repeat' }}>
        <h1>Nuestra Empresa</h1>
        <p>Desde el inicio de nuestro corralón de materiales y ferretería JBC el 17 de septiembre de 2011, nos hemos destacado por ofrecer productos de calidad y un servicio excepcional a nuestros clientes. 
Desde aquel día, hemos trabajado arduamente para construir una empresa sólida y confiable. Nuestro compromiso con la excelencia nos ha llevado a establecer relaciones duraderas con proveedores confiables y a mantener un amplio inventario de materiales y productos de ferretería, garantizando así la disponibilidad de todo lo necesario para llevar a cabo proyectos de construcción y mantenimiento.
Además de nuestro extenso catálogo de productos, nos esforzamos por brindar un servicio personalizado y orientado al cliente. Nuestro equipo de profesionales capacitados está siempre dispuesto a asesorar y guiar a nuestros clientes, brindando recomendaciones precisas y soluciones a medida para cada proyecto.
A lo largo de estos años, hemos crecido y evolucionado gracias al apoyo y la confianza de nuestros clientes. Nos enorgullece ser parte del crecimiento y desarrollo de nuestra comunidad, contribuyendo con materiales y servicios de calidad que impulsan la construcción y el progreso.
En "JBC", seguimos comprometidos con nuestro objetivo inicial: ser el corralón de referencia en nuestra región, ofreciendo productos de calidad, atención personalizada y soluciones integrales para todo tipo de proyectos. Estamos entusiasmados por el futuro y esperamos continuar siendo un socio confiable para todos aquellos que buscan materiales y ferretería de primer nivel.</p>
      </div>
    </div>
  );
}
