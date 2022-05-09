import Ecommerce from "../Imagenes/Ecommerce.jpeg"
const Banner = () => {
  return (
    <>
    <div className=" p-6 flex justify-center items-center w-full h-96 bg-blue-100 ">
      <div style={{backgroundImage: `url(${Ecommerce})`,}} className="flex justify-center flex-col items-center w-[1150px] h-full" >
        <strong className="font-calibri text-2xl font-extrabold text-grey-700 text-center ">Descubri todas nuestras marcas </strong>
        <button className="font-calibri p-1 m-2 text-xl duration-300 ease-in-out rounded-sm shadow-sm shadow-black delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light bg-blue-300 ">Explorar</button>
        
      </div>
      
      
    </div>
    </>
  )
}

export default Banner