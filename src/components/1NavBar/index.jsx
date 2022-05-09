import { navigationBar } from "../../data";
import logo from "../Imagenes/logo.png"
import search from "../Imagenes/search.png"
import shop from "../Imagenes/shop.png"
import user from "../Imagenes/user.png"

const NavBar = () => {




return (
  <div className="sm:flex flex-row justify-between px-1 py-1 text-md font-serif text-cyan-800  text-center bg-blue-100">

    <a href="www.numenstore.com"><img className=" h-28 p-1 w-60 " src={logo} alt="NumenStore" /></a>

    
      {navigationBar.map((seccion) => (
        <nav key={seccion.id}>
        <ul className=" ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light duration-300 h-1 list-none justify-items-center mt-20 ">
          <li>
            <button> {seccion.button} </button>
          </li>
        </ul>
        </nav >
      )
      )}
    
    
      <ul className=" ml-10 px-2 mt-20 list-none space-between">
        <li className=" mx-4">
          <button> <img className="ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light duration-300 w-9 h-8 mx-1" src={search} alt="search" /> </button>
          <button> <img className="ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light duration-300 w-9 h-8 mx-1" src={shop} alt="carrito" /></button>
          <button> <img className="ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light duration-300 w-9 h-8 mx-1" src={user} alt="usuario" /></button>
          
        </li>
      </ul>
    
    
  </div>
)
};

export default NavBar