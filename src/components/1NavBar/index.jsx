import logo from "../Imagenes/logo.png"

const NavBar = () => {

  const navigationBar = [
    { id: 1, section: "Home" },
    { id: 2, section: "Categories" },
    { id: 3, section: "Offers" },
    { id: 4, section: "WhyChoose" },
    { id: 5, section: "About Us" }
  ];

  const options = [
    { id: 1, section: "Usuario" },
    { id: 2, section: "Busqueda" },
    { id: 3, section: "Carrito" }
  ];
  return (
    <div className="flex flex-row flex-wrap content-center justify-between h-40 mx-auto bg-blue-100 p5">

      <a href="www.numenstore.com"> <img className="flex flex-row p-4 h-35 w-60" src={logo} alt="Logo Numen Store" /></a>

      
        <ul className="flex flex-row justify-center p-2 space-x-8 text-center xl mt-14 h-30 w-fit">
          {navigationBar.map(seccion => {
            return <li key={seccion.id}> {seccion.section} </li>
          })}
        </ul>



        <ul className="flex flex-row p-2 space-x-4 text-right mt-14 h-30 w-25">
          {options.map(seccion => {
            return <li key={seccion.id}> {seccion.section} </li>
          })}
        </ul>
    
    </div>
  )
}

export default NavBar