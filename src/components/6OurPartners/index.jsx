import React from 'react';
import fondo from '../Imagenes/fondo3.webp';
import socio from '../Imagenes/socio.png';
const OurPartners = () => {
const partner={
  imagen: socio,
  name: 'Fundación BA Study',
  enlace:""
}

  return (
    <div className='flex justify-center items-center h-96 w-full bg-blue-100'>
      <div className='flex flex-col justify-center items-center w-7/12 h-96'>
        <img className='object-fit absolute h-96 p-4' width="1150px" src={fondo} alt="tecno"/> 
        <strong className='flex flex-row flew-wrap relative text-blue font-calibri m text-2xl'>Nuestro socio, BA Study
        
        </strong>
        
        <img className='relative h-24 m-10 w-30 ' src={partner.imagen} alt="nuestros-socios" />
        <button className='relative px-2 bg-blue-300 rounded-lg'>
          <a href={partner.enlace}>
            Conocé más de {partner.name}</a></button>
      </div>
    </div>

    )


}

export default OurPartners