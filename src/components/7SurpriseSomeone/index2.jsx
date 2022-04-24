import React from 'react'
import sur from '../Imagenes/surprise.jpg'

const surprisesomeone = () => {
  return (
    <div className='flex justify-center flex-row flex-wrap w-full h-100  font-calibri bg-blue-100'>
      <ul className='flex justify-center flex-row  flex-wrap mt-6 mb-6'>
        <img className='w-96' src={sur} alt='imagen de soprender a alguien' />

        <ul className='w-2/4  ml-12'>
          <strong className='text-xl'>¡Sorprende a alguien!</strong>

          <li className='text-lg pb-4 '>Mixtery Box Cumpleaños</li>
          <li className='text-left '>
            ¿Quéres regalarle algo a un familiar, amigo o colega para su
            cumpleaños?
            <li>
              
              Nuestra caja misteriosa llena de tecnología es la manera perfecta
              para sacarle una sonrisa en su día, entregada directamente a su
              puerta.
            </li>
            <li>
              
              Podes elegir entre 4 opciones dependiendo de cuantos items
              quieras.
            </li>
            <li className='mt-10'> Si deseas hacer regalos corporativos o para grandes grupos, contactanos y podemos ver opciones de personalización y diseño.



            </li>
          </li>

          <li>
            <button className='w-32 mt-6 h-6 bg-blue-500 rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300'>
              <a target='blank' href=''>
              
                Comprar ahora
              </a>
            </button>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default surprisesomeone
