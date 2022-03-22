import { useContext } from 'react';
import { contexto } from './CartContext.js';


const CartWidget = () => {

  const {cantidad} = useContext(contexto)

  return (
      <div id="cart"> 
        <span className="material-icons"> shopping_cart </span>    
        {cantidad}
      </div>
    
  )
}

// (cantidad = 0) ? "no muestro carrito" : "muestro carrito"

export default CartWidget