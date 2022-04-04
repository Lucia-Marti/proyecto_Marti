import { useContext } from "react"
import { Link } from "react-router-dom"
import {contexto} from "../context/CartContext.js"

const Carrito = () => {

  const {carrito,removeItem,clear,calcularTotal} = useContext(contexto)

  if (carrito.length === 0) {
    return (
      <div className="sin_items">
        <h2>Carrito</h2>
        <h6>Aún no hay items cargados en el carrito</h6>
        <Link className="volverInicio_carrito" to="/">Volver al inicio</Link>
      </div>
    )
  } else{
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
  
              <button id="borrarItem_carrito" onClick={()=>removeItem(i.id, i.cant)} > X</button>
              
            </div>
        ))}
  
        <p>El total es de ${calcularTotal()} </p>

        <Link className="finalizarCompra" to="/"> Continuar Comprando </Link>

        <Link className="finalizarCompra" to="/FinalizarOrden">Finalizar Orden </Link>
  
        <button onClick={clear} > Limpiar Carrito</button>



      </div>   
    )
  }
}

export default Carrito