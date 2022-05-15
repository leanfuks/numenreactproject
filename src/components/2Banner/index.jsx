import Ecommerce from "../Imagenes/Ecommerce.jpeg"
const Banner = () => {
  return (
    <>
    <div className="flex items-center justify-center w-full p-6 bg-blue-100 h-96">
      <div style={{backgroundImage: `url(${Ecommerce})`,}} className=" flex justify-center flex-col items-center w-[1150px] h-full" >
        <strong className="text-2xl font-extrabold text-center font-calibri text-grey-700 ">Descubri todas nuestras marcas </strong>
        <button className="p-1 m-2 text-xl duration-300 ease-in-out bg-blue-300 rounded-sm shadow-sm font-calibri shadow-black delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light ">Explorar</button>
        
      </div>
      
      
    </div>
    </>
  )
}

export default Banner