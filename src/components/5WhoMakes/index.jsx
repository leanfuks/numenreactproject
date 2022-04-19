import React from "react";
import delivery from "../Imagenes/delivery.png"
import Nosotros from "./Nosotros";
const nosotros = () => {
  return (
    <div className="flex flex-row flex-wrap p-6 font-serif bg-blue-400">
      <ul className="w-auto h-64 pl-20">
        <dt className="pb-4">
          <strong>UN POCO SOBRE NOSOTROS:</strong>
        </dt>
        <li className="pb-10 list-disc">
          Comenzamos en este mundo de la compra-venta a fines de lograr un
          cambio en el mercado.
        </li>
        <li className="pb-10 list-disc">
          Optimizado y empleando nuevas tecnicas para la comodidad de nuetros
          consumidores, adquiriendo las mejores marcas, precios y calidad.
        </li>
        <li className="pb-10 list-disc">
          Somos lideres en el mercado de forma sustentable, con nuestro innovador packagin biodegradable y compostable!
        </li>
        <li className="pb-10 list-disc">
          Nos embarcamos a que tenga una magnifica experiencia de uso con
          nosotros y apostando a que nos siga eligiendo!
        </li>
        <li>
        <button className="w-20 h-6 bg-blue-200 rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"><a target="blank" href={Nosotros}> Leer mas</a></button>
        </li>
      </ul>
      <ul className="pl-10 m-2 w-80 h-96">
        <img src={delivery} alt="imagen delivery" width="250px" />
      </ul>
    </div>
  );
};

export default nosotros;
