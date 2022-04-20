import React from "react";
import tv from "../Imagenes/tv.jpg";
import bici from "../Imagenes/bici.png";
import portaLlaves from "../Imagenes/portaLlaves.jpg";
import escritorio from "../Imagenes/escritorio.jpg";
import Tele from "../Extras/Tele";

const latestoffers = () => {
  return (
    <>
      <p className="p-2 font-serif text-xl text-center bg-blue-200">
        <strong>¡ULTIMAS OFERTAS!</strong>
      </p>
      <div id="ofertas" className="flex flex-wrap justify-center w-full p-0 m-0 font-serif bg-blue-200">
        <ul className="m-4 font-serif bg-blue-500 rounded-lg rounded-t-xl item-center w-80 h-80">
          <li>
            <img
              src={tv}
              alt="imagenTV"
              className="h-40 p-2 bg-blue-500 rounded-lg w-80 "
            />
          </li>
          <li className="m-2 text-center bg-blue-200 rounded-lg">
            Smart tv 150" TCL
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">$290.000</li>
          <li className="m-2 text-center line-through bg-blue-400 rounded-lg">
            $390.000
          </li>
          <li className="m-2 text-center bg-blue-200 rounded-lg">
            <button className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" src={Tele}>mas info aqui</a>
            </button>
          </li>
        </ul>

        <ul className="m-4 font-serif bg-blue-500 rounded-lg rounded-t-xl item-center w-80 h-80">
          <li>
            <img
              src={bici}
              alt="imagenTV"
              className="h-40 p-2 bg-blue-500 rounded-lg w-80"
            />
          </li>
          <li className="m-2 text-center bg-blue-200 rounded-lg">
            Bicicleta todo terreno
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">$49.999</li>
          <li className="m-2 text-center line-through bg-blue-400 rounded-lg">
            $64.000
          </li>
          <li className="m-2 text-center bg-blue-200 rounded-lg">
            <button className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" href="">
                {" "}
                mas info aqui
              </a>
            </button>
          </li>
        </ul>

        <ul className="m-4 font-serif bg-blue-500 rounded-lg rounded-t-xl item-center w-80 h-80">
          <li>
            <img
              src={portaLlaves}
              alt="imagenTV"
              className="h-40 p-2 bg-blue-500 rounded-lg w-80 "
            />
          </li>
          <li className="m-2 text-center bg-blue-200 rounded-lg">
            Porta llaveros con macetas
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">$3.900</li>
          <li className="m-2 text-center line-through bg-blue-400 rounded-lg">
            $5.600
          </li>
          <li className="m-2 text-center bg-blue-200 rounded-lg">
            <button className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" href="">
                {" "}
                mas info aqui
              </a>
            </button>
          </li>
        </ul>

        <ul className="m-4 font-serif bg-blue-500 rounded-lg rounded-t-xl item-center w-80 h-80">
          <li>
            <img
              src={escritorio}
              alt="imagenTV"
              className="h-40 p-2 bg-blue-500 rounded-lg w-80 "
            />
          </li>
          <li className="m-2 text-center bg-blue-200 rounded-lg">
            Escritorio moderno
          </li>
          <li className="m-2 text-center bg-blue-300 rounded-lg">$51.000</li>
          <li className="m-2 text-center line-through bg-blue-400 rounded-lg">
            $68.500
          </li>
          <li className="m-2 text-center bg-blue-200 rounded-lg">
            <button className="rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
              <a target="blank" href="">
                {" "}
                mas info aqui
              </a>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default latestoffers;
