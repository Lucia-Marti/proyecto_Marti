import CartWidget from "./CartWidget"
import {NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    
    <header>

      <Link to="/"> 
        <h1>Blue Brand</h1>
      </Link>
        
      <CartWidget/>
      
      <nav>
          <NavLink to="/categoria/aros"> Aros</NavLink>
          <NavLink to="/categoria/collar"> Collares</NavLink>    
          <NavLink to="/categoria/anillo"> Anillos</NavLink>    
          <NavLink to="/categoria/pulsera"> Pulseras</NavLink>    
          <NavLink to="/Cart"> Carrito</NavLink>   
      </nav>
            
    </header>
  )
}

export default NavBar