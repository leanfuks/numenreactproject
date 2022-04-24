import React from "react";
import icon1 from "../Imagenes/icon1.jpg";
import icon2 from "../Imagenes/icon2.jpg";
import icon3 from "../Imagenes/icon3.jpg";
import icon4 from "../Imagenes/icon4.jpg";
import icon5 from "../Imagenes/icon5.jpg";


const WhyChoose = () => {
  return (

    <div>
        <h1 className="flex flex-wrap justify-center w-full h-full mt-4 text-4xl font-extrabold font-calibri">
        ¿Porque Elegir Nuestros Productos?
         </h1>
    <div className="flex flex-wrap justify-center w-full h-full grid-cols-5 col-span-10 gap-3 mt-10 md:grid-cols-12">
         <div className="col-span-5 md:col-span-2 ">
         <ul className="m-4 font-serif rounded-lg rounded-t-xl item-center h-80">
          <li>
            <img src={icon1} className="p-2 rounded-lg w-30 h-30 justify-items-center"/>
            </li>
            <li className="text-lg italic font-bold text-blue-900">Descubre Nuevos Productos</li>
            <li className="mt-6 text-base italic ">
              <p>Descubra nuestros productos,</p>
              <p>ofrecemos productos con </p>
               <p>diseños exclusivos y</p>
              <p> tecnologias innovadoras que</p>
              <p>se adaptan a cada una</p>
              <p>de sus necesidades.</p>
              </li>
          </ul>
          </div>
         <div className="col-span-5 md:col-span-2">
         <ul className="m-3 font-serif rounded-lg rounded-t-xl item-center h-80">
          <li>
            <img src={icon2} className="p-2 rounded-lg w-30 h-30 "/>
            </li>
            <p className="text-lg italic font-bold text-blue-900">Compras Al Por Mayor</p>
            <li className="mt-6 text-base italic">
              <p>Ofrecemos una variedad</p>
              <p>de productos exclusivos </p>
               <p>y de gran utilidad</p>
              <p>pudiendo ahorrar dinero</p>
              <p>comprando por mayor</p>
              <p>a un gran precio.</p>
              </li>
          </ul>
         </div>
         <div className="col-span-5 md:col-span-2">
         <ul className="m-3 font-serif rounded-lg rounded-t-xl item-center h-80">
          <li>
            <img src={icon3} className="p-2 rounded-lg w-30 h-30"/>
            </li>
            <li className="text-lg italic font-bold text-blue-900">Produccion Local</li>
            <li className="mt-6 text-base italic">
              <p>Al comprar por </p>
              <p>mayor nuestros</p>
              <p>productos, apoyas</p>
              <p>el desarollo de </p>
              <p>emprendedores locales</p>
              <p>y el crecimiento</p>
              <p>de empleos.</p>
              </li>
          </ul>
         </div>
         <div className="col-span-5 md:col-span-2">
         <ul className="m-5 font-serif rounded-lg rounded-t-xl item-center h-80">
          <li>
            <img src={icon4} className="p-2 rounded-lg w-30 h-30"/>
            </li>
            <li className="text-lg italic font-bold text-blue-900" >Compromiso De Calidad</li>
            <li className="mt-6 text-base italic">
              <p>Siendo la calidad </p>
              <p>el pilar fundamental</p>
              <p>del negocio</p>
              <p>todos nuestros productos</p>
               <p>estan sujetos a </p>
              <p>estrictos controles</p>
               <p> de calidad.</p>
              </li>
          </ul>
          
         </div>
         <div className="col-span-5 md:col-span-2">
         <ul className="m-5 font-serif rounded-lg rounded-t-xl item-center h-80">
          <li>
            <img src={icon5} className="p-2 rounded-lg w-30 h-30"/>
            </li>
            <li className="text-lg italic font-bold text-blue-900">Satisfaccion Del Cliente</li>
            <li className="mt-6 text-base italic">
                <p>Nuestro objetivo es </p>
                <p>asegurar su satisfaccion</p>
                <p>con el producto</p>
                <p>recibido y la</p>
                <p>atencion brindada.</p>
              </li>
          </ul>
         </div>
      </div>
    </div>
  );
}

export default WhyChoose;
