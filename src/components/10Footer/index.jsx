import logo from "../Imagenes/logo.png"
const footer = () => {
  return (
    <div className="flex flex-wrap justify-center font-calibri bg-blue-100 h-full w-full">
      <a href="www.numenstore.com"> <img className="h-20 pt-4 m-10 w-52" src={logo} alt="Logo Numen Store" /></a>
      <ul className="flex flex-col justify-center text-justify  h-64 w-96 ">
        <dt className="">
          <strong>CONTACTANOS </strong>
        </dt>
        <li>Atención al Cliente: 0810-0000-00000</li>
        <li>Reclamos: 0810-0000-00010</li>
        <li>Mail: contacto@numenstore.com</li>
        <li>Envios y Logística: <a href="mailto:logistica@numenstore.com">logistica@numenstore.com </a></li>
        <li> <a target="blank" href="www.numenstore.com/cancelacion"> Botón de Arrepentimiento </a></li>
      </ul>
      <ul className="flex flex-col justify-center text-justify h-64  w-96 ">
        <dt className="">
          <strong>SOBRE NOSOTROS</strong>
        </dt>
        <li> <a target="blank" href="www.numenstore.com/sustentabilidad">Sustentabilidad </a> </li>
        <li> <a target="blank" href="www.numenstore.com/packing">Packing Biodegradable </a> </li>
        <li> <a target="blank" href="www.numenstore.com/tuso">Términos de Uso </a> </li>
        <li> <a target="blank" href="www.numenstore.com/cservicio">Condiciones de Servicio </a> </li>
        <li> <a target="blank" href="www.numenstore.com/einternacionales">Envios Internacionales</a> </li>
   
        
      </ul>
      <ul className="flex flex-col justify-center text-left h-64  w-96 ">
        <dt className="">
          <strong> PROMOCIONES </strong>
        </dt>
        <li> <a href="3LaterstOffers/index.jsx#ofertas">Ofertas</a> </li>
        <li> <a target="blank" href="www.numenstore.com/pentregas">Puntos de Entrega</a> </li>
        <li> <a target="blank" href="www.numenstore.com/sucursales">Sucursales Numen Point</a> </li>
        <li> <a target="blank" href="www.numenstore.com/ncard">Numen Card Mastercard</a> </li>
        <li> <a target="blank" href="www.numenstore.com/pago">Medios de Pago</a> </li>


        
      </ul>
    </div>
  );
};

export default footer;
