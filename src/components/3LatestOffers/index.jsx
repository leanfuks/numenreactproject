import React from "react";
import tv from "../Imagenes/tv.png";
import bici from "../Imagenes/bici.png";
import portaLlaves from "../Imagenes/portaLlaves.jpg";
import escritorio from "../Imagenes/escritorio.jpg";
import Tele from "../Extras/Tele";

const latestoffers = () => {
  return (
    <>
      
      <div className="flex flex-wrap space-x-4 space-y-2 p-6 justify-center items-center font-calibri bg-blue-100 w-full h-auto">
        <p className="flex justify-center items-center p-2 font-calibri text-xl w-full h-30 bg-blue-100">
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
              <a target="blank" src={Tele}>Compra Rápida</a>
            </button>
          </li>
        </ul>




        <ul className="font-calibri bg-blue-200 rounded-2xl  w-50 h-70">
          <li>
            <img
              src={bici}
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
              <a target="blank" src={Tele}>Compra Rápida</a>
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
              <a target="blank" src={Tele}>Compra Rápida</a>
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
              <a target="blank" src={Tele}>Compra Rápida</a>
            </button>
          </li>
        </ul>
      
      </div>
    </>
  );
};

export default latestoffers;
