import React from "react";
import delivery from "../Imagenes/delivery.png"
import Nosotros from "./Nosotros.jsx";
const WhoMakes= () => {
  return (
    <div className="flex justify-center items-center text-justify flex-row flex-wrap w-full h-100  font-calibri bg-blue-100">
      <ul className="m-4">
        <dt className="pb-4l ">
          <strong>¿Quiénes somos?</strong>
        </dt>
        <li className="pb-10">
          Comenzamos este proyecto para lograr un cambio en el mercado, acercando la tecnología a tu alcance.
        </li>
        <li className="pb-10">
          Optimizamos y empleamos técnicas de satisfacción en la experiencia de usuario al utilizar nuestros servicios.
        </li>
        <li className="pb-10">
          Somos una empresa certificada con ISO 14001, empleando packing sustentable y ¡100% compostable!
        </li>
        <li className="pb-10">
          Nuestros vehículos de logística son 100% eléctricos, apostamos a disminuir todos los días la emisión de CO2.
        </li>
        <li>
        <button className="w-20 h-6 bg-blue-500 rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"><a target="blank" href={Nosotros}> Leer más</a></button>
        </li>
      </ul>
      <ul className=" flex flex-nowrap pl-10 m-2 w-50 h-100">
        <img className= "" src={delivery} alt="imagen delivery" width="200px" />
      </ul>
    </div>
  );
};

export default WhoMakes;
