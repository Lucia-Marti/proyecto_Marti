import { useContext } from 'react';
import { contexto } from '../context/CartContext';


const CartWidget = () => {

  const {cantidad} = useContext(contexto)

  return ( cantidad !== 0 ?
      <div id="cart"> 
        <span className="material-icons"> shopping_cart </span>    
        {cantidad}
      </div>
     : null
  ) 
    
}
 
export default CartWidget