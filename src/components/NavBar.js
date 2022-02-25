import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    
    <header>
        <h1>Blue Brand</h1>

        <CartWidget/>
        
        <nav>
            <a href="#">Inicio</a>
            <a href="#">Colección</a>
            <a href="#">Locales</a>
            <a href="#">Nosotros</a>.          
        </nav>
            
    </header>
  )
}

export default NavBar