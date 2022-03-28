import { useContext } from 'react';
import { contexto } from '../context/CartContext';


const CartWidget = () => {

  const {cantidad} = useContext(contexto)

  if (cantidad != 0) {
    return (
      <div id="cart"> 
        <span className="material-icons"> shopping_cart </span>    
        {cantidad}
      </div>
    )} else {
       return (null)
    }
}
 
export default CartWidget