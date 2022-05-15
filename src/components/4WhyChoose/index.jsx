import React from 'react'
import sus from '../Imagenes/sus.png'
import huella from '../Imagenes/huella.png'
import bio from '../Imagenes/bio.png'
import pul from '../Imagenes/pulgar.png'
import card from '../Imagenes/card.png'

const whychoose = () => {
  const cards = [
    {
      name: 'Sustentabilidad',
      description:
        'Somos una empresa certificada con normas internaciones que ofrece productos 100% amigables con el medio ambiente.',
      image: sus,
      alt: 'logo sustentabilidad'
    },
    {
      name: 'Emisiones de CO2',
      description:
        'Reducimos al máximo nuestra huella de carbono utilizando vehículos eléctricos y electricidad solar en todas nuestras instalaciones.',
      image: huella,
      alt: 'logo huella de carbono'
    },
    {
      name: 'Compromiso con el planeta',
      description:
        'Tanto nuestros paquetes como envoltorios son totalmente biodegradables, podes usarlos para abonar la tierra.',
      image: bio,
      alt: 'logo planeta'
    },
    {
      name: 'Satisfacción del cliente',
      description:
        'Ofrecemos la mejor experiencia de compra del mercado, con clientes totalmente satisfechos. Si no es así, te devolvemos todo tu dinero.',
      image: pul,
      alt: 'logo satisfaccion cliente'
    },
    {
      name: 'Numen Card',
      description:
        'Tenemos la mejor financiación con nuestra tarjeta Mastercard. Podes usarla donde quieras y acumular puntos para tu próxima compra.',
      image: card,
      alt: 'logo numencard'
    }
  ]

  return (
    <div className='flex flex-wrap pb-15 space-x-4 space-y-2 p-6 justify-center items-center font-calibri bg-blue-100 w-full h-auto'>
      <p className='flex mb-2 justify-center items-center font-calibri text-xl w-full h-30 bg-blue-100'>
        <strong>¿Por que elegir Numen Store?</strong>
      </p>
      {cards.map(item => (
        <ul className='font-calibri w-50 h-60 '>
          <li>
            <img
              src={item.image}
              alt={item.alt}
              className='mb-4 flex justify-items-start h-10 p-0 w-15'
            />
          </li>
          <li className=' mb-2 font-semibold  text-left '>{item.name}</li>
          <li className='  w-48 h-38 flex  text-left'>{item.description}</li>
        </ul>
      ))}
    </div>
  )
}

export default whychoose
