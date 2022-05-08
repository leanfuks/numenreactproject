import React from 'react';
import fondo from '../Imagenes/fondo3.webp';
import socio from '../Imagenes/socio.png';
const OurPartners = () => {
const partner={
  imagen: socio,
  name: 'Academia Numen',
  enlace:"https://ar.academianumen.com/?gclid=Cj0KCQjwyMiTBhDKARIsAAJ-9Vu43NuXucqnZgfyHBQOEptoS-i_Dyoq6R3zTZmrXCzEeu8_fP148wsaAn3uEALw_wcB"
}

  return (
    <div className='flex justify-center items-center w-full h-96 bg-blue-100' >
      <img className='absolute w-7/12 h-96  ' src={fondo} alt="tecno" />
      <div className='flex flex-col items-center w-auto'>
      <strong className='relative text-blue font-calibri text-2xl'>Nuestros socios</strong>
    <img className='relative h-12 m-10 w-52 ' src={partner.imagen} alt="nuestros-socios" />
      <button className='relative px-2 bg-blue-300 rounded-lg'>
        <a href={partner.enlace}>
        Conocé más de {partner.name}</a></button>
      </div>
    </div>

    )
}

export default OurPartners