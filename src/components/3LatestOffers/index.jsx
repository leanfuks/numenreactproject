import React from "react";
import tv from "../Imagenes/tv.png";
import bici from "../Imagenes/bici.png";
import celu from "../Imagenes/celu.png";
import note from "../Imagenes/notebook.png";
import Swal from "sweetalert2";

const latestoffers = ({cart, setCart}) => {



  const mostrarAlerta = () => {
    setCart(cart + 1)
    Swal.fire({
      title:'¡Éxito!',
      text:'¡Compra realizada!',
      icon:'success'
    })
  };


  return (
    <>      
      <div className="flex flex-wrap justify-center w-full h-auto p-6 space-x-4 space-y-2 bg-blue-100 font-calibri">
        <p className="flex items-center justify-center w-full mb-2 text-xl bg-blue-100 font-calibri h-30">
        <strong>¡Últimas Ofertas!</strong>
      </p>
        
        <ul className="bg-blue-200 font-calibri rounded-2xl w-50 h-70">
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
          <li className="flex flex-row items-center justify-center font-semibold text-center text-red-500 ">SALE! 290.000
          <li className="ml-2 text-sm font-normal text-black line-through ">
            $390.000</li>
          
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">
            {/* <button 
             onClick=
              {mostrarAlerta, () => setContador (contador + 1) }  className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src >Compra Rápida</a>
            </button > */}
            <button onClick={mostrarAlerta}>Agregar más</button>
          </li>
        </ul>




        <ul className="bg-blue-200 font-calibri rounded-2xl w-50 h-70">
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
          <li className="flex flex-row items-center justify-center font-semibold text-center text-red-500 ">SALE! 140.500
          <li className="ml-2 text-sm font-normal text-black line-through ">
            $198.000</li>
          
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">
            <button onClick={mostrarAlerta}className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src={bici}>Compra Rápida</a>
            </button>
          </li>
        </ul>


        <ul className="bg-blue-200 font-calibri rounded-2xl w-50 h-70">
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
          <li className="flex flex-row items-center justify-center font-semibold text-center text-red-500 ">SALE! 200.000
          <li className="ml-2 text-sm font-normal text-black line-through ">
            $260.000</li>
          
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">
            <button onClick={mostrarAlerta} className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src={celu}>Compra Rápida</a>
            </button>
          </li>
        </ul>


        <ul className="bg-blue-200 font-calibri rounded-2xl w-50 h-70">
          <li>
            <img
              src={note}
              alt="Imagen Notebook Acer Nitro 5"
              className="h-40 p-2 w-45"
            />
          </li>
          <li className="m-2 font-bold text-center ">
            Notebook Acer Nitro 5
          </li>
          <li className="flex flex-row items-center justify-center font-semibold text-center text-red-500 ">SALE! 185.000
          <li className="ml-2 text-sm font-normal text-black line-through ">
            $230.000</li>
          
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">
            <button onClick={mostrarAlerta} className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src="">Compra Rápida</a>
            </button>
          </li>
        </ul>
      
      </div>
    </>
  );
};

export default latestoffers;
