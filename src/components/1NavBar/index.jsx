import { navigationBar } from "../../data";
import logo from "../Imagenes/logo.png"
import search from "../Imagenes/search.png"
import shop from "../Imagenes/shop.png"
import user from "../Imagenes/user.png"
import { useState } from "react";

const NavBar = () => {


  const [contador, setContador] = useState(0);



return (
  <div className="flex flex-wrap items-center justify-center w-full gap-12 p-4 text-lg text-black bg-blue-200 xsm:flex-col sm:flex-row font-calibri">

    <a href="www.numenstore.com"><img className="h-20 p-1 w-52" src={logo} alt="NumenStore" /></a>

    
      {navigationBar.map((seccion) => (
        <nav key={seccion.id}>
        <ul className="flex items-center justify-center list-none duration-300 delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light">
          <li>
            <button > {seccion.button} </button>
          </li>
        </ul>
        </nav >
      )
      )}
    
    
      <ul className="list-none space-between">
        <li>
          <button> <img className="w-6 h-6 mx-1 duration-300 ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light" src={search} alt="search" /> </button>
          <button> <img className="w-6 h-6 mx-1 duration-300 ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light" src={user} alt="usuario" /></button>
          <button onClick={
            () => setContador (contador + 1)
          }><img className="w-6 h-6 mx-1 duration-300 ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light" src={shop} alt="carrito" /></button>
          {contador}
        </li>
      </ul>
    
    
  </div>
)
};

export default NavBar