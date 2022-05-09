import Ecommerce from "../Imagenes/Ecommerce.jpg"
const Banner = () => {
  return (
    <>
    <div style={{backgroundImage: `url(${Ecommerce})`, backgroundRepeat:"round"}} className="flex-row bg-white h-80 sm:flex" >
      <p className="mx-auto mt-20 font-serif text-2xl text-center">Descubre todas nuestras marcas <br />
      <button className="text-xl duration-300 ease-in-out rounded-sm shadow-sm shadow-black delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light ">Explorar</button>
      </p>
      
    </div>
    </>
  )
}

export default Banner