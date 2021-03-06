import React from 'react'
import delivery from '../Imagenes/delivery.png'
import tilde from '../Imagenes/tilde.png'

const WhoMakes = () => {
  const listitems = [
    {
      image: tilde,
      alt: 'Logo Item Corona Numen',
      descripcion:
        'Comenzamos este proyecto para lograr un cambio en el mercado, acercando la tecnología a tu alcance.'
    },
    {
      image: tilde,
      alt: 'Logo Item Corona Numen',
      descripcion:
        'Optimizamos y empleamos técnicas de satisfacción en la experiencia de usuario al utilizar nuestros servicios.'
    },
    {
      image: tilde,
      alt: 'Logo Item Corona Numen',
      descripcion:
        'Somos una empresa certificada con ISO 14001, empleando packing sustentable y ¡100% compostable!'
    },
    {
      image: tilde,
      alt: 'Logo Item Corona Numen',
      descripcion:
        'Nuestros vehículos de logística son 100% eléctricos, apostamos a disminuir todos los días la emisión de CO2.'
    }
  ]

  return (
    <div className='flex justify-center items-center text-justify flex-row flex-wrap w-full h-100  font-calibri bg-blue-100'>
      <ul className='m-4'>
        <dt className='text-xl pb-4'>
          <strong>¿Quiénes somos?</strong>
        </dt>
        {listitems.map(item => (
          <li className='flex flex-row pb-5'>
            <img
              className='flex mr-1 flex-row h-5 w-6'
              src={item.image}
              alt={item.alt}
            />
            {item.descripcion}
          </li>
        ))}
        <button className='w-20 h-6 bg-blue-500 rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300'>
          <a target='blank' href=''>
            {' '}
            Leer más
          </a>
        </button>
      </ul>
      <ul className=' flex flex-nowrap pl-10 m-2 w-50 h-100'>
        <img className='' src={delivery} alt='imagen delivery' width='200px' />
      </ul>
    </div>
  )
}

export default WhoMakes
