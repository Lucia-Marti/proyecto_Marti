import CartWidget from "./CartWidget"
import {NavLink, Link } from "react-router-dom"

import { useContext } from "react"
import {contexto} from "../context/CartContext.js"

const NavBar = () => {

  const {cantidad} = useContext(contexto)
  return (
    
    <header>

      <Link to="/"><h1>Blue Brand </h1> </Link>

      <Link to="/Cart"> <CartWidget/> </Link>
      
      <nav>
          <NavLink to="/categoria/aros"> Aros</NavLink>
          <NavLink to="/categoria/collar"> Collares</NavLink>    
          <NavLink to="/categoria/anillo"> Anillos</NavLink>    
          <NavLink to="/categoria/pulsera"> Pulseras</NavLink>    
      </nav>
            
    </header>
  )
}

export default NavBar