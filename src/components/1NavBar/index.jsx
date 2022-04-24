import logo from "../Imagenes/logo.png"

const NavBar = () => {

  const navigationBar = [
    {id: 1, section: "Home"},
    {id: 2, section: "Categories"},
    {id: 3, section: "Offers"},
    {id: 4, section: "WhyChoose"},
    {id: 5, section: "About Us"}
  ];

  const options = [
    {id:1, section: "Usuario"},
    {id:2, section: "Busqueda"},
    {id:3, section: "Carrito"}
  ];
  return (
    <header  style={{listStyle: `none`, display: `flex`, justifyContent: `spacebetween`}}>
      <a href="www.numenstore.com"> <img className= "h-20 pt-4 m-10 w-52" src={logo} alt="Logo Numen Store" /></a>
      <nav>
        <ul>
          {navigationBar.map(seccion => {
            return <li key={seccion.id}> {seccion.section} </li>
          })}
        </ul>
      </nav>

      <nav>
        <ul>
          {options.map(seccion => {
            return <li key={seccion.id}> {seccion.section} </li>
          })}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar