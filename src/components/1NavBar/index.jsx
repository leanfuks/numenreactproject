import { navigationBar } from "../../data";
import logo from "../Imagenes/logo.png"
import search from "../Imagenes/search.png"
import shop from "../Imagenes/shop.png"
import user from "../Imagenes/user.png"

const NavBar = () => {




return (
  <div className=" p-4 flex  xsm:flex-col sm:flex-row flex-wrap justify-center items-center gap-12 text-lg font-calibri w-full  text-black bg-blue-200">

    <a href="www.numenstore.com"><img className=" h-20 p-1 w-52 " src={logo} alt="NumenStore" /></a>

    
      {navigationBar.map((seccion) => (
        <nav key={seccion.id}>
        <ul className=" flex delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light duration-300  list-none items-center justify-center ">
          <li>
            <button> {seccion.button} </button>
          </li>
        </ul>
        </nav >
      )
      )}
    
    
      <ul className="list-none space-between">
        <li className=" ">
          <button> <img className="ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light duration-300 w-6 h-6 mx-1" src={search} alt="search" /> </button>
          <button> <img className="ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light duration-300 w-6 h-6 mx-1" src={shop} alt="carrito" /></button>
          <button> <img className="ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-blend-hard-light duration-300 w-6 h-6 mx-1" src={user} alt="usuario" /></button>
          
        </li>
      </ul>
    
    
  </div>
)
};

export default NavBar