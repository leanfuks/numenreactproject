import React from 'react';
import fondo from '../Imagenes/fondoTecno.jpg';
import socio from '../Imagenes/socio.png'
const OurPartners = () => {


  return (
    <div className='container w-full h-52 ' >
 <img className='absolute w-full h-52' src={fondo} alt="tecno" />
      <div className='flex flex-col items-center'>
      <h1 className='relative pt-4 text-white'>Nuestros socios:</h1>
    <img className='relative h-12 mt-8 w-52 ' src={socio} alt="nuestros-socios" />
      <button className='relative px-2 mt-8 bg-blue-300 rounded-lg'>Conocé más de Academia Numen</button>
      </div>
    </div>
    )
}

export default OurPartners