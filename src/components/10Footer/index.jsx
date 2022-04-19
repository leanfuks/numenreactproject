import logo from "../Imagenes/logo.png"
const footer = () => {
  return (
    <div className="flex flex-row flex-wrap font-serif bg-blue-100">
      <img
        className="h-20 pt-4 m-10 w-52"
        src={logo}
        alt="logotipo NumenStore"
      />
      <ul className="h-64 pt-20 pl-20 text-left w-94 ">
        <dt className="p-1">
          <strong> CONTACTANOS </strong>
        </dt>
        <li>linea de reclamos y sugerencias +54 11 1234-5678</li>
        <li>linea de soporte al consumidor +54 11 0000-8000</li>
        <li>contactanos NumenStore@gmail.com</li>
        <li>terminos y condiciones</li>
        <li>ayuda</li>
      </ul>
      <ul className="h-64 pt-20 pl-20 text-left w-94">
        <dt className="p-1">
          <strong> SOBRE NOSOTROS</strong>
        </dt>
        <li>sustentabilidad</li>
        <li>packagin biodegradable</li>
        <li>trabaja con nosotros</li>
      </ul>
      <ul className="h-64 pt-20 pl-20 text-left w-94">
        <dt className="p-1">
          <strong> PROMOCIONES </strong>
        </dt>
        <li>todos los productos</li>
        <li>descubre nuestros puntos de entrega</li>
        <li>puntos Numen Store</li>
        <li>Los dias martes y jueves 20% de descuento en todo el carrito</li>
      </ul>
    </div>
  );
};

export default footer;
