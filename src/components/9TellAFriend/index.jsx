import google from '../Imagenes/google.png'
import wpp from '../Imagenes/wpp.png'
import face from '../Imagenes/face.png'
import insta from '../Imagenes/insta.png'
import datafis from '../Imagenes/datafis.png'

const WithFriends = () => {
  const listicons = [
    {
      image: wpp,
      alt: 'logo google',
      link: 'https://web.whatsapp.com/'
    },
    {
      image: insta,
      alt: 'logo google',
      link: 'https://instagram.com'
    },
    {
      image: face,
      alt: 'logo google',
      link: 'https://facebook.com'
    },
    {
      image: google,
      alt: 'logo google',
      link: 'https://play.gooogle.com'
    },
    {
      image: datafis,
      alt: 'logo google',
      link: 'https://afip.gov.ar'
    }
  ]

  return (
    <ul className='flex flex-col justify-center w-full h-48 font-calibri bg-blue-200'>
      <li className='flex flex-col p-3 font-calibri justify-center text-center w-15 h-full'>
        ¡Suscribite, comparti y recibi nuevas promociones.
        <li> ¡Descarga nuestra App Mobile!</li>
      </li>
      <li className='flex flex-row flex-wrap content-center justify-center'>
        {listicons.map(item => (
          <a target='_blank' href={item.link}>
            <img
              className='w-14 mt-1 h-18 pb-2 mb-2 ml-1 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300'
              src={item.image}
              alt={item.alt}
            />
          </a>
        ))}
      </li>
    </ul>
  )
}

export default WithFriends
