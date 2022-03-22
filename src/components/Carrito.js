import { useContext } from "react"
import {contexto} from "./CartContext.js"

const Carrito = () => {

  const {carrito,removeItem,clear,calcularTotal,item} = useContext(contexto)

  const handleClick = () => {
      removeItem("737255240689",1)
      //como le paso los datos del item ??? de donde los importo por context? o por props?
  }
  return (
    <div>
      <h2>Carrito</h2>

      {carrito.map(i => (
          <div className="item_carrito" key={i.id}>
            <img src={i.image} />
            <div className="item_carrito--info">
            <p>
              {i.title}</p>
              <p>{i.cant} {i.cant === 1 ? "unidad" : "unidades"} x ${i.price} = ${(i.cant * i.price).toFixed(2)}</p>
            </div>

            
            <button id="borrarItem_carrito" onClick={handleClick} > X</button>
            
          </div>
      ))}

      <p>El total es de ${calcularTotal()} </p>

      <button onClick={clear} > Limpiar Carrito</button>
      

    </div>
     
  )
}

export default Carrito