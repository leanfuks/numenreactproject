import React from "react";
import tv from "../Imagenes/tv.png";
import bici from "../Imagenes/bici.png";
import celu from "../Imagenes/celu.png";
import escritorio from "../Imagenes/escritorio.jpg";


const latestoffers = () => {
  return (
    <>
      
      <div className="flex flex-wrap space-x-4 space-y-2 p-6 justify-center items-center font-calibri bg-blue-100 w-full h-auto">
        <p className="flex mb-2 justify-center items-center font-calibri text-xl w-full h-30 bg-blue-100">
        <strong>¡ÚLTIMAS OFERTAS!</strong>
      </p>
        
        <ul className="font-calibri bg-blue-200 rounded-2xl  w-50 h-70">
          <li>
            <img
              src={tv}
              alt="Imagen TV TLC"
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center ">
            Smart TV 4K 150" TCL
          </li>
          <li className=" flex flex-row justify-center items-center font-semibold text-center text-red-500">SALE! 290.000
          <li className=" ml-2 text-sm font-normal text-black line-through ">
            $390.000</li>
          
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">
            <button className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src >Compra Rápida</a>
            </button>
          </li>
        </ul>




        <ul className="font-calibri bg-blue-200 rounded-2xl  w-50 h-70">
          <li>
            <img
              src={bici}
              alt="Imagen Bici Peugeot"
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center ">
            Mountain Bike Peugeot 26"
          </li>
          <li className=" flex flex-row justify-center items-center font-semibold text-center text-red-500">SALE! 140.500
          <li className=" ml-2 text-sm font-normal text-black line-through ">
            $198.000</li>
          
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">
            <button className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src={bici}>Compra Rápida</a>
            </button>
          </li>
        </ul>


        <ul className="font-calibri bg-blue-200 rounded-2xl  w-50 h-70">
          <li>
            <img
              src={celu}
              alt="Imagen Samsung S20 Ultra"
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center ">
            Samsung S20 Ultra
          </li>
          <li className=" flex flex-row justify-center items-center font-semibold text-center text-red-500">SALE! 200.000
          <li className=" ml-2 text-sm font-normal text-black line-through ">
            $260.000</li>
          
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">
            <button className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src={celu}>Compra Rápida</a>
            </button>
          </li>
        </ul>


        <ul className="font-calibri bg-blue-200 rounded-2xl  w-50 h-70">
          <li>
            <img
              src={tv}
              alt="Imagen TV TLC"
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center ">
            Smart TV 4K 150" TCL
          </li>
          <li className=" flex flex-row justify-center items-center font-semibold text-center text-red-500">SALE! 290.000
          <li className=" ml-2 text-sm font-normal text-black line-through ">
            $390.000</li>
          
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">
            <button className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src="">Compra Rápida</a>
            </button>
          </li>
        </ul>
      
      </div>
    </>
  );
};

export default latestoffers;
