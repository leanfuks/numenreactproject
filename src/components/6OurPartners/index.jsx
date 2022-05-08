import React from 'react';
import fondo from '../Imagenes/fondo3.webp';
import socio from '../Imagenes/socio.png'
const OurPartners = () => {
const partner={
  imagen: socio ,
  name: 'Academia Numen',
  enlace:"https://ar.academianumen.com/?gclid=Cj0KCQjwyMiTBhDKARIsAAJ-9Vu43NuXucqnZgfyHBQOEptoS-i_Dyoq6R3zTZmrXCzEeu8_fP148wsaAn3uEALw_wcB"
}

  return (
    <div className='container w-full h-52 ' >
  <img className='absolute w-full h-52 contain-cover ' src={fondo} alt="tecno" />
      <div className='flex flex-col items-center'>
      <h1 className='relative pt-4 text-white'><b>Nuestros socios:</b></h1>
    <img className='relative h-12 mt-8 w-52 ' src={partner.imagen} alt="nuestros-socios" />
      <button className='relative px-2 mt-8 bg-blue-300 rounded-lg'>
        <a href={partner.enlace}>
        Conocé más de {partner.name}</a></button>
      </div>
    </div>
    )
}

export default OurPartners