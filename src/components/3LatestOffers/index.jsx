import React from 'react'
import tv from '../Imagenes/tv.png'
import bici from '../Imagenes/bici.png'
import celu from '../Imagenes/celu.png'
import note from '../Imagenes/notebook.png'
import Swal from 'sweetalert2'

const latestoffers = ({ cart, setCart }) => {
  const items = [
    {
      name: 'Smart TV 4K 150 TCL',
      price: '$390.000',
      sale: '$290.000',
      image: tv
    },
    {
      name: 'Mountain Bike Peugeot 26"',
      price: '$198.000',
      sale: '$140.500',
      image: bici
    },
    {
      name: 'Samsung S20 Ultra',
      price: '$260.000',
      sale: '$200.000',
      image: celu
    },
    {
      name: 'Notebook Acer Nitro 5',
      price: '$230.000',
      sale: '$185.000',
      image: note
    }
  ]

  const mostrarAlerta = () => {
    setCart(cart + 1)
    Swal.fire({
      title: '¡Éxito!',
      text: '¡Item agregado al carrito!',
      icon: 'success'
    })
  }

  return (
    <div className='flex flex-wrap justify-center w-full h-auto p-6 space-x-4 space-y-2 bg-blue-100 font-calibri'>
      <p className='flex items-center justify-center w-full mb-2 text-xl bg-blue-100 font-calibri h-30'>
        <strong>¡Últimas Ofertas!</strong>
      </p>
      {items.map(item => (
        <ul className='bg-blue-200 font-calibri rounded-2xl w-50 h-70'>
          <li>
            <img src={item.image} className='h-40 p-2 w-45' />
          </li>
          <li className='m-2 font-bold text-center '>{item.name}</li>
          <li className='flex flex-row items-center justify-center font-semibold text-center text-red-500 '>
            {item.sale}
            <li className='ml-2 text-sm font-normal text-black line-through '>
              {item.price}
            </li>
          </li>
          <li className='m-2 text-center bg-blue-300 rounded-lg'>
            <button onClick={mostrarAlerta}>Agregar al carrito</button>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default latestoffers
