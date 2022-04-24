import React from 'react'
import sus from '../Imagenes/sus.png'
import huella from '../Imagenes/huella.png'
import bio from '../Imagenes/bio.png'
import pul from '../Imagenes/pulgar.png'
import card from '../Imagenes/card.png'

const whychoose = () => {
  return (
    <>
      <div className='flex flex-wrap pb-15 space-x-4 space-y-2 p-6 justify-center items-center font-calibri bg-blue-100 w-full h-auto'>
        <p className='flex mb-2 justify-center items-center font-calibri text-xl w-full h-30 bg-blue-100'>
          <strong>¿Por que elegir Numen Store?</strong>
        </p>

        <ul className='font-calibri w-50 h-60 '>
          <li>
            <img
              src={sus}
              alt='Logo Sustentabilidad'
              className='mb-4 flex justify-items-start h-10 p-0 w-15'
            />
          </li>
          <li className=' mb-2 font-semibold  text-left '>Sustentabilidad</li>
          <li className='  w-48 h-38 flex  text-left'>
            Somos una empresa certificada con normas internaciones que ofrece
            productos 100% amigables con el medio ambiente.
          </li>
        </ul>

        <ul className='font-calibri w-50 h-60 '>
          <li>
            <img
              src={huella}
              alt='Logo Huella CO2'
              className='mb-4 flex justify-items-start h-10 p-0 w-15'
            />
          </li>
          <li className=' mb-2 font-semibold  text-left '>Emisiones de CO2</li>
          <li className='  w-48 h-38 flex  text-left'>
            Reducimos al máximo nuestra huella de carbono utilizando vehículos
            eléctricos y electricidad solar en todas nuestras instalaciones.
          </li>
        </ul>

        <ul className='font-calibri w-50 h-60 '>
          <li>
            <img
              src={bio}
              alt='Logo Packing Biodegradable'
              className='mb-4 flex justify-items-start h-10 p-0 w-15'
            />
          </li>
          <li className=' mb-2 font-semibold  text-left '>Compromiso con el planeta</li>
          <li className='  w-48 h-38 flex  text-left'>
            Tanto nuestros paquetes como envoltorios son totalmente biodegradables, podes usarlos para abonar la tierra.
          </li>
        </ul>

        <ul className='font-calibri w-50 h-60 '>
          <li>
            <img
              src={pul}
              alt='Logo Satisfaccion clientes'
              className='mb-4 flex justify-items-start h-10 p-0 w-15'
            />
          </li>
          <li className=' mb-2 font-semibold  text-left '>Satisfacción del cliente</li>
          <li className='  w-48 h-38 flex  text-left'>
            Ofrecemos la mejor experiencia de compra del mercado, con clientes totalmente satisfechos. Si no es así, te devolvemos todo tu dinero.
          </li>
        </ul>

        <ul className='font-calibri w-50 h-60 '>
          <li>
            <img
              src={card}
              alt='Logo Numen Card'
              className='mb-4  flex justify-items-start h-10 p-0 w-10'
            />
          </li>
          <li className=' mb-2 font-semibold  text-left '>Numen Card</li>
          <li className='  w-48 h-38 flex  text-left'>
            Tenemos la mejor financiación con nuestra tarjeta Mastercard. Podes usarla donde quieras y acumular puntos para tu próxima compra.
          </li>
        </ul>
      </div>
    </>
  )
}

export default whychoose
